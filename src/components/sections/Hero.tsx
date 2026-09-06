import { HERO } from '../../data/impressionData';
import { onHeroTap } from '../../utils/eggManager';

/** 卷首：竖排大字「你好」+ 开卷语（连点有惊喜） */
export default function Hero() {
  return (
    <section id="hero" className="sec hero">
      <p className="hero-chip">GLM 印象长卷 · 卷首</p>
      <div className="hero-center">
        <h1
          className="hero-big hero-big-tap"
          onClick={onHeroTap}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onHeroTap();
          }}
          aria-label="你好（可以点点看）"
        >
          {HERO.bigTitle}
        </h1>
        <p className="hero-note-v">{HERO.bigTitleNote}</p>
      </div>
      <div className="hero-intro">
        {HERO.intro.map((line, i) =>
          line === '' ? <div key={i} className="gap" /> : <p key={i}>{line}</p>,
        )}
      </div>
      <p className="hero-meta">{HERO.metaLine}</p>
      <div className="hero-hint" aria-hidden="true">
        <span className="arrow">▽</span> {HERO.scrollHint} <span className="arrow">▽</span>
      </div>
    </section>
  );
}
