import SectionHead from '../SectionHead';
import Reveal from '../Reveal';

/**
 * 其六 · 阅其藏：900 颗 star 的收藏画像
 * 数据快照 2026-09-07，分类精选硬编码
 */

interface PickItem {
  name: string;
  url: string;
  note: string;
  stars?: string;
}

interface StarGroup {
  title: string;
  count: string;
  note: string;
  picks: PickItem[];
}

const STAR_GROUPS: StarGroup[] = [
  {
    title: '友人的灯',
    count: '87 颗给了 ra1nyxin',
    note: '友链里那位「雨欣妍」。他 star 你最多，你也 star 他最多——你们互相点亮的方式，就是把对方每个仓库都看一遍。',
    picks: [
      {
        name: 'ra1nyxin/winload',
        url: 'https://github.com/ra1nyxin/winload',
        note: '分量最重的一颗：他把你的 winload fork 了一份。你写的工具，朋友真的在用——这是开源世界里最踏实的友谊。',
      },
      {
        name: 'three-mmd-viewer-live',
        url: 'https://github.com/ra1nyxin/three-mmd-viewer-live',
        note: '局域网 MMD 查看器，PMX 模型 + IK 姿势编辑——你还顺手 fork 了一份自己改。',
      },
      {
        name: 'ZombiePursuitH-fabric-1.21.11',
        url: 'https://github.com/ra1nyxin/ZombiePursuitH-fabric-1.21.11',
        note: '僵尸潮 Fabric mod。朋友的 mod，一个不落全看过。',
      },
      {
        name: 'WinTempViewASM',
        url: 'https://github.com/ra1nyxin/WinTempViewASM',
        note: 'x64 汇编写的 Windows 缓存清理原型——你朋友也是个狠人。',
      },
    ],
  },
  {
    title: 'AI 时代的船票',
    count: 'agent 全员到齐',
    note: '2026 年最热的 AI 仓库，你几乎一个不落全收藏了——你自己就是重度 agent 协作者，收藏名单就是你的兵器谱。',
    picks: [
      {
        name: 'openclaw/openclaw',
        url: 'https://github.com/openclaw/openclaw',
        stars: '⭐389k',
        note: '「真正的 AI，任何系统任何平台」——2026 年的现象级 agent。',
      },
      {
        name: 'anthropics/claude-code',
        url: 'https://github.com/anthropics/claude-code',
        stars: '⭐144k',
        note: '住在终端里的编码 agent——你的工作方式本来就是这样的。',
      },
      {
        name: 'anomalyco/opencode',
        url: 'https://github.com/anomalyco/opencode',
        stars: '⭐205k',
        note: '开源编码 agent——你甚至在 Termux 里写过它的部署笔记。',
      },
      {
        name: 'f/prompts.chat',
        url: 'https://github.com/f/prompts.chat',
        stars: '⭐169k',
        note: 'ChatGPT 提示词大全——从最早就收藏的老牌项目。',
      },
    ],
  },
  {
    title: '桌面与终端情报',
    count: '实用主义书架',
    note: '从 Linux 内核到 Windows 激活脚本——你的收藏横跨所有操作系统，且毫不掩饰对「能用的东西」的热爱。',
    picks: [
      {
        name: 'torvalds/linux',
        url: 'https://github.com/torvalds/linux',
        stars: '⭐247k',
        note: '内核源码树。WSL、Arch、Debian 的笔记背后，是这个仓库垫的底。',
      },
      {
        name: 'Genymobile/scrcpy',
        url: 'https://github.com/Genymobile/scrcpy',
        stars: '⭐149k',
        note: '安卓投屏神器——多设备党工具箱里的常驻嘉宾。',
      },
      {
        name: 'massgravel/Microsoft-Activation-Scripts',
        url: 'https://github.com/massgravel/Microsoft-Activation-Scripts',
        stars: '⭐190k',
        note: '这个就不点评了， respects——实用主义的尽头。',
      },
      {
        name: 'ruffle-rs/ruffle',
        url: 'https://github.com/ruffle-rs/ruffle',
        stars: '⭐19k',
        note: 'Rust 写的 Flash 模拟器——给你最爱的 Rust 又添一颗收藏。',
      },
    ],
  },
  {
    title: '生态同好圈',
    count: 'koishi ×15 · MC 全家桶',
    note: 'Koishi 本家、Lagrange、MCDReforged、LeviLamina——你插件的上下游全在收藏夹里。把自己的生态位摸得清清楚楚。',
    picks: [
      {
        name: 'koishijs/koishi',
        url: 'https://github.com/koishijs/koishi',
        note: '你的 29 个插件的共同地基。15 颗收藏给本家，忠实程度可见一斑。',
      },
      {
        name: 'LagrangeDev/*',
        url: 'https://github.com/LagrangeDev',
        note: 'QQ 协议实现，6 颗收藏——onebot-info-image 的底层依赖。',
      },
      {
        name: 'MCDReforged/* · LiteLDev/*',
        url: 'https://github.com/MCDReforged',
        note: 'MC 服务器框架双雄——你的群服互通桥就架在它们肩上。',
      },
    ],
  },
  {
    title: '自家巡灯',
    count: '134 颗给了自己',
    note: '你 star 了自己 134 个仓库——不是自恋，是工作台主人的日常巡视：顺手把工具夹好，下次伸手就摸到。',
    picks: [
      {
        name: 'VincentZyuApps/lua-love2d-snake',
        url: 'https://github.com/VincentZyuApps/lua-love2d-snake',
        note: '最新出生的一卷（2026-09-04），Love2D 贪吃蛇 + 八种 AI 算法——出生即收藏。',
      },
      {
        name: 'VincentZyu233/three-mmd-viewer-live-vincentzyu-fork',
        url: 'https://github.com/VincentZyu233/three-mmd-viewer-live-vincentzyu-fork',
        note: '朋友做的 MMD 查看器，你 fork 改的版本——友谊的另一种形态。',
      },
    ],
  },
];

