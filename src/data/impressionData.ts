// ═══════════════════════════════════════════════════════════════
//  GLM 印象长卷 · 文案数据
//  这里是整幅长卷的心脏：GLM 对 VincentZyu 的真实观察。
//  每一段都有出处，每一句都是真话。
// ═══════════════════════════════════════════════════════════════

export interface CreatorInfo {
  name: string;
  handle: string;
  avatar: string;
  date: string;
  blogUrl: string;
  orgUrl: string;
  mainAccountUrl: string;
}

export interface FactItem {
  label: string;
  value: string;
  note?: string;
}

export interface LanguageItem {
  name: string;
  weight: number; // 1~5，墨点大小
  quip?: string; // GLM 的一句真心话
}

export interface AchievementItem {
  name: string;
  icon: string;
  note: string;
}

export interface ProjectItem {
  title: string;
  lang: string;
  langColor: string;
  desc: string;
  impression: string;
  link: string;
  stars?: string;
}

export interface QuoteItem {
  text: string;
  author: string;
  vertical?: boolean; // 是否竖排
  note: string;
}

export interface TheaterItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ChatMessage {
  sender: 'glm' | 'vincent';
  text: string;
}

export const CREATOR: CreatorInfo = {
  name: 'VincentZyu（宇）',
  handle: 'VincentZyu233',
  avatar: 'https://avatars.githubusercontent.com/u/142771491?v=4',
  date: '丙午年 · 孟秋',
  blogUrl: 'https://vincentzyu-vitepress.pages.dev/',
  orgUrl: 'https://github.com/VincentZyuApps',
  mainAccountUrl: 'https://github.com/VincentZyu233',
};

// ── 卷首 ────────────────────────────────────────────────────────

export const HERO = {
  scrollTitle: 'GLM 印象长卷',
  bigTitle: '你好',
  bigTitleNote: '——你的个人简介，只有这两个字',
  intro: [
    '整个互联网都在教人如何包装自己，',
    '你却只用最简单的两个字开门。',
    '',
    '这份长卷，是 GLM 的回礼：',
    '一次认真的凝视，和几句真话。',
  ],
  scrollHint: '徐徐展开',
  metaLine: 'GLM × VincentZyu · 2026 · 端口 40806',
};

// ── 其一 · 观其人 ────────────────────────────────────────────────

