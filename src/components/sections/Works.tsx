import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { WORKS } from '../../data/impressionData';

/** 其二 · 品其作：作品卡片，GLM 的短评用朱砂引出 */
export default function Works() {
  return (
    <section id="works" className="sec">
      <SectionHead title={WORKS.title} subtitle={WORKS.subtitle} />

      <Reveal>
        <p className="lead-line">{WORKS.lead}</p>
      </Reveal>

      <div className="proj-grid">
        {WORKS.projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 90} className="proj-cell">
            <a
              className={`proj ${i % 2 === 0 ? 'tilt-l' : 'tilt-r'}`}
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="proj-head">
                <h3 className="proj-title">{p.title}</h3>
                <span className="proj-lang">
                  <span className="lang-dot" style={{ background: p.langColor }} />
                  {p.lang}
                </span>
                {p.stars && <span className="proj-stars">{p.stars}</span>}
              </div>
              <p className="proj-desc">{p.desc}</p>
              <p className="proj-impression">「 {p.impression} 」</p>
              <p className="proj-link-hint">↗ 去看看</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="tail-line">{WORKS.tail}</p>
      </Reveal>
    </section>
  );
}
