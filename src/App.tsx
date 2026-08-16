import { useEffect, useState } from 'react';
import InkCanvas from './components/InkCanvas';
import SideNav, { type SectionDef } from './components/SideNav';
import Hero from './components/sections/Hero';
import Person from './components/sections/Person';
import Works from './components/sections/Works';
import Repos from './components/sections/Repos';
import Spirit from './components/sections/Spirit';
import Dialogue from './components/sections/Dialogue';
import Colophon from './components/sections/Colophon';
import { audioSynth } from './utils/audioSynth';

const SECTIONS: SectionDef[] = [
  { id: 'hero', label: '卷首' },
  { id: 'person', label: '观人' },
  { id: 'works', label: '品作' },
  { id: 'repos', label: '藏库' },
  { id: 'spirit', label: '知趣' },
  { id: 'dialogue', label: '对话' },
  { id: 'colophon', label: '落款' },
];

export default function App() {
  const [active, setActive] = useState('hero');
  const [sound, setSound] = useState(true);

  useEffect(() => {
    audioSynth.enabled = sound;
  }, [sound]);

  // 滚动侦察：以视口中线为准；换章时拨一声琴、溅一捧墨
  useEffect(() => {
    const observers = SECTIONS.map((s) => {
      const el = document.getElementById(s.id)!;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setActive((prev) => {
                if (prev !== s.id) {
                  audioSynth.chime();
                  window.dispatchEvent(
                    new CustomEvent('ink-pulse', {
                      detail: {
                        x: window.innerWidth * (0.25 + Math.random() * 0.5),
                        y: window.innerHeight * 0.35,
                      },
                    }),
                  );
                }
                return s.id;
              });
            }
          });
        },
        { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <InkCanvas />

      <div className="corner-cluster">
        <span className="corner-brand">GLM · 印象长卷</span>
        <button
          className="sound-btn"
          onClick={() => {
            setSound((v) => !v);
            audioSynth.tick();
          }}
          aria-label={sound ? '关闭声音' : '开启声音'}
        >
          {sound ? '♪ 音' : '× 默'}
        </button>
      </div>

      <SideNav sections={SECTIONS} activeId={active} onJump={jump} />

      <main className="scroll">
        <Hero />
        <Person />
        <Works />
        <Repos />
        <Spirit />
        <Dialogue />
        <Colophon />
      </main>
    </>
  );
}