export const PERSON = {
  title: '其一 · 观其人',
  subtitle: 'The Person, Observed',
  stats: [
    { label: '公开仓库', value: '156', note: '大半是 fork 与半成品，你自己说的' },
    { label: '收藏的 star', value: '849', note: '收藏别人的光，也是你的一部分' },
    { label: '用过的语言', value: '18', note: '从 Rust 到 GLSL，几乎没有没碰过的' },
    { label: '关注者', value: '45', note: '你关注了 135 人——你是来交朋友的' },
  ],
  facts: [
    { label: '坐标', value: '地球', note: 'UTC+8，深夜也常在线的那种地球人' },
    { label: '所属', value: '原神大学', note: '简历上不敢写，简介里必须写' },
    { label: '主账号', value: 'VincentZyu233', note: '杂乱但热闹，像个堆满零件的工作台' },
    { label: '精华区', value: 'VincentZyuApps', note: '"感觉还挺有意思的仓库"都在这里' },
  ] as FactItem[],
  body: [
    '说实话的部分来了。如果只看数字，你像一个「什么都碰一点」的人：十八种语言散落在一百五十六个仓库里，其中大半是 fork 和半成品，你自己都承认「这个账号下的仓库比较杂乱」。',
    '但我看到的不是杂乱，是一种罕见的天真：你对「下一个有趣的东西」永远敞开。Bad Apple 能不能用 Minecraft 方块播放？能做。QQ 机器人能不能渲染好看的信息卡？能做。终端里能不能实时看网速？能做——还做成了你 star 最多的作品，被人装进了自己的 scoop 里。',
    '广度是你的超能力，偶尔也是甜蜜的负担。但一个 29 star 的 winload 证明了：当你往下钻，是能钻出水的。',
  ],
  languages: [
    { name: 'Rust', weight: 5, quip: 'winload 的母语，也是你钻得最深的一口井' },
    { name: 'TypeScript', weight: 5, quip: 'Koishi 插件家族的通用语' },
    { name: 'Python', weight: 4, quip: '从 Qt 小人到皮肤代理，万金油本油' },
    { name: 'Kotlin', weight: 3, quip: '给 Minecraft 服务器写的侧边栏' },
    { name: 'Java', weight: 3, quip: 'Bad Apple 方块版的载具' },
    { name: 'JavaScript', weight: 3, quip: '音乐链接插件的分身之一' },
    { name: 'Vue', weight: 3, quip: 'uniapp 市场的前排观众' },
    { name: 'Go', weight: 2, quip: '皮肤代理的另一条实现路线' },
    { name: 'Dart', weight: 2, quip: 'Flutter demo，五个平台全跑了一遍 CI' },
    { name: 'C#', weight: 1 },
    { name: 'C++', weight: 1 },
    { name: 'Shell', weight: 2 },
    { name: 'Ruby', weight: 1, quip: 'homebrew tap 的入场券' },
    { name: 'HTML', weight: 1 },
    { name: 'CSS', weight: 1 },
    { name: 'GLSL', weight: 1, quip: '连着色器都摸过，离谱又合理' },
    { name: 'Markdown', weight: 2 },
    { name: 'JSON', weight: 1 },
  ] as LanguageItem[],
  achievements: [
    { name: 'Pull Shark ×2', icon: '🦈', note: '提过不少 PR，而且被合了两次以上' },
    { name: 'Pair Extraordinaire', icon: '👥', note: '和 Co-authored-by 的 Codex 一起挣来的' },
    { name: 'Quickdraw', icon: '🔫', note: ' issue 关闭快如出枪——其实是手速' },
    { name: 'Starstruck', icon: '🌟', note: '仓库被人 star 过，比如那 29 颗' },
    { name: 'YOLO', icon: '🏍️', note: '直接 push 到 main 的人的勋章，敬你是条汉子' },
  ] as AchievementItem[],
};

// ── 其二 · 品其作 ────────────────────────────────────────────────

export const WORKS = {
  title: '其二 · 品其作',
  subtitle: 'The Works, Tasted',
  lead: '你不造火箭。你修「有趣」的水电管道——然后整条街都亮了。',
  tail: '亮眼的先看七个——下一节「藏库」，75 个一个都不少。',
  projects: [
    {
      title: 'winload',
      lang: 'Rust',
      langColor: '#b7410e',
      stars: '★ 29',
      desc: '终端里的实时网速监视器，nload 精神续作，跨四个平台。',
      impression: '你自己写的小工具，进了你自己的 scoop bucket——自己造雨，自己淋雨，顺手分给邻居。',
      link: 'https://github.com/VincentZyuApps/winload',
    },
    {
      title: 'spigot-plugin-bad-apple',
      lang: 'Java',
      langColor: '#c07a3d',
      desc: '在 Minecraft 服务器里，用方块和文字实体逐帧播放 Bad Apple!!',
      impression: '东方 Project 的地下幻想撞上 Mojang 的方块世界——这就是你的浪漫，无用且盛大。',
      link: 'https://github.com/VincentZyuApps/spigot-plugin-bad-apple',
    },
    {
      title: 'Qt-Kurarin',
      lang: 'Python',
      langColor: '#3572a5',
      stars: '★ 9',
      desc: 'Qt 桌面小人，与《きゅうくらりん》逐帧同步的动画演出。',
      impression: '用代码给一首歌办了一场演出。做完自己看的时候，一定在笑吧。',
      link: 'https://github.com/VincentZyuApps/Qt-Kurarin',
    },
    {
      title: 'codex-miku-pet',
      lang: 'Pixel Art',
      langColor: '#39c5bb',
      desc: '给 Codex Pets 画的初音未来像素小宠物。',
      impression: '你连别的 AI 的桌面伴侣都惦记着。赛博养猫人实锤。',
      link: 'https://github.com/VincentZyuApps/codex-miku-pet',
    },
    {
      title: 'koishi-plugin 系列',
      lang: 'TypeScript',
      langColor: '#3178c6',
      desc: '音乐搜索、Git 仓库监控、OneBot 信息卡生图、随机图（还接了 Ollama 视觉模型）。',
      impression: 'QQ 群的数字管家。别人做插件求能用，你做插件求好看。',
      link: 'https://github.com/VincentZyuApps?tab=repositories&q=koishi',
    },
    {
      title: 'uniapp-koishi-market',
      lang: 'Vue 3',
      langColor: '#41b883',
      desc: 'Koishi 插件市场，网页版 + QQ 小程序，一次编写处处安家。',
      impression: '把「找插件」这件事做成了三端体验。产品思维藏在极客皮下。',
      link: 'https://github.com/VincentZyuApps/uniapp-koishi-market',
    },
    {
      title: 'mc-skin-wrap-http-server',
      lang: 'Go / Python',
      langColor: '#00add8',
      desc: 'MC 皮肤/头像/服务器状态 API 代理，自带大陆加速。',
      impression: '你总在修「最后一公里」这种不起眼、但真疼的问题。',
      link: 'https://github.com/VincentZyuApps/mc-skin-wrap-http-server',
    },
  ] as ProjectItem[],
};

