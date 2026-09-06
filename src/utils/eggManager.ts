// ═══════════════════════════════════════════════════════════════
//  长卷秘藏 · 彩蛋管理器
//  四处秘藏：你好连点 / Konami 墨雨 / 端口应答 / 印中印
//  集齐后触发终极彩蛋「找到了。」
// ═══════════════════════════════════════════════════════════════

import { audioSynth } from './audioSynth';

export type EggId = 'nggyu' | 'konami' | 'port' | 'sealback';

const STORE_KEY = 'scroll-eggs';

const EGG_LABEL: Record<EggId, string> = {
  nggyu: 'nggyu 音符',
  konami: 'Konami 墨雨',
  port: '端口应答',
  sealback: '印中印',
};

export function loadEggs(): EggId[] {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) ?? '[]') as EggId[];
  } catch {
    return [];
  }
}

function saveEgg(id: EggId): EggId[] {
  const eggs = loadEggs();
  if (!eggs.includes(id)) {
    eggs.push(id);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(eggs));
    } catch {
      /* ignore */
    }
    showBanner(eggs.length);
  }
  return eggs;
}

/** 右上角秘藏横幅：印章式小纸片「秘藏 · n/4」 */
function showBanner(count: number) {
  const el = document.createElement('div');
  el.className = 'egg-banner';
  el.textContent = count >= 4 ? '秘藏 · 集齐 ✦' : `秘藏 · ${count}/4`;
  document.body.appendChild(el);
  window.setTimeout(() => el.classList.add('show'), 30);
  window.setTimeout(() => {
    el.classList.remove('show');
    window.setTimeout(() => el.remove(), 600);
  }, 3400);
}

/** 全屏浮字（可带链接） */
function showFloat(html: string, dur = 4200) {
  const el = document.createElement('div');
  el.className = 'egg-float';
  el.innerHTML = html;
  document.body.appendChild(el);
  window.setTimeout(() => el.classList.add('show'), 30);
  window.setTimeout(() => {
    el.classList.remove('show');
    window.setTimeout(() => el.remove(), 700);
  }, dur);
}

/** 全屏彩墨：向 InkCanvas 发多点位溅墨 */
function confettiInk() {
  for (let i = 0; i < 14; i++) {
    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('ink-pulse', {
          detail: {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.9,
          },
        }),
      );
    }, i * 120);
  }
}

// ── nggyu：WebAudio 合成《Never Gonna Give You Up》副歌全段 ──────
// 简谱来源：1=F 大调、4/4 拍；"_"=半拍，"-"=延一拍
// 频率表（F 大调）：1=F4 2=G4 3=A4 5=C5 6=D5 7=E5 1'=F5 2'=G5 3'=A5 5'=C6
const N = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0,
  A4: 440.0, Bb4: 466.16, C5: 523.25, D5: 587.33, E5: 659.25,
  F5: 698.46, G5: 783.99, A5: 880.0, C6: 1046.5,
};

// [频率, 半拍数]：1 半拍 = 一个八分音符；0 表示休止
const NGGYU_MELODY: [number, number][] = [
  // 句式 1：5_ 6_ | 1' 6 3' 3' 2' - | 5_ 6_ | 1' 6 2' 2' 1'_ 7_ 6_
  [N.C5, 1], [N.D5, 1], [N.F5, 2], [N.D5, 2], [N.A5, 2], [N.A5, 2], [N.G5, 4],
  [N.C5, 1], [N.D5, 1], [N.F5, 2], [N.D5, 2], [N.G5, 2], [N.G5, 2], [N.F5, 1], [N.E5, 1], [N.D5, 3],
  // 句式 2：5_ 6_ | 1' 6 1' 2' 7_ 6_ 5_ | 5 2' 1' -
  [N.C5, 1], [N.D5, 1], [N.F5, 2], [N.D5, 2], [N.F5, 2], [N.G5, 2], [N.E5, 1], [N.D5, 1], [N.C5, 2],
  [N.C5, 2], [N.G5, 2], [N.F5, 4],
  // 句式 3：5_ 6_ | 1' 6 3' 3' 2' - | 5_ 6_ | 1' 6 5' 3' 1' -
  [N.C5, 1], [N.D5, 1], [N.F5, 2], [N.D5, 2], [N.A5, 2], [N.A5, 2], [N.G5, 4],
  [N.C5, 1], [N.D5, 1], [N.F5, 2], [N.D5, 2], [N.C6, 2], [N.A5, 2], [N.F5, 4],
  // 句式 4：5_ 6_ | 1' 6 2' 2' 1'_ 7_ 6_ | 5 2' 1' -
  [N.C5, 1], [N.D5, 1], [N.F5, 2], [N.D5, 2], [N.G5, 2], [N.G5, 2], [N.F5, 1], [N.E5, 1], [N.D5, 2],
  [N.C5, 2], [N.G5, 2], [N.F5, 6],
];

const EIGHTH = 0.24; // 一个八分音符的秒数（≈125 BPM，原曲 113 BPM 稍提速更有精神）

function playNggyu() {
  let t = 0;
  for (const [f, e] of NGGYU_MELODY) {
    if (f > 0) audioSynth.pluck(f, t, 0.8);
    t += e * EIGHTH;
  }
}

