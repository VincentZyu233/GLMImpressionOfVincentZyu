import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { SPIRIT } from '../../data/impressionData';

/** 其三 · 知其趣：你挂在首页的名言墙 + 小剧场 */
export default function Spirit() {
  return (
    <section id="spirit" className="sec">
      <SectionHead title={SPIRIT.title} subtitle={SPIRIT.subtitle} />

      <Reveal>
        <p className="lead-line">{SPIRIT.quotesIntro}</p>
      </Reveal>

      <div className="quote-wall">
        {SPIRIT.quotes.map((q, i) => (
          <Reveal key={q.author} delay={i * 90} className={`quote-cell ${q.vertical ? 'has-vertical' : ''}`}>
            <blockquote className={`quote ${q.vertical ? 'vertical' : ''}`}>
              <p>{q.text}</p>
              <cite>—— {q.author}</cite>
            </blockquote>
            <p className="quote-note">{q.note}</p>
          </Reveal>
        ))}
      </div>

      <div className="theater">
        {SPIRIT.theater.map((t, i) => (
          <Reveal key={t.title} delay={i * 80}>
            <div className="theater-item">
              <span className="theater-icon">{t.icon}</span>
              <div>
                <p className="theater-title">{t.title}</p>
                <p className="theater-desc">{t.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="body-text">
        {SPIRIT.body.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