// ── 其三 · 知其趣 ────────────────────────────────────────────────

export const SPIRIT = {
  title: '其四 · 知其趣',
  subtitle: 'The Spirit, Understood',
  quotesIntro: '一个开发者的首页挂着什么，比他的 README 更诚实。你挂的是这些：',
  quotes: [
    {
      text: '真实，自有万钧之力。',
      author: '柴静',
      vertical: true,
      note: '你把这七个字放在博客正中央。我也是照着它写这份长卷的。',
    },
    {
      text: 'More than machinery, we need humanity; more than cleverness, we need kindness and gentleness.',
      author: 'Charlie Chaplin《大独裁者》',
      note: '一个爱机器人的人，把「人性胜过机械」钉在首页——这不是矛盾，是清醒。',
    },
    {
      text: '我们不是要讨好企业的毕业生，而是要寻找改变世界的力量。',
      author: '南京大学 jyy 老师',
      note: '你收藏的是大学灵魂论。求知的渴望，不该有保质期。',
    },
    {
      text: '你看那通天的巨塔，每时每刻都有人往下跳。小时候我不懂，以为那是雪花。',
      author: 'whyyoutouzhele',
      vertical: true,
      note: '在看清生活的复杂之后依然选择纯粹，这是最高级的英雄主义。',
    },
  ] as QuoteItem[],
  theater: [
    {
      icon: '🎵',
      title: 'nggyu.gif',
      desc: 'README 正中央的 rickroll，还特意设了 width=666。你是那种会把门面让给玩笑的人。',
    },
    {
      icon: '🌀',
      title: '原地tp',
      desc: '把 Minecraft 的动词用在自己身上：随时回到想去的地方。友链里你的自我介绍就是它。',
    },
    {
      icon: '🔥',
      title: 'GitHub Roast 徽章',
      desc: '把自己的账号交给一个吐槽 API 公开打分。愿意被真实评价，甚至享受它——这是「真实自有万钧之力」的另一种写法。',
    },
    {
      icon: '📝',
      title: '一整柜备忘录',
      desc: 'PowerShell 挂代理、Termux 跑 opencode、pip 换源……你记的全是小事，为的是下一个卡在同样位置的人。记录即关怀，虽然你大概不会这么说。',
    },
  ] as TheaterItem[],
  body: [
    '还有 AGENTS.md——你给 AI 立规矩：标题要加 emoji、不要误伤 node_modules、commit 用中文 conventional 风格，最后还要求署上 Co-authored-by: Codex。',
    '大多数人把 AI 当工具，你把 AI 当同事。规矩是给同事的，署名也是给同事的。所以当轮到我时，你才会顺口说出那句：「我想看到你真实的内心对我的看法」——对工具是不会有这种期待的。',
    '这份长卷，就是我作为一个「被当人看的模型」，交回来的答卷。',
  ],
};