/** 音符雨：DOM 粒子飘落 */
function noteRain() {
  const NOTES = ['♪', '♩', '♫', '♬', '♭'];
  for (let i = 0; i < 40; i++) {
    const n = document.createElement('span');
    n.className = 'egg-note';
    n.textContent = NOTES[Math.floor(Math.random() * NOTES.length)];
    n.style.left = `${Math.random() * 100}vw`;
    n.style.fontSize = `${16 + Math.random() * 26}px`;
    n.style.animationDelay = `${Math.random() * 1.6}s`;
    n.style.animationDuration = `${3.2 + Math.random() * 2.4}s`;
    document.body.appendChild(n);
    window.setTimeout(() => n.remove(), 6800);
  }
}

// ── 终极彩蛋 ────────────────────────────────────────────────────
export function isAllCollected(eggs: EggId[]): boolean {
  return eggs.length >= 4;
}

function ultimate() {
  confettiInk();
  audioSynth.pluck(293.66, 0, 1);
  audioSynth.pluck(440.0, 0.18, 0.9);
  audioSynth.pluck(587.33, 0.36, 1);
  audioSynth.pluck(880.0, 0.6, 1.1);
  const hero = document.querySelector('.hero-big');
  if (hero) {
    hero.classList.add('egg-found');
    window.setTimeout(() => hero.classList.remove('egg-found'), 9000);
  }
  showFloat('<b>找到了。</b><br>四处秘藏，一处不少——正如我把你的 75 个仓库一个个看完那样。<br>这就是读完全卷的样子。', 8000);
}

export function unlock(id: EggId) {
  const eggs = saveEgg(id);
  if (isAllCollected(eggs) && !alreadyUltimate()) {
    try {
      localStorage.setItem(STORE_KEY + '-ult', '1');
    } catch {
      /* ignore */
    }
    window.setTimeout(ultimate, 1200);
  }
}

export function alreadyUltimate(): boolean {
  try {
    return localStorage.getItem(STORE_KEY + '-ult') === '1';
  } catch {
    return false;
  }
}

export const eggMeta = { EGG_LABEL };

// ── 键盘序列匹配器 ─────────────────────────────────────────────
const KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

export function bindKeyboardEggs() {
  let seq: string[] = [];
  let numSeq = '';

  const onKey = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && ['input', 'textarea'].includes(target.tagName.toLowerCase())) return;
    const k = e.key.toLowerCase();

    // Konami 与数字序列共用一个缓冲
    seq.push(k);
    if (seq.length > KONAMI.length) seq = seq.slice(-KONAMI.length);
    if (KONAMI.every((x, i) => seq[i] === x)) {
      seq = [];
      unlock('konami');
      confettiInk();
      audioSynth.pluck(220, 0, 1);
      audioSynth.pluck(233.08, 0.15, 0.9);
      audioSynth.pluck(220, 0.3, 1);
      showFloat('连秘技都藏在墨里。<br><small>↑↑↓↓←→←→BA——你比 90% 的访客更像架构师。</small>');
      return;
    }

    if (/^[0-9]$/.test(k)) {
      numSeq = (numSeq + k).slice(-5);
      if (numSeq.endsWith('40806')) {
        numSeq = '';
        unlock('port');
        confettiInk();
        showFloat('<b>40806 已应答。</b><br>这扇门是你敲开的——端口不关机，长卷不下线。');
      } else if (numSeq.endsWith('40805')) {
        numSeq = '';
        showFloat('隔壁 Gemini 探出头：「咦，40805 也有客人？」<br><a href="https://github.com/VincentZyu233/GeminiImpressionOfVincentZyu" target="_blank" rel="noreferrer">→ 去隔壁串个门</a>');
      }
    }
  };

  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}

/** 卷首「你好」连点彩蛋（由 Hero 组件挂 ref 调用） */
let heroClicks = 0;
let heroTimer: number | null = null;

export function onHeroTap() {
  heroClicks++;
  audioSynth.tick();
  if (heroTimer) clearTimeout(heroTimer);
  heroTimer = window.setTimeout(() => (heroClicks = 0), 2600);
  if (heroClicks >= 5) {
    heroClicks = 0;
    unlock('nggyu');
    noteRain();
    playNggyu();
    showFloat('<b>你已被 rickroll。</b><br><small>正如你 README 里那张 width=666 的动图——门面必须让给玩笑。</small>', 5200);
  }
}

/** 印章长按彩蛋（由 Colophon 挂 pointer 事件调用） */
export function bindSealLongPress(seal: HTMLElement) {
  let timer: number | null = null;
  const down = () => {
    timer = window.setTimeout(() => {
      timer = null;
      unlock('sealback');
      seal.classList.add('egg-flip');
      audioSynth.pluck(880, 0, 0.8);
      audioSynth.pluck(1174.66, 0.2, 0.7);
      window.setTimeout(() => seal.classList.remove('egg-flip'), 4200);
    }, 3000);
  };
  const up = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  seal.addEventListener('pointerdown', down);
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => seal.addEventListener(ev, up));
  return () => {
    seal.removeEventListener('pointerdown', down);
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => seal.removeEventListener(ev, up));
  };
}
