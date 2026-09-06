import { useMemo, useState } from 'react';
import SectionHead from '../SectionHead';
import Reveal from '../Reveal';
import { TIMELINE, YEAR_NOTES, TIMELINE_TOTAL, TIMELINE_SNAPSHOT, type TimelineEntry } from '../../data/timelineData';
import { REPO_GROUPS } from '../../data/reposData';

/** 短评解析：先取 timelineData 自带 caption，再从藏库短评回退（含改名前缀兼容） */
const SHORT_MAP = new Map<string, string>();
for (const g of REPO_GROUPS) for (const r of g.repos) SHORT_MAP.set(r.name, r.short);

function captionOf(e: TimelineEntry): string {
  if (e.caption) return e.caption;
  return (
    SHORT_MAP.get(e.name) ??
    SHORT_MAP.get('koishi-plugin-' + e.name) ??
    '工作台上的又一卷'
  );
}

/** 其四 · 岁时：83 仓按出生时间排成的编年长卷 */
export default function Timeline() {
  const [showAll, setShowAll] = useState(false);

  const years = useMemo(() => {
    const map = new Map<number, TimelineEntry[]>();
    for (const e of TIMELINE) {
      const y = Number(e.date.slice(0, 4));
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(e);
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, []);

  // 默认只展开里程碑 + 每年首末几卷；展开看全部 83 行
  const visible = useMemo(() => {
    if (showAll) return new Set(TIMELINE.map((_, i) => i));
    const s = new Set<number>();
    TIMELINE.forEach((e, i) => {
      if (e.milestone) s.add(i);
    });
    years.forEach(([, list]) => {
      const idxs = list.map((e) => TIMELINE.indexOf(e));
      idxs.slice(0, 2).forEach((i) => s.add(i));
      idxs.slice(-1).forEach((i) => s.add(i));
    });
    return s;
  }, [showAll, years]);

  return (
    <section id="timeline" className="sec">
      <SectionHead title="其四 · 岁时" subtitle="The Chronicle, Kept" />

      <Reveal>
        <p className="lead-line">
          {TIMELINE_TOTAL} 个仓库的出生证明，按时间铺开——一条从 2023 年秋天延伸到今天的墨线。
        </p>
      </Reveal>

      <Reveal className="repos-meta" delay={80}>
        <span className="meta-chip">📷 快照 {TIMELINE_SNAPSHOT}</span>
        <span className="meta-chip">朱砂行 = 里程碑</span>
      </Reveal>

      <div className="timeline">
        {years.map(([year, list]) => (
          <div key={year} className="tl-year">
            <Reveal>
              <h3 className="tl-year-head">
                <span className="tl-year-num">{year}</span>
                <span className="tl-year-count">{list.length} 卷</span>
              </h3>
              {YEAR_NOTES[year] && <p className="tl-year-note">{YEAR_NOTES[year]}</p>}
            </Reveal>
            <div className="tl-list">
              {list.map((e) => {
                const i = TIMELINE.indexOf(e);
                const visibleRow = visible.has(i);
                return (
                  <Reveal key={e.name + e.date} delay={Math.min((i % 6) * 40, 160)}>
                    <div
                      className={`tl-row ${e.milestone ? 'tl-ms' : ''} ${visibleRow ? '' : 'tl-dim'}`}
                    >
                      <span className="tl-date">{e.date}</span>
                      <div className="tl-body">
                        <a
                          className="tl-name"
                          href={`https://github.com/VincentZyuApps/${e.name}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {e.name}
                        </a>
                        {e.milestone && <span className="tl-ms-badge">{e.milestone}</span>}
                        <p className="tl-caption">{captionOf(e)}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Reveal>
        <button className="repo-toggle tl-toggle" onClick={() => setShowAll((v) => !v)}>
          {showAll ? '收起非里程碑 ▴' : `展开全部 ${TIMELINE_TOTAL} 行 ▾`}
        </button>
      </Reveal>
    </section>
  );
}