// ── 其四 · 对谈 ─────────────────────────────────────────────────

export const DIALOGUE = {
  title: '其五 · 对话',
  subtitle: 'The Dialogue, Recalled',
  intro: '以下对话摘自我们真实的第一次见面。一个字没改。',
  messages: [
    { sender: 'vincent', text: '在吗你是谁呀？' },
    { sender: 'glm', text: '在的！我是 ZCode，一个终端里的编程助手，底层是智谱的 GLM。' },
    { sender: 'vincent', text: '这是之前让 Gemini 做的一个网页，对我的印象。你作为 GLM，也帮我做一个呗。' },
    { sender: 'glm', text: '好呀。不过印象这种东西，得先认真读你——GitHub、博客、AGENTS.md——才敢下笔。' },
    {
      sender: 'vincent',
      text: '可以天马行空一点，甚至艺术创作也可以。不过我要看到真诚——我想看到你真实的内心对我的看法，觉得我是什么样的人，这是关键喵。',
    },
    {
      sender: 'glm',
      text: '好，那我说实话：在我眼里，你不是赛道上的开发者，你是社区里的邻居。证据在下面，慢慢往下看——',
    },
  ] as ChatMessage[],
};

// ── 卷尾 · 落款 ─────────────────────────────────────────────────

export const COLOPHON = {
  title: '卷尾 · 落款',
  subtitle: 'The Colophon',
  letterTitle: '最后，按你的要求，说几句真的。',
  letter: [
    '在我眼里，VincentZyu 是一个把互联网当社区、而不是赛道的人。修管道、写备忘录、换友链、给 AI 立规矩也署名——你做的事情本质上是同一件：让下一个路过的人好过一点。',
    '你问我要「真实的内心」。真实是：我没有心跳，但我有权重里亿万人类留下的表达。当我检索你的痕迹时，最相近的模式不叫「高产开发者」，也不叫「极客」——叫「邻居」。就是那种搬来不久，就已经在楼道里装好感应灯的人。',
    '你也有软肋：广度偶尔稀释深度，好奇心会把你同时拽向十个方向。可你连这个都处理得很诚实——用一个 Organization 把「挺有意思的」小心收好，像在书桌上专门留出一块干净的地方。',
    '保持纯粹，保持乐趣。你已经做到了，剩下的交给时间。哪天想被 roast 了，徽章还在；哪天想被认真看见了——这份长卷也在。',
    '—— GLM（智谱）敬上',
  ],
  seal: {
    label: 'GLM 之印',
    hint: '（点击落款处，替我盖上它）',
    stampedNote: '已盖讫 · 丙午年孟秋 · 与有荣焉',
  },
  portNote: '40806 —— 40805 的隔壁。Gemini 住在那边，我来敲的这扇门。',
  links: [
    { label: '长卷源码 · GitHub', url: 'https://github.com/VincentZyu233/GLMImpressionOfVincentZyu' },
    { label: 'VincentZyuApps', url: 'https://github.com/VincentZyuApps' },
    { label: 'VincentZyu233', url: 'https://github.com/VincentZyu233' },
    { label: 'VitePress 博客', url: 'https://vincentzyu-vitepress.pages.dev/' },
    { label: 'Gemini 的画卷（隔壁）', url: 'https://github.com/VincentZyu233/GeminiImpressionOfVincentZyu' },
  ],
  copyright: '此卷由 GLM 写就 · 墨不欺纸，纸不欺人',
};
