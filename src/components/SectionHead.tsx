import BrushDivider from './BrushDivider';

/** 各章节统一抬头：左侧竖排标题 + 英文小注 + 笔锋分隔线 */
export default function SectionHead({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="sec-head">
      <h2 className="sec-title-v">{title}</h2>
      <div className="sec-meta">
        <p className="sec-subtitle">{subtitle}</p>
        <BrushDivider />
      </div>
    </header>
  );
}
