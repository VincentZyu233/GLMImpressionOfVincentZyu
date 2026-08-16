import { useEffect, useRef, useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { REPO_GROUPS, REPOS_TOTAL, REPOS_FORK_COUNT, REPOS_SNAPSHOT, type RepoItem } from '../../data/reposData';
import { audioSynth } from '../../utils/audioSynth';

/**
 * 其三 · 遍览藏库：VincentZyuApps 全部 75 仓库
 * 每个仓库：基本数据 + 短评直出；点「细评」展开假·LLM 流式长评
 */
export default function Repos() {
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
        <span className="meta-chip">点「细评」看长评</span>
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
                <RepoCard repo={r} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

type Phase = 'collapsed' | 'thinking' | 'streaming' | 'done';

function RepoCard({ repo }: { repo: RepoItem }) {
  const [phase, setPhase] = useState<Phase>('collapsed');
  const [shown, setShown] = useState('');
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => timers.current.forEach((t) => clearTimeout(t));
  }, []);

  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  const toggle = () => {
    audioSynth.tick();
    if (phase === 'collapsed') {
      // 展开：先「回忆」半秒，再逐段流出
      setPhase('thinking');
      timers.current.push(
        window.setTimeout(() => {
          setPhase('streaming');
          let i = 0;
          const step = () => {
            i += 3 + Math.floor(Math.random() * 3);
            setShown(repo.long.slice(0, i));
            if (i < repo.long.length) {
              timers.current.push(window.setTimeout(step, 42));
            } else {
              setPhase('done');
            }
          };
          step();
        }, 560),
      );
    } else {
      // 收起：中断流式，重置
      clearTimers();
      setPhase('collapsed');
      setShown('');
    }
  };

  const open = phase !== 'collapsed';

  return (
    <article className={`repo-card ${open ? 'open' : ''}`}>
      <div className="repo-head">
        <a className="repo-name" href={repo.url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
        {repo.fork && <span className="fork-badge">fork</span>}
      </div>
      <div className="repo-stats">
        <span className="repo-lang">
          <span className="lang-dot" style={{ background: repo.langColor }} />
          {repo.lang}
        </span>
        <span className="rs">★ {repo.stars}</span>
        <span className="rs">⑂ {repo.forks}</span>
        <span className="rs">◉ {repo.issues}</span>
      </div>
      <p className="repo-short">{repo.short}</p>
      <button className="repo-toggle" onClick={toggle} aria-expanded={open}>
        {phase === 'done' ? '细评 · 收起 ▴' : open ? '打断回忆 ✕' : 'GLM 细评 ▾'}
      </button>
      {open && (
        <div className="repo-stream">
          <p className="stream-head">
            <span className="stream-brand">墨</span>
            GLM 的印象 · {REPOS_SNAPSHOT}
          </p>
          {phase === 'thinking' ? (
            <p className="stream-thinking">
              正在回忆 <span className="dots" />
            </p>
          ) : (
            <p className="stream-body">
              {shown}
              {phase === 'streaming' && <span className="caret">▌</span>}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
