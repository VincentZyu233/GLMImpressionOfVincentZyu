import { useEffect, useRef } from 'react';

/** 笔锋分隔线：进入视口后逐笔划出 */
export default function BrushDivider() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <svg ref={ref} className="brush" viewBox="0 0 600 26" preserveAspectRatio="none" aria-hidden="true">
      <path className="p1" d="M8,14 C140,7 300,21 592,12" />
      <path className="p2" d="M8,15 C150,9 310,22 592,13" />
      <path className="p3" d="M14,16 C160,11 320,23 586,14" />
      <circle className="dot" cx="8" cy="14" r="3.2" />
    </svg>
  );
}
