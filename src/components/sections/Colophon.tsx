import { useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { COLOPHON } from '../../data/impressionData';
import { audioSynth } from '../../utils/audioSynth';

/** 卷尾 · 落款：真话信 + 朱砂印章交互 */
export default function Colophon() {
  const [stamped, setStamped] = useState(false);
  const [rot] = useState(() => Math.random() * 10 - 5);

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
    </section>
  );
}
