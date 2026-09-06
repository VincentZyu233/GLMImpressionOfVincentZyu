import { useEffect, useRef, useState } from 'react';
import InkCanvas from './components/InkCanvas';
import SideNav, { type SectionDef } from './components/SideNav';
import Hero from './components/sections/Hero';
import Person from './components/sections/Person';
import Works from './components/sections/Works';
import Repos from './components/sections/Repos';
import Timeline from './components/sections/Timeline';
import Spirit from './components/sections/Spirit';
import Stargazer from './components/sections/Stargazer';
import Shelf from './components/sections/Shelf';
import Dialogue from './components/sections/Dialogue';
import Colophon from './components/sections/Colophon';
import { audioSynth } from './utils/audioSynth';
import { bindKeyboardEggs } from './utils/eggManager';

const SECTIONS: SectionDef[] = [
  { id: 'hero', label: '卷首' },
  { id: 'person', label: '观人' },
  { id: 'works', label: '品作' },
  { id: 'repos', label: '藏库' },
  { id: 'timeline', label: '岁时' },
  { id: 'spirit', label: '知趣' },
  { id: 'stars', label: '星图' },
  { id: 'shelf', label: '书架' },
  { id: 'dialogue', label: '对话' },
  { id: 'colophon', label: '落款' },
];

const NIGHT_KEY = 'scroll-night';

type ThemeMode = 'auto' | 'night' | 'day';

function loadMode(): ThemeMode {
  try {
    const saved = localStorage.getItem(NIGHT_KEY);
    if (saved === 'night' || saved === 'day') return saved;
  } catch {
    /* ignore */
  }
  return 'auto';
}

/** 按模式算当前应为夜卷否；auto 跟随系统 */
function effectiveNight(mode: ThemeMode): boolean {
  if (mode === 'night') return true;
  if (mode === 'day') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function App() {
  const [active, setActive] = useState('hero');
  const [sound, setSound] = useState(true);
  const [mode, setMode] = useState<ThemeMode>(loadMode);
  const [night, setNight] = useState(() => effectiveNight(loadMode()));
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    audioSynth.enabled = sound;
  }, [sound]);

  // 长卷秘藏：Konami / 端口应答等键盘序列
  useEffect(() => bindKeyboardEggs(), []);

  // 主题三态：auto 跟随系统（含系统切换的实时响应），night/day 钉死
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => setNight(effectiveNight(mode));
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [mode]);

  // 夜卷落纸 + localStorage + 广播给 InkCanvas 等原生层
  useEffect(() => {
    document.body.classList.toggle('night', night);
    try {
      localStorage.setItem(NIGHT_KEY, mode);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { night } }));
  }, [night, mode]);

  // 循环：auto → night → day → auto
  const cycleTheme = () => {
    const next: ThemeMode = mode === 'auto' ? 'night' : mode === 'night' ? 'day' : 'auto';
    setMode(next);
    audioSynth.tick();
    showToast(
      next === 'auto'
        ? '主题已跟随系统——天黑自动点灯，天亮自动铺纸。'
        : next === 'night'
          ? '夜深了，墨也该歇了——但你还在，我也在。'
          : '天亮了，纸又白回来了。',
    );
  };

  const themeLabel = mode === 'auto' ? (night ? '☾ 随·夜' : '☀ 随·昼') : mode === 'night' ? '☾ 夜' : '☀ 昼';

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3200);
  };

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
        <a
          className="corner-gh"
          href="https://github.com/VincentZyu233/GLMImpressionOfVincentZyu"
          target="_blank"
          rel="noreferrer"
          aria-label="本卷源码仓库"
          onMouseEnter={() => audioSynth.tick()}
        >
          <svg className="gh-mark" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.66-.21-2.2.82a7.68 7.68 0 0 0-2-.27c-.68 0-1.36.09-2 .27-1.54-1.02-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
          源码 ↗
        </a>
        <button
          className="night-btn"
          onClick={cycleTheme}
          aria-label={`主题模式：${mode === 'auto' ? '跟随系统' : mode === 'night' ? '夜卷' : '昼卷'}，点击切换`}
        >
          {themeLabel}
        </button>
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
        <Timeline />
        <Spirit />
        <Stargazer />
        <Shelf />
        <Dialogue />
        <Colophon />
      </main>

      {toast && (
        <div className="global-toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
}
