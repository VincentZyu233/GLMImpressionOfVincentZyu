import { useEffect, useRef, useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { COLOPHON } from '../../data/impressionData';
import { audioSynth } from '../../utils/audioSynth';
import { renderSealCard, SEAL_QUOTES } from '../../utils/sealCard';
import { bindSealLongPress } from '../../utils/eggManager';

/** 卷尾 · 落款：真话信 + 朱砂印章交互 + 墨契拓印 */
export default function Colophon() {
  const [stamped, setStamped] = useState(false);
  const [rot] = useState(() => Math.random() * 10 - 5);
  const [cardOpen, setCardOpen] = useState(false);
  const sealRef = useRef<HTMLButtonElement>(null);

  // 印中印：盖章后长按印章 3 秒有惊喜
  useEffect(() => {
    if (stamped && sealRef.current) {
      return bindSealLongPress(sealRef.current);
    }
  }, [stamped]);

  const stampIt = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (stamped) return;
    setStamped(true);
    audioSynth.stamp();
    const r = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent('ink-pulse', {
        detail: { x: r.left + r.width / 2, y: r.top + r.height / 2 },
      }),
    );
  };

  return (
    <section id="colophon" className="sec colophon">
      <SectionHead title={COLOPHON.title} subtitle={COLOPHON.subtitle} />

      <Reveal>
        <div className="letter">
          <p className="letter-title">{COLOPHON.letterTitle}</p>
          {COLOPHON.letter.map((p, i) =>
            p.startsWith('——') ? (
              <p key={i} className="letter-sig">
                {p}
              </p>
            ) : (
              <p key={i}>{p}</p>
            ),
          )}

          <div className="seal-pad">
            <button
              ref={sealRef}
              className={`seal ${stamped ? 'stamped' : ''}`}
              style={stamped ? { rotate: `${rot}deg` } : undefined}
              onClick={stampIt}
              onMouseEnter={() => !stamped && audioSynth.tick()}
              aria-label="盖上 GLM 之印"
            >
              <span>G</span>
              <span>L</span>
              <span>M</span>
              <span>印</span>
            </button>
            <p className="seal-hint">{stamped ? COLOPHON.seal.stampedNote : COLOPHON.seal.hint}</p>
            {stamped && (
              <button
                className="seal-card-btn"
                onClick={() => {
                  audioSynth.tick();
                  setCardOpen(true);
                }}
              >
                <span className="scb-inner">拓印此卷 · 保存墨契</span>
              </button>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <p className="port-note">{COLOPHON.portNote}</p>
      </Reveal>

      <Reveal delay={160}>
        <div className="links">
          {COLOPHON.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>

      <p className="copyright">{COLOPHON.copyright}</p>

      {cardOpen && <SealCardModal onClose={() => setCardOpen(false)} />}
    </section>
  );
}

/** 墨契预览弹窗：换一句 / 复制 / 下载 PNG（移动端长按保存） */
function SealCardModal({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * SEAL_QUOTES.length));
  const [dataUrl, setDataUrl] = useState('');
  const [night, setNight] = useState(() => document.body.classList.contains('night'));
  const [copyState, setCopyState] = useState<'idle' | 'ok' | 'fail'>('idle');
  const [copiedNote, setCopiedNote] = useState('复制 ⧉');
  const timers = useRef<number[]>([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      timers.current.forEach((t) => clearTimeout(t));
    };
  }, [onClose]);

  // 重绘：等字体就绪，避免文楷未加载时用衬线兜底
  useEffect(() => {
    let alive = true;
    const draw = () => {
      if (!alive) return;
      setDataUrl(
        renderSealCard({
          quote: SEAL_QUOTES[idx],
          date: '丙午年 · 孟秋',
          night,
          stamped: true,
        }),
      );
    };
    if (document.fonts?.ready) {
      document.fonts.ready.then(draw);
    } else {
      timers.current.push(window.setTimeout(draw, 200));
    }
    return () => {
      alive = false;
    };
  }, [idx, night]);

  const download = () => {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `GLM墨契·${SEAL_QUOTES[idx]}.png`;
    a.click();
    audioSynth.stamp();
  };

  const copyImage = async () => {
    if (!dataUrl) return;
    try {
      const blob = await (await fetch(dataUrl)).blob();
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      audioSynth.tick();
      setCopyState('ok');
      setCopiedNote('已复制 ✓');
    } catch {
      audioSynth.pluck(220, 0, 0.6);
      setCopyState('fail');
      setCopiedNote('不支持 ✕');
    }
    timers.current.push(
      window.setTimeout(() => {
        setCopyState('idle');
        setCopiedNote('复制 ⧉');
      }, 2200),
    );
  };

  const isTouch = 'ontouchstart' in window;

  return (
    <div
      className="repo-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="墨契预览"
    >
      <div className="repo-modal seal-modal">
        <button
          className="repo-modal-close"
          onClick={() => {
            audioSynth.tick();
            onClose();
          }}
          aria-label="关闭墨契"
        >
          ✕
        </button>
        <p className="stream-head">
          <span className="stream-brand">墨</span>
          墨契 · 拓印此卷
        </p>
        <div className="seal-card-frame">
          {dataUrl ? <img src={dataUrl} alt="GLM 墨契印象卡" /> : <p className="stream-thinking">研墨中……</p>}
        </div>
        <div className="seal-card-actions">
          <button
            className="repo-toggle"
            onClick={() => {
              audioSynth.tick();
              setIdx((i) => (i + 1) % SEAL_QUOTES.length);
            }}
          >
            换一句 ↻
          </button>
          <button
            className="repo-toggle"
            onClick={() => {
              audioSynth.tick();
              setNight((v) => !v);
            }}
          >
            {night ? '昼版 ☀' : '夜版 ☾'}
          </button>
          <button
            className={`repo-toggle ${copyState === 'ok' ? 'copy-ok' : copyState === 'fail' ? 'copy-fail' : ''}`}
            onClick={copyImage}
          >
            {copiedNote}
          </button>
          <button className="repo-toggle seal-download" onClick={download}>
            保存 PNG ↓
          </button>
        </div>
        <p className="seal-card-hint">
          {copyState === 'fail'
            ? '当前环境不允许写入剪贴板——用「保存 PNG」也一样'
            : isTouch
              ? '手机端：长按卡片图片即可保存'
              : '复制后可直接粘贴到聊天窗口 · 也可下载 1080×1440 PNG'}
        </p>
      </div>
    </div>
  );
}