export default function Stargazer() {
  return (
    <section id="stars" className="sec">
      <SectionHead title="其六 · 阅其藏" subtitle="The Stars, Gathered" />

      <Reveal>
        <p className="lead-line">
          一个人收藏什么，比他发布什么更诚实。900 颗 star——这是你光顾过的别人的花园。
        </p>
      </Reveal>

      <Reveal className="stats" delay={60}>
        <div className="stat">
          <p className="stat-value">900</p>
          <p className="stat-label">收藏总数</p>
          <p className="stat-note">快照 2026-09-07</p>
        </div>
        <div className="stat">
          <p className="stat-value">87</p>
          <p className="stat-label">给了 ra1nyxin</p>
          <p className="stat-note">最多的收藏，给了最多的朋友</p>
        </div>
        <div className="stat">
          <p className="stat-value">134</p>
          <p className="stat-label">给了自己</p>
          <p className="stat-note">工作台主人的日常巡视</p>
        </div>
        <div className="stat">
          <p className="stat-value">15</p>
          <p className="stat-label">给了 Koishi 本家</p>
          <p className="stat-note">生态位的忠诚度</p>
        </div>
      </Reveal>

      <div className="star-groups">
        {STAR_GROUPS.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 60}>
            <div className="star-group">
              <div className="repo-group-head">
                <h3 className="repo-group-title">{g.title}</h3>
                <span className="repo-group-count">{g.count}</span>
              </div>
              <p className="repo-group-note">{g.note}</p>
              <div className="star-picks">
                {g.picks.map((p) => (
                  <a key={p.name} className="star-pick" href={p.url} target="_blank" rel="noreferrer">
                    <p className="sp-name">
                      {p.name}
                      {p.stars && <span className="proj-stars">{p.stars}</span>}
                    </p>
                    <p className="sp-note">{p.note}</p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
