import { useEffect, useRef, useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import {
  REPO_GROUPS,
  REPOS_TOTAL,
  REPOS_FORK_COUNT,
  REPOS_SNAPSHOT,
  type RepoItem,
} from '../../data/reposData';
import { audioSynth } from '../../utils/audioSynth';

/**
 * 其三 · 遍览藏库：VincentZyuApps 全部 75 仓库
 * 每个仓库：基本数据 + 短评直出；点「细评」弹出悬浮窗，假·LLM 流式长评
 */
export default function Repos() {
  const [active, setActive] = useState<RepoItem | null>(null);

  return (
    <section id="repos" className="sec">
      <SectionHead title="其三 · 遍览藏库" subtitle="The Vaults, Wandered" />

      <Reveal>
        <p className="lead-line">
          亮眼的先看七个，这里一个都不少——
          {REPOS_TOTAL} 个仓库，{REPOS_FORK_COUNT} 个接手的 fork，六个展柜。
        </p>
      </Reveal>

      <Reveal className="repos-meta" delay={80}>
        <span className="meta-chip">📷 数据快照 {REPOS_SNAPSHOT}</span>
        <span className="meta-chip">◉ = 未决 issues + PRs</span>
        <span className="meta-chip">点「细评」展开悬浮窗</span>
      </Reveal>

      {REPO_GROUPS.map((g, gi) => (
        <div key={g.id} className="repo-group">
          <Reveal>
            <div className="repo-group-head">
              <h3 className="repo-group-title">
                <span className="repo-group-no">{['一', '二', '三', '四', '五', '六'][gi]}</span>
                {g.title}
              </h3>
              <span className="repo-group-count">{g.repos.length} 仓</span>
            </div>
            <p className="repo-group-note">{g.note}</p>
          </Reveal>
          <div className="repo-grid">
            {g.repos.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 70} className="repo-cell">
                <RepoCard repo={r} onOpen={() => setActive(r)} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}

      {active && <RepoModal repo={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function RepoCard({ repo, onOpen }: { repo: RepoItem; onOpen: () => void }) {
  return (
    <article className="repo-card">
      <div className="repo-head">
        <a className="repo-name" href={repo.url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
        {repo.fork && <span className="fork-badge">fork</span>}
      </div>
      <div className="repo-stats">
        <span className="repo-langs">
          {repo.langs.map((l) => (
            <span key={l.name} className="rl">
              <span className="lang-dot" style={{ background: l.color }} />
              {l.name}
              <span className="rl-pct">{l.pct}%</span>
            </span>
          ))}
        </span>
        <span className="rs">★ {repo.stars}</span>
        <span className="rs">⑂ {repo.forks}</span>
        <span className="rs">◉ {repo.issues}</span>
      </div>
      <p className="repo-short">{repo.short}</p>
      <button
        className="repo-toggle"
        onClick={() => {
          audioSynth.tick();
          onOpen();
        }}
      >
        GLM 细评 ▾
      </button>
    </article>
  );
}

type Phase = 'thinking' | 'streaming' | 'done';

/** 细评悬浮窗：先「回忆」半秒，再逐段流出长评；叉叉 / 遮罩 / Esc 关闭 */
function RepoModal({ repo, onClose }: { repo: RepoItem; onClose: () => void }) {
  const [phase, setPhase] = useState<Phase>('thinking');
  const [shown, setShown] = useState('');
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const clear = () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
    clear();
    setPhase('thinking');
    setShown('');
    document.body.style.overflow = 'hidden';

    timers.current.push(
      window.setTimeout(() => {
        setPhase('streaming');
        let i = 0;
        const step = () => {
          i += 3 + Math.floor(Math.random() * 3);
          setShown(repo.long.slice(0, i));
          if (i < repo.long.length) {
            timers.current.push(window.setTimeout(step, 34));
          } else {
            setPhase('done');
          }
        };
        step();
      }, 620),
    );

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clear();
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // repo 变化时重置流式；onClose 由父组件保证稳定重建
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repo]);

  return (
    <div
      className="repo-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${repo.name} 的 GLM 细评`}
    >
      <div className="repo-modal">
        <button
          className="repo-modal-close"
          onClick={() => {
            audioSynth.tick();
            onClose();
          }}
          aria-label="关闭细评"
        >
          ✕
        </button>
        <header className="repo-modal-head">
          <a className="repo-modal-name" href={repo.url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          {repo.fork && <span className="fork-badge">fork</span>}
          <div className="repo-stats">
            <span className="repo-langs">
              {repo.langs.map((l) => (
                <span key={l.name} className="rl">
                  <span className="lang-dot" style={{ background: l.color }} />
                  {l.name}
                  <span className="rl-pct">{l.pct}%</span>
                </span>
              ))}
            </span>
            <span className="rs">★ {repo.stars}</span>
            <span className="rs">⑂ {repo.forks}</span>
            <span className="rs">◉ {repo.issues}</span>
          </div>
        </header>
        <div className="repo-modal-divider" />
        <p className="stream-head">
          <span className="stream-brand">墨</span>
          GLM 的印象 · {REPOS_SNAPSHOT}
        </p>
        {phase === 'thinking' ? (
          <p className="stream-thinking">
            正在回忆<span className="dots" />
          </p>
        ) : (
          <p className="stream-body">
            {shown}
            {phase === 'streaming' && <span className="caret">▌</span>}
          </p>
        )}
      </div>
    </div>
  );
}
