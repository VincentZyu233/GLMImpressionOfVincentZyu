import { useEffect, useRef, useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { DIALOGUE, CREATOR } from '../../data/impressionData';

/** 其四 · 对话：逐条打字重现真实对话（可跳过） */
export default function Dialogue() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState<{ sender: 'glm' | 'vincent'; text: string } | null>(null);
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const timers = useRef<number[]>([]);
  const skipped = useRef(false);

  useEffect(() => {
    const el = rootRef.current!;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.22 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.current.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = () => {
    let acc = 420;
    DIALOGUE.messages.forEach((m, idx) => {
      const typeDur = Math.min(1800, 260 + m.text.length * 25);
      timers.current.push(
        window.setTimeout(() => {
          if (skipped.current) return;
          let i = 0;
          const step = Math.max(14, Math.round(900 / m.text.length));
          setTyping({ sender: m.sender, text: '' });
          const iv = window.setInterval(() => {
            if (skipped.current) {
              clearInterval(iv);
              return;
            }
            i++;
            setTyping({ sender: m.sender, text: m.text.slice(0, i) });
            if (i >= m.text.length) {
              clearInterval(iv);
              setTyping(null);
              setShown(idx + 1);
            }
          }, step);
          timers.current.push(iv);
        }, acc),
      );
      acc += typeDur + 640;
    });
    timers.current.push(
      window.setTimeout(() => {
        if (!skipped.current) setDone(true);
      }, acc),
    );
  };

  const skip = () => {
    skipped.current = true;
    timers.current.forEach((t) => {
      clearTimeout(t);
      clearInterval(t);
    });
    setTyping(null);
    setShown(DIALOGUE.messages.length);
    setDone(true);
  };

  return (
    <section id="dialogue" className="sec" ref={rootRef}>
      <SectionHead title={DIALOGUE.title} subtitle={DIALOGUE.subtitle} />

      <Reveal>
        <p className="lead-line">
          {DIALOGUE.intro}
          {!done && (
            <button className="skip-btn" onClick={skip}>
              跳过 »
            </button>
          )}
        </p>
      </Reveal>

      <div className="chat">
        {DIALOGUE.messages.slice(0, shown).map((m, i) => (
          <Bubble key={i} sender={m.sender} text={m.text} />
        ))}
        {typing && <Bubble sender={typing.sender} text={typing.text} caret />}
        {done && <p className="chat-end">—— 对话未完，长卷继续 ↓ ——</p>}
      </div>
    </section>
  );
}

function Bubble({ sender, text, caret }: { sender: 'glm' | 'vincent'; text: string; caret?: boolean }) {
  return (
    <div className={`msg ${sender}`}>
      {sender === 'glm' ? (
        <span className="avatar glm-avatar" aria-hidden="true">
          墨
        </span>
      ) : (
        <img className="avatar" src={CREATOR.avatar} alt="VincentZyu" loading="lazy" />
      )}
      <div className={`bubble ${sender === 'glm' ? 'bub-glm' : 'bub-vincent'}`}>
        {text}
        {caret && <span className="caret">▌</span>}
      </div>
    </div>
  );
}
