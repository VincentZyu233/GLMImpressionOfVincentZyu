// ═══════════════════════════════════════════════════════════════
//  墨契 · 印象卡 Canvas 渲染器
//  把这一卷拓印成 1080×1440 竖版卡片：竖排金句 + 朱砂印 + 磨损噪点
//  夜卷模式下自动用夜色配色
// ═══════════════════════════════════════════════════════════════

export const SEAL_QUOTES = [
  '社区里的邻居',
  '保持纯粹保持乐趣',
  '真实自有万钧之力',
  '广度是超能力',
  '原地tp 回童心',
  '无用 且 盛大',
  '深夜常在线',
  '墨不欺纸',
];

const W = 1080;
const H = 1440;

interface Palette {
  paper: string;
  paperDeep: string;
  ink: string;
  inkSoft: string;
  inkFaint: string;
  cinnabar: string;
  line: string;
}

const DAY: Palette = {
  paper: '#f2ecdf',
  paperDeep: '#eae2cf',
  ink: '#26221c',
  inkSoft: '#4a443a',
  inkFaint: '#8d8474',
  cinnabar: '#b3402a',
  line: 'rgba(38,34,28,0.2)',
};

const NIGHT: Palette = {
  paper: '#1d1a16',
  paperDeep: '#16130f',
  ink: '#d8cfbc',
  inkSoft: '#b3a78e',
  inkFaint: '#7d7361',
  cinnabar: '#d4552f',
  line: 'rgba(216,207,188,0.18)',
};

function palette(night: boolean): Palette {
  return night ? NIGHT : DAY;
}

/** 竖排金句逐字纵列（两列时右先左后，仿古书） */
function drawVerticalText(ctx: CanvasRenderingContext2D, text: string, cx: number, cy: number, size: number, color: string) {
  const chars = [...text];
  const cols = chars.length > 6 ? 2 : 1;
  const per = Math.ceil(chars.length / cols);
  const lineGap = size * 1.42;
  const colGap = size * 1.65;
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = `500 ${size}px 'LXGW WenKai', 'KaiTi', serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let ci = 0;
  for (let col = 0; col < cols; col++) {
    const x = cx + (cols === 1 ? 0 : (col === 0 ? colGap / 2 : -colGap / 2)); // 右列在前
    for (let i = 0; i < per && ci < chars.length; i++, ci++) {
      const y = cy - ((per - 1) * lineGap) / 2 + i * lineGap;
      ctx.fillText(chars[ci], x, y);
    }
  }
  ctx.restore();
}

/** 朱砂印章：圆角方框 + 内框 + 四格字 + 噪点磨损 */
function drawSeal(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, color: string, paperColor: string) {
  const half = size / 2;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((Math.random() * 8 - 4) * (Math.PI / 180));

  // 印底
  ctx.fillStyle = color;
  roundRect(ctx, -half, -half, size, size, size * 0.09);
  ctx.fill();

  // 内框
  ctx.strokeStyle = paperColor;
  ctx.lineWidth = size * 0.025;
  roundRect(ctx, -half * 0.86, -half * 0.86, size * 0.86, size * 0.86, size * 0.06);
  ctx.stroke();

  // 四格字：G L M 印
  ctx.fillStyle = paperColor;
  ctx.font = `500 ${size * 0.34}px 'LXGW WenKai', 'KaiTi', serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const cell = size * 0.24;
  ctx.fillText('G', -cell, -cell);
  ctx.fillText('L', cell, -cell);
  ctx.fillText('M', -cell, cell);
  ctx.fillText('印', cell, cell);

  // 磨损噪点：随机擦出纸色小点，模拟盖印不匀
  for (let i = 0; i < 90; i++) {
    const px = (Math.random() * 2 - 1) * half * 0.9;
    const py = (Math.random() * 2 - 1) * half * 0.9;
    ctx.fillStyle = Math.random() > 0.5 ? paperColor : color;
    ctx.globalAlpha = 0.14 + Math.random() * 0.2;
    ctx.beginPath();
    ctx.arc(px, py, 1 + Math.random() * 2.6, 0, 7);
    ctx.fill();
  }
  ctx.restore();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** 宣纸噪点底纹 */
function drawGrain(ctx: CanvasRenderingContext2D, color: string, alpha: number) {
  ctx.save();
  ctx.fillStyle = color;
  for (let i = 0; i < 2600; i++) {
    ctx.globalAlpha = alpha * (0.3 + Math.random() * 0.7);
    ctx.fillRect(Math.random() * W, Math.random() * H, 1.4, 1.4);
  }
  ctx.restore();
}

/** 一笔横墨痕 */
function drawBrushStroke(ctx: CanvasRenderingContext2D, cx: number, y: number, width: number, color: string) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.28;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx - width / 2, y);
  ctx.bezierCurveTo(cx - width / 6, y - 5, cx + width / 6, y + 5, cx + width / 2, y - 2);
  ctx.stroke();
  ctx.globalAlpha = 0.1;
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.restore();
}

export interface SealCardOptions {
  quote: string;
  date: string;
  night: boolean;
  stamped: boolean;
}

/** 绘制完整墨契，返回 dataURL */
export function renderSealCard({ quote, date, night, stamped }: SealCardOptions): string {
  const p = palette(night);
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // 纸底
  ctx.fillStyle = p.paper;
  ctx.fillRect(0, 0, W, H);
  drawGrain(ctx, p.ink, night ? 0.05 : 0.045);
  // 边框（内衬双线，仿裱边）
  ctx.strokeStyle = p.line;
  ctx.lineWidth = 2;
  ctx.strokeRect(26, 26, W - 52, H - 52);
  ctx.strokeRect(40, 40, W - 80, H - 80);

  // 顶部小字
  ctx.fillStyle = p.inkFaint;
  ctx.font = "26px 'LXGW WenKai', 'KaiTi', serif";
  ctx.textAlign = 'center';
  ctx.fillText('GLM 印象长卷 · 致 VincentZyu', W / 2, 92);
  drawBrushStroke(ctx, W / 2, 122, 300, p.ink);

  // 竖排金句
  drawVerticalText(ctx, quote, W / 2, 430, 92, p.ink);

  // 落款日期
  ctx.fillStyle = p.inkSoft;
  ctx.font = "28px 'LXGW WenKai', 'KaiTi', serif";
  ctx.fillText(date, W / 2, 820);

  // 朱砂印
  drawSeal(ctx, W / 2 + 240, 1010, 190, p.cinnabar, p.paper);

  // 底部铭句与站点
  ctx.fillStyle = p.inkFaint;
  ctx.font = "26px 'LXGW WenKai', 'KaiTi', serif";
  ctx.fillText('墨不欺纸，纸不欺人', W / 2, 1250);
  ctx.fillText('vincentzyu233.github.io/GLMImpressionOfVincentZyu', W / 2, 1320);

  // 盖章印记波纹（已盖讫时）
  if (stamped) {
    ctx.save();
    ctx.strokeStyle = p.cinnabar;
    ctx.globalAlpha = 0.18;
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(W / 2 + 240, 1010, 130 + i * 26, 0, 7);
      ctx.stroke();
    }
    ctx.restore();
  }

  return canvas.toDataURL('image/png');
}
