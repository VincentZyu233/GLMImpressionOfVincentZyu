import { useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { PERSON, type LanguageItem } from '../../data/impressionData';

/** 其一 · 观其人：数字画像 + 诚实的第一段真话 */
export default function Person() {
  const [quip, setQuip] = useState<string>('把鼠标放到墨点上，听一句悄悄话');

  const showQuip = (lang: LanguageItem) => {
    setQuip(lang.quip ?? `${lang.name}：也在你的工具箱里躺着`);
  };

  return (
    <section id="person" className="sec">
      <SectionHead title={PERSON.title} subtitle={PERSON.subtitle} />

      <Reveal className="stats">
        {PERSON.stats.map((s) => (
          <div key={s.label} className="stat">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
            <p className="stat-note">{s.note}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="facts" delay={120}>
        {PERSON.facts.map((f) => (
          <div key={f.label} className="fact">
            <p className="fact-label">{f.label}</p>
            <p className="fact-value">{f.value}</p>
            <p className="fact-note">{f.note}</p>
          </div>
        ))}
      </Reveal>

      <div className="body-text">
        {PERSON.body.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="langs" delay={80}>
        <p className="langs-title">十八般武义 · 墨点越大，扎得越深</p>
        <div className="lang-cloud">
          {PERSON.languages.map((l) => (
            <button
              key={l.name}
              className="lang-tag"
              style={{ fontSize: `${12 + l.weight * 2.4}px` }}
              onMouseEnter={() => showQuip(l)}
              onFocus={() => showQuip(l)}
            >
              {l.name}
            </button>
          ))}
        </div>
        <p className="lang-quip">❝ {quip} ❞</p>
      </Reveal>

      <Reveal className="achievements" delay={120}>
        {PERSON.achievements.map((a) => (
          <div key={a.name} className="ach" title={a.note}>
            <span className="ach-icon">{a.icon}</span>
            <span className="ach-name">{a.name}</span>
            <span className="ach-note">{a.note}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
