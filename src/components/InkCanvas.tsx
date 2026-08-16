import { useEffect, useRef } from 'react';

interface Drop {
  x: number;
  y: number;
  r: number;
  vr: number;
  a: number;
  va: number;
  blobs: { dx: number; dy: number; rr: number }[];
}

interface Mote {
  x: number;
  y: number;
  r: number;
  a: number;
  vx: number;
  vy: number;
  ph: number;
}

/**
 * 水墨背景画布：
 * - 缓慢漂浮的墨絮（径向渐隐的软墨团）
 * - 鼠标划过留下的墨痕
 * - 点击 / 章节 ink-pulse 事件触发的溅墨
 */
export default function InkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 墨絮：归一化坐标，缓慢漂移
    const motes: Mote[] = Array.from({ length: 22 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 5 + Math.random() * 22,
      a: 0.018 + Math.random() * 0.045,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.04,
      ph: Math.random() * Math.PI * 2,
    }));

    const drops: Drop[] = [];
    const rings: { x: number; y: number; r: number; a: number }[] = [];

    const spawnDrop = (x: number, y: number, scale = 1) => {
      const r = (7 + Math.random() * 13) * scale;
      drops.push({
        x,
        y,
        r,
        vr: 0.22 + Math.random() * 0.3,
        a: Math.min(0.3, 0.13 * scale + 0.05),
        va: 0.0016 + Math.random() * 0.0012,
        blobs: Array.from({ length: 3 }, () => ({
          dx: (Math.random() - 0.5) * r * 1.5,
          dy: (Math.random() - 0.5) * r * 1.5,
          rr: 0.28 + Math.random() * 0.5,
        })),
      });
      if (drops.length > 90) drops.splice(0, drops.length - 90);
    };

    const spawnSplash = (x: number, y: number) => {
      rings.push({ x, y, r: 6, a: 0.26 });
      for (let i = 0; i < 8; i++) {
        const ang = Math.random() * Math.PI * 2;
        const d = 16 + Math.random() * 44;
        spawnDrop(x + Math.cos(ang) * d, y + Math.sin(ang) * d, 0.45 + Math.random() * 0.5);
      }
      spawnDrop(x, y, 2.1);
    };

    let lastMove = 0;
    const onMove = (e: PointerEvent) => {
      if (reduced) return;
      const now = performance.now();
      if (now - lastMove < 90) return;
      lastMove = now;
      spawnDrop(e.clientX, e.clientY, 0.5 + Math.random() * 0.4);
    };
    let lastSplash = 0;
    const onDown = (e: PointerEvent) => {
      if (reduced) return;
      if (performance.now() - lastSplash < 260) return;
      lastSplash = performance.now();
      spawnSplash(e.clientX, e.clientY);
    };
    const onPulse = (e: Event) => {
      if (reduced) return;
      const d = (e as CustomEvent).detail as { x?: number; y?: number } | undefined;
      spawnSplash(d?.x ?? W / 2, d?.y ?? H * 0.4);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('ink-pulse', onPulse as EventListener);

    const drawMotes = () => {
      for (const m of motes) {
        const px = m.x * W;
        const py = m.y * H + Math.sin(m.ph) * 6;
        const g = ctx.createRadialGradient(px, py, 0, px, py, m.r * 3.2);
        g.addColorStop(0, `rgba(38,34,28,${m.a})`);
        g.addColorStop(1, 'rgba(38,34,28,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, m.r * 3.2, 0, 7);
        ctx.fill();
      }
    };

    let raf = 0;
    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      for (const m of motes) {
        m.ph += 0.004;
        m.x += m.vx / 900;
        m.y += m.vy / 900;
        if (m.x < -0.06) m.x = 1.06;
        if (m.x > 1.06) m.x = -0.06;
        if (m.y < -0.06) m.y = 1.06;
        if (m.y > 1.06) m.y = -0.06;
      }
      drawMotes();

      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i];
        r.r += 2.3;
        r.a *= 0.955;
        if (r.a < 0.004) {
          rings.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(38,34,28,${r.a})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, 7);
        ctx.stroke();
      }

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.r += d.vr;
        d.a -= d.va;
        if (d.a <= 0) {
          drops.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(38,34,28,${d.a})`;
        ctx.beginPath();
        ctx.ellipse(d.x, d.y, d.r, d.r * 0.82, 0, 0, 7);
        ctx.fill();
        for (const b of d.blobs) {
          ctx.beginPath();
          ctx.arc(d.x + b.dx, d.y + b.dy, d.r * b.rr * 0.6, 0, 7);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(frame);
    };

    if (reduced) {
      drawMotes();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('ink-pulse', onPulse as EventListener);
    };
  }, []);

  return <canvas ref={ref} className="ink-canvas" aria-hidden="true" />;
}
