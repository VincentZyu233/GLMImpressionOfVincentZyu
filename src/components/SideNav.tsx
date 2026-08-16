import { audioSynth } from '../utils/audioSynth';

export interface SectionDef {
  id: string;
  label: string;
}

/** 右侧卷首目录：竖排小楷标签 + 墨点，当前章节朱砂高亮 */
export default function SideNav({
  sections,
  activeId,
  onJump,
}: {
  sections: SectionDef[];
  activeId: string;
  onJump: (id: string) => void;
}) {
  return (
    <nav className="side-nav" aria-label="卷首目录">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`nav-item ${s.id === activeId ? 'active' : ''}`}
          onClick={() => onJump(s.id)}
          onMouseEnter={() => audioSynth.tick()}
          aria-label={s.label}
        >
          <span className="dot" />
          <span className="lbl">{s.label}</span>
        </button>
      ))}
    </nav>
  );
}
