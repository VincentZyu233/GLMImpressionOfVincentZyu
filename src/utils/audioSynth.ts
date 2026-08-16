// 极简 WebAudio 合成器：古琴式拨弦、章节风铃、盖章闷响
// 声音极轻，AudioContext 在首次交互后才初始化

class AudioSynth {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  enabled = true;

  private ensure(): AudioContext | null {
    if (!this.enabled) return null;
    if (!this.ctx) {
      try {
        this.ctx = new AudioContext();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.14;
        this.master.connect(this.ctx.destination);
      } catch {
        return null;
      }
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }

  /** 单音拨弦：基频 + 泛音，指数衰减 */
  pluck(freq: number, when = 0, gain = 1) {
    const ctx = this.ensure();
    if (!ctx || !this.master) return;
    const t0 = ctx.currentTime + when;
    const partials = [1, 2, 3.01, 4.2];
    const amps = [1, 0.35, 0.18, 0.08];
    partials.forEach((p, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq * p;
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(amps[i] * gain * 0.22, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.6 + i * 0.2);
      osc.connect(g).connect(this.master!);
      osc.start(t0);
      osc.stop(t0 + 2.2);
    });
  }

  /** 章节切换：五声音阶（D 宫调）随机一小声 */
  chime() {
    const scale = [293.66, 329.63, 369.99, 392.0, 440.0, 587.33];
    const f = scale[Math.floor(Math.random() * scale.length)];
    this.pluck(f, 0, 0.7);
    this.pluck(f * 1.5, 0.06, 0.25);
  }

  /** 悬停轻点 */
  tick() {
    const ctx = this.ensure();
    if (!ctx || !this.master) return;
    const t0 = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, t0);
    osc.frequency.exponentialRampToValueAtTime(660, t0 + 0.05);
    g.gain.setValueAtTime(0.05, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.09);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + 0.1);
  }

  /** 盖章：低频闷响 + 墨溅噪声 */
  stamp() {
    const ctx = this.ensure();
    if (!ctx || !this.master) return;
    const t0 = ctx.currentTime;

    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t0);
    osc.frequency.exponentialRampToValueAtTime(52, t0 + 0.16);
    g.gain.setValueAtTime(0.9, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.32);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + 0.35);

    const len = Math.floor(ctx.sampleRate * 0.18);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.2) * 0.5;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const ng = ctx.createGain();
    ng.gain.value = 0.35;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    src.connect(filter).connect(ng).connect(this.master);
    src.start(t0);
  }
}

export const audioSynth = new AudioSynth();
