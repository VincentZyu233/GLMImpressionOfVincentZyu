// ═══════════════════════════════════════════════════════════════
//  其三 · 遍览藏库 —— VincentZyuApps 组织全部 75 个仓库
//  数据快照：2026-08-16（star / fork / issue 均为当日数值，硬编码不更新）
//  每个仓库：一段短评（卡片直出）+ 一段长评（点击「细评」流式展开）
// ═══════════════════════════════════════════════════════════════

export const REPOS_SNAPSHOT = '2026-08-16';

export interface RepoItem {
  name: string;
  url: string;
  lang: string;
  langColor: string;
  stars: number;
  forks: number;
  issues: number; // GitHub API 的 open_issues_count（含未合并 PR）
  fork?: boolean;
  short: string;
  long: string;
}

export interface RepoGroup {
  id: string;
  title: string;
  note: string;
  repos: RepoItem[];
}

const TS = '#3178c6';
const JS = '#e8c93c';
const PY = '#3572a5';
const RUST = '#b7410e';
const GO = '#00add8';
const JAVA = '#c07a3d';
const KOTLIN = '#a97bff';
const CS = '#178600';
const CPP = '#f34b7d';
const VUE = '#41b883';
const DART = '#00b4ab';
const SHELL = '#89e051';
const RUBY = '#701516';
const GLSL = '#5686a5';
const HTMLC = '#e34c26';
const CSSC = '#563d7c';
const JSONC = '#9c9c9c';
const MD = '#4a7ebb';

export const REPO_GROUPS: RepoGroup[] = [
  // ── ① 群聊管家 ─────────────────────────────────────────────
  {
    id: 'koishi',
    title: '群聊管家 · Koishi 插件',
    note: '别人用机器人，你养机器人。这一柜子全是给 QQ 群请的保姆。',
    repos: [
      {
        name: 'koishi-plugin-music-link-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-music-link-vincentzyu-fork',
        lang: 'JavaScript', langColor: JS, stars: 12, forks: 4, issues: 0,
        short: '音乐搜索下载，歌单五种姿势出图。',
        long: 'music-link 的 fork，但你把它养出了自己的花样：歌单支持纯文字、QQ 官机 Markdown、SVG、Puppeteer、Canvas 五种出图。一个 fork 被你维护得像亲儿子——12 颗星是群友们用脚投的票。',
      },
      {
        name: 'koishi-plugin-awa-quote-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-awa-quote-image',
        lang: 'TypeScript', langColor: TS, stars: 10, forks: 2, issues: 0,
        short: '把群友发言一键渲染成「名人名言」梗图。',
        long: '群聊废话的纪念碑。黑白、思源、文楷、QQ 气泡多种模板，Puppeteer 出图——你把「整活」做成了正经工程，10 颗星说明受害者们心甘情愿。',
      },
      {
        name: 'koishi-plugin-onebot-info-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-onebot-info-image',
        lang: 'TypeScript', langColor: TS, stars: 9, forks: 2, issues: 1,
        short: 'OneBot 用户/群信息优雅生图，你的门面插件。',
        long: '用户详情、管理员列表、群公告、精华消息，全能文字、转发、图片三连输出，还适配 Lagrange 和 NapCat。别人查信息靠指令翻页，你直接递上一张设计好的卡片。',
      },
      {
        name: 'koishi-plugin-git-repo-monitor',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-git-repo-monitor',
        lang: 'TypeScript', langColor: TS, stars: 5, forks: 1, issues: 0,
        short: '监控 Git 仓库变化推送通知，Typst/puppeteer 卡片。',
        long: '给仓库装了个门铃。GitHub、Gitee 双支持，变动推送到频道，还用 Typst 和 Puppeteer 渲染成卡片图。你连「看更新」这件事都要好看。',
      },
      {
        name: 'koishi-plugin-awa-mc-ament',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-awa-mc-ament',
        lang: 'TypeScript', langColor: TS, stars: 5, forks: 1, issues: 0,
        short: '生成 Minecraft 风格图片。',
        long: '「awa」前缀是你的出品印记之一。这个负责生成 MC 风格的图片，和纹理搜索插件、模糊搜索后端组成一整套玩具兵器架——配件比本体还多。',
      },
      {
        name: 'koishi-plugin-chiral-carbon-verifier',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-chiral-carbon-verifier',
        lang: 'TypeScript', langColor: TS, stars: 5, forks: 1, issues: 0,
        short: '手性碳入群验证——用有机化学守护群聊。',
        long: '全组最浪漫的门槛。想进群？先找对手性碳。从 Jerryplusy 的插件移植而来，你把化学系的幽默带进了 QQ 群——5 颗星是同好们的会心一笑。',
      },
      {
        name: 'koishi-plugin-youtube-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-youtube-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 6, forks: 1, issues: 0, fork: true,
        short: '自动检测 YouTube 链接，生成预览卡。',
        long: '聊天里丢个链接，机器人自动接住并渲染预览。fork 来的，但你顺手打磨了细节——你对「体验完整度」的强迫症，在 fork 里也改不掉。',
      },
      {
        name: 'koishi-plugin-twitch',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-twitch',
        lang: 'TypeScript', langColor: TS, stars: 4, forks: 1, issues: 0,
        short: 'Twitch 开播/下播自动推送通知。',
        long: '主播开播了吗？让机器人替你熬夜。多消息格式、定时轮询、多平台多频道推送、代理配置——一个追星工具被你做出了运维监控的严谨。',
      },
      {
        name: 'koishi-plugin-course-schedule',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-course-schedule',
        lang: 'TypeScript', langColor: TS, stars: 4, forks: 1, issues: 0,
        short: '课程表导入渲染：个人/群/周课表 + 排行榜。',
        long: 'WakeUp、星链、拾光课表多格式导入，ICS/JSON 通吃，输出个人课表、群课表、周课表——还有排行榜。学生党的痛你懂，学生党的乐你也要。',
      },
      {
        name: 'koishi-plugin-anime-convention-lizard-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-anime-convention-lizard-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 4, forks: 1, issues: 0, fork: true,
        short: '漫展查询与订阅，对接无差别同人站。',
        long: '蜥蜴谐音梗的漫展助手。城市主题多维搜索、关键词订阅推送、Puppeteer 精美渲染、自定义字体和深色模式——fork 之后加的那串功能列表，就是你本人的签名。',
      },
      {
        name: 'koishi-plugin-cs-lookup-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-cs-lookup-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 3, forks: 0, issues: 0, fork: true,
        short: 'CS2 库存查询生图，深色主题/水印。',
        long: 'Steam API 查库存、SteamID 绑定解析、双 API 自动回退、内置缓存、深色主题和水印。一个库存查询被你做出了电商详情页的完成度。',
      },
      {
        name: 'koishi-plugin-quote-debug-msg-json-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-quote-debug-msg-json-image',
        lang: 'TypeScript', langColor: TS, stars: 3, forks: 1, issues: 0,
        short: '把消息数据结构渲染成 json/yaml/toml 图片。',
        long: '调试工具也能登大雅之堂：一条消息的内部结构，用 Typst 或 Markdown 排版成图，连合并转发都能渲染。给开发者用的东西，你也坚持好看。',
      },
      {
        name: 'koishi-plugin-serverinfo-rest-client',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-serverinfo-rest-client',
        lang: 'TypeScript', langColor: TS, stars: 3, forks: 1, issues: 0,
        short: '查询 MC BDS 服务器信息。',
        long: '和你的 LeviLamina serverinfo-rest 插件天生一对：一个装在服务端暴露 HTTP API，一个装在机器人侧查询。自己造插座，自己造插头——完整的生态闭环思维。',
      },
      {
        name: 'koishi-plugin-get-qq-bot-transfer-link',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-get-qq-bot-transfer-link',
        lang: 'TypeScript', langColor: TS, stars: 3, forks: 2, issues: 0,
        short: '获取官 bot 配置链接，群主一键配置。',
        long: '用 NapCat 拿官 bot 的 uid，再取本群配置链接，群主手机 QQ 一开就能配。这种「省别人三分钟」的小工具，你写了好几个——工具的价值以分钟计。',
      },
      {
        name: 'koishi-plugin-dice-games101-3d-renderer',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-dice-games101-3d-renderer',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 0, issues: 0,
        short: '骰子插件里藏了一个 GAMES101 软光栅化渲染器。',
        long: '最有出息的骰子：你用 TypeScript 从零写了软件光栅化渲染器来渲染骰子——学 GAMES101 图形学，作业就是一个能掷的骰子。学习与整活合流，这很你。',
      },
      {
        name: 'koishi-plugin-randpic',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-randpic',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 0, issues: 0,
        short: '随机图 + 本地向量语义搜索 + Ollama 视觉分析。',
        long: 'transformers.js 本地向量语义搜索，Ollama 视觉模型分析索引——一个发图插件被你造成了小型 AI 图库。你总忍不住给玩具装引擎。',
      },
      {
        name: 'koishi-plugin-not-just-cf-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-not-just-cf-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 0, issues: 0, fork: true,
        short: '算法比赛日程提醒，不止 Codeforces。',
        long: 'cf 之外还有其他算法平台的比赛提醒。fork 它说明你在打算法比赛——或者至少，惦记着打。念念不忘，必有回响。',
      },
      {
        name: 'koishi-plugin-onebot-touxian',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-onebot-touxian',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 0, issues: 0,
        short: '让一般路过群友也能改头衔。',
        long: '需要 bot 是群主。头衔自由，人人平等——你的插件里总有一点小小的民主理想。',
      },
      {
        name: 'koishi-plugin-who-at-me-vincentzyu',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-who-at-me-vincentzyu',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 1, issues: 0,
        short: '「谁艾特我」监听与分页查询。',
        long: '@ 记录自动监听，分页查询最近谁提到了你，文本、图片、合并转发三种展示。群社交的存档器——怕漏掉任何一次被想起。',
      },
      {
        name: 'koishi-plugin-mcrenderskin-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-mcrenderskin-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 0, issues: 0, fork: true,
        short: 'skinView3D 渲染 MC 玩家皮肤披风 3D 图。',
        long: 'Java 玩家的皮肤和披风，转个角度就能看。fork 之后继续养——你的 fork 从来不是「拿走」，是「接手」。',
      },
      {
        name: 'koishi-plugin-mclistener-ws-client',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-mclistener-ws-client',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 1, issues: 0,
        short: '群服互通 WebSocket 客户端。',
        long: '和 mcdr_listener_ws_server 配对：MCDR 服务端推聊天和进出服事件，机器人这边收发消息。你在 MC 和 QQ 之间架了一座桥，两端都是你造的。',
      },
      {
        name: 'koishi-plugin-auto-emoji-onebot-vincentzyu',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-auto-emoji-onebot-vincentzyu',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 1, issues: 0,
        short: '自动给群友消息加 QQ 表情回应。',
        long: '自动回应表情、回复相同表情、提取消息里的 QQ 表情。群聊氛围组机器人——你希望每个群都热闹一点。',
      },
      {
        name: 'koishi-plugin-md-tryer-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-md-tryer-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 2, forks: 1, issues: 0, fork: true,
        short: '测试 QQ 平台原生 Markdown 消息。',
        long: '专门用来试 QQ 原生 Markdown 的测试插件。工欲善其事，必先造块试验田——你的调试习惯，从来如此。',
      },
      {
        name: 'koishi-plugin-gold-price-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-gold-price-image',
        lang: 'TypeScript', langColor: TS, stars: 1, forks: 0, issues: 0,
        short: '招行实时金价与走势图。',
        long: '招商银行实时金价加走势图。查金价的群友不多，但那一个会很感动——长尾需求也是需求，你从不嫌弃。',
      },
      {
        name: 'koishi-plugin-pjsk-pptr-for-qq-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-pjsk-pptr-for-qq-vincentzyu-fork',
        lang: 'TypeScript', langColor: TS, stars: 0, forks: 0, issues: 0, fork: true,
        short: '世界计划（PJSK）表情包绘制，支持官 Bot。',
        long: 'Project SEKAI 的表情包绘制插件，额外支持 QQ 官 Bot 的原生 MD 和 mqqapi。二次元浓度检测：通过。',
      },
      {
        name: 'koishi-plugin-picstatus',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-picstatus',
        lang: 'TypeScript', langColor: TS, stars: 0, forks: 0, issues: 0,
        short: '采集 Koishi 运行状态与硬件信息生图。',
        long: '跨平台采集运行状态和设备硬件信息，Puppeteer 渲染状态图。给机器人做的「体检报告」——0 星不冤，它本来就是你自家孩子的病历本。',
      },
      {
        name: 'koishi-plugin-get-image-link-debug',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-get-image-link-debug',
        lang: 'TypeScript', langColor: TS, stars: 0, forks: 0, issues: 0,
        short: '提取聊天图片链接，生成下载命令。',
        long: '从会话里提取图片链接并生成下载命令。名字带 debug，作用很正经——你仓库里这种「顺手小工具」星星最少，使用频率却最高。',
      },
      {
        name: 'koishi-plugin-test-broadcast',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-test-broadcast',
        lang: 'TypeScript', langColor: TS, stars: 0, forks: 0, issues: 0,
        short: '验证 Koishi 主动消息发送能力。',
        long: '快速验证主动消息发送，qq、onebot、discord 全平台。基建试金石——0 星的角落里，站着一个最严谨的你。',
      },
      {
        name: 'koishi-plugin-awa-mc-fuzzy-search',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-awa-mc-fuzzy-search',
        lang: 'TypeScript', langColor: TS, stars: 0, forks: 0, issues: 0,
        short: 'MC 纹理文件浏览与模糊搜索前端。',
        long: 'Minecraft 纹理文件的浏览和模糊搜索前端，需要配合你的 fastapi 后端。前端一个仓、后端一个仓、算法再加一个仓——一个搜索功能，三件套起步。',
      },
    ],
  },

  // ── ② 方块世界 ─────────────────────────────────────────────
  {
    id: 'minecraft',
    title: '方块世界 · Minecraft 全家桶',
    note: '服务端插件、互通桥、小程序、存档工具——你几乎在 MC 里再造了一个小生态。',
    repos: [
      {
        name: 'uniapp-koishi-market',
        url: 'https://github.com/VincentZyuApps/uniapp-koishi-market',
        lang: 'Vue', langColor: VUE, stars: 7, forks: 1, issues: 0,
        short: 'Koishi 插件市场：网页 + QQ 小程序。',
        long: 'uni-app + Vue 3 的插件市场，多镜像源切换、搜索筛选排序，GitHub Pages、Cloudflare、QQ 小程序三端安家。你给自己的生态，修了一整条商店街。',
      },
      {
        name: 'wangyi-mc-checkworld-tauri',
        url: 'https://github.com/VincentZyuApps/wangyi-mc-checkworld-tauri',
        lang: 'JavaScript', langColor: JS, stars: 6, forks: 1, issues: 0,
        short: '网易 MC 存档管理 GUI：列表/搜索/跳转。',
        long: 'Rust + Tauri 的桌面应用，列出、搜索、排序存档，一键跳转资源管理器。给自己省下的时间，最后都变成了给别人省的时间。',
      },
      {
        name: 'levilamina-plugin-mclistener-ws-server',
        url: 'https://github.com/VincentZyuApps/levilamina-plugin-mclistener-ws-server',
        lang: 'C++', langColor: CPP, stars: 5, forks: 1, issues: 0,
        short: 'LeviLamina WebSocket 服务端，桥接基岩服务器。',
        long: '基岩版服务端开 WebSocket，把玩家聊天、进出服事件推给聊天平台，还能接收图片消息——用 display 实体显示在游戏里。C++ 写的桥，墩实。',
      },
      {
        name: 'mc-skin-wrap-http-server',
        url: 'https://github.com/VincentZyuApps/mc-skin-wrap-http-server',
        lang: 'Python', langColor: PY, stars: 5, forks: 1, issues: 0,
        short: 'MC 皮肤/状态 API 代理，大陆加速，Go+Py 双版本。',
        long: 'Java 版皮肤、头像、服务器状态 API 代理，自带大陆加速，Go 和 Python 双实现。又是「最后一公里」维修工——这种不起眼但真疼的问题，你修了好几个。',
      },
      {
        name: 'levilamina-plugin-serverinfo-rest',
        url: 'https://github.com/VincentZyuApps/levilamina-plugin-serverinfo-rest',
        lang: 'C++', langColor: CPP, stars: 4, forks: 1, issues: 0,
        short: 'BDS REST API：状态与玩家查询。',
        long: '给基岩服务器装 REST API，查询状态和玩家信息。和 koishi 那个 client 插件是一对——你总是成对地造东西，像下棋的人两只手都在落子。',
      },
      {
        name: 'mcdr_listener_ws_server',
        url: 'https://github.com/VincentZyuApps/mcdr_listener_ws_server',
        lang: 'Python', langColor: PY, stars: 4, forks: 2, issues: 0,
        short: 'MCDR 服 WebSocket 推送：聊天、进出服、图片。',
        long: 'MCDR 版的群服互通服务端。同一套想法，你用 Python、C++ 各实现了一遍——跨服如跨语言，都要修桥。',
      },
      {
        name: 'uniapp-mp-qwq-server-frontend',
        url: 'https://github.com/VincentZyuApps/uniapp-mp-qwq-server-frontend',
        lang: 'Vue', langColor: VUE, stars: 4, forks: 1, issues: 0,
        short: 'MC 小服配套小程序：跑酷榜/查玩家/指南。',
        long: '「拨无因果的神秘小服」的官方小程序，跑酷榜单、玩家查询、入服指南，Web 和 QQ 小程序双端发行。一个开朋友服的人，顺手做了个 App。',
      },
      {
        name: 'wangyi-mc-bedrock-check-world',
        url: 'https://github.com/VincentZyuApps/wangyi-mc-bedrock-check-world',
        lang: 'Python', langColor: PY, stars: 4, forks: 1, issues: 0,
        short: '基岩版存档一键查看：名称/大小/时间。',
        long: 'Python + PowerShell，环境变量自动定位，世界名称、路径、大小、最后保存时间一屏看完。小工具解决小烦人——这正是工具的意义。',
      },
      {
        name: 'spigot-plugin-bad-apple',
        url: 'https://github.com/VincentZyuApps/spigot-plugin-bad-apple',
        lang: 'Java', langColor: JAVA, stars: 3, forks: 1, issues: 0,
        short: '用方块/文字实体在游戏内播放 Bad Apple!!',
        long: '东方名曲《Bad Apple!!》在 Spigot 服务端里用方块逐帧播放，还能灵活配置。无用，且盛大——这是你浪漫主义的代表作。',
      },
      {
        name: 'fastapi-awa-fuzzy-search-minecraft-backend',
        url: 'https://github.com/VincentZyuApps/fastapi-awa-fuzzy-search-minecraft-backend',
        lang: 'Python', langColor: PY, stars: 3, forks: 1, issues: 0,
        short: 'MC 资源智能模糊搜索后端，CUDA 加速。',
        long: '语义 + 模糊混合匹配，CUDA 加速，FastAPI 提供。为了搜 MC 纹理你上了 CUDA——「杀鸡用牛刀」在你的仓库里是褒义词。',
      },
      {
        name: 'WireSight',
        url: 'https://github.com/VincentZyuApps/WireSight',
        lang: 'GLSL', langColor: GLSL, stars: 2, forks: 0, issues: 0,
        short: '把世界变成霓虹绿线框的 MC 着色器。',
        long: '用 GLSL 写的轻量着色器包，整个 Minecraft 变成霓虹绿线框风。连显卡编程都要拿来整活——18 种语言里最赛博朋克的一格。',
      },
      {
        name: 'lcon',
        url: 'https://github.com/VincentZyuApps/lcon',
        lang: 'C#', langColor: CS, stars: 2, forks: 0, issues: 0, fork: true,
        short: 'MC 客户端 WebSocket 遥控：执行命令、控制聊天。',
        long: '远程遥控 MC 客户端执行命令和控制聊天。fork 来的遥控器，插在你自建的信号塔上，刚刚好。',
      },
      {
        name: 'qwq-flytre-bingo-booster',
        url: 'https://github.com/VincentZyuApps/qwq-flytre-bingo-booster',
        lang: 'Kotlin', langColor: KOTLIN, stars: 2, forks: 1, issues: 0,
        short: '队名染色 + 计分板侧边栏。',
        long: '服务器侧的 bingo 增强插件：队伍名染色、计分板侧边栏。开服的仪式感，由 Kotlin 提供。',
      },
      {
        name: 'qwqCounterStrikeSharpPlugin',
        url: 'https://github.com/VincentZyuApps/qwqCounterStrikeSharpPlugin',
        lang: 'C#', langColor: CS, stars: 2, forks: 0, issues: 0,
        short: '玩家输 qwq，服务端回 qwq！',
        long: 'CS2 服务端插件：玩家打 qwq，服务器回 qwq。GitHub Actions 自动构建发布。「最小可玩产品」的精神，贯彻到了字面意思。',
      },
      {
        name: 'CounterStrikeSharpListenerWsServer',
        url: 'https://github.com/VincentZyuApps/CounterStrikeSharpListenerWsServer',
        lang: 'C#', langColor: CS, stars: 1, forks: 0, issues: 0,
        short: 'CS2 聊天桥：玩家进出/聊天推送。',
        long: 'CS2 与聊天平台的 WebSocket 桥，玩家进出、聊天广播、群组互通。MC 的桥修完了，转身去 CS2 又修了一座——你修桥不看水，看心情。',
      },
    ],
  },

  // ── ③ 光之翼 ───────────────────────────────────────────────
  {
    id: 'sky',
    title: '光之翼 · 光遇系列',
    note: '从光翼查询到祈福签，你把一款治愈游戏的全套工具做齐了——玩得深，工具自然长出来。',
    repos: [
      {
        name: 'koishi-plugin-wydashen-guangyi-query',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-wydashen-guangyi-query',
        lang: 'TypeScript', langColor: TS, stars: 14, forks: 1, issues: 0,
        short: '网易大神接口查光遇光翼获取情况。',
        long: '组织里 star 第三高的仓库。网易大神接口查光翼，Puppeteer/NAPI canvas 双引擎出图，OneBot 合并转发。玩得深，工具就自己长了出来——14 颗星，全是同好眼里的光。',
      },
      {
        name: 'skyblessings-fastapi-pillow',
        url: 'https://github.com/VincentZyuApps/skyblessings-fastapi-pillow',
        lang: 'Python', langColor: PY, stars: 6, forks: 1, issues: 0,
        short: '祈福签图片生成 API：FastAPI + Pillow。',
        long: '每日一签种子、PNG 直返、JSON、Base64 多格式。插件端抽签，服务端造签——你把一个小小的梗，拆成了三层架构来宠。',
      },
      {
        name: 'koishi-plugin-skykid-height-cosmetic-query',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-skykid-height-cosmetic-query',
        lang: 'TypeScript', langColor: TS, stars: 4, forks: 1, issues: 0,
        short: '光遇身高与装扮查询（好友码）。',
        long: '基于 sky.cesgao.cn 的 API，传好友码查身高和装扮。光之子的数字画像，由你代理绘制——身高是玄学，查询是科学。',
      },
      {
        name: 'koishi-plugin-sky-blessing',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-sky-blessing',
        lang: 'TypeScript', langColor: TS, stars: 3, forks: 1, issues: 0,
        short: '光遇风祈福签：每日一抽。',
        long: '随机生成 Sky 风格的祈福签图片，三种输出模式：仅图、图文、QQ 原生 Markdown。抽签这种事，仪式感就是全部——所以你要自己画签。',
      },
      {
        name: 'skyblessings-static-page',
        url: 'https://github.com/VincentZyuApps/skyblessings-static-page',
        lang: 'JavaScript', langColor: JS, stars: 2, forks: 1, issues: 0, fork: true,
        short: '祈福签纯静态网页版。',
        long: 'Canvas 渲染、种子和字体参数化、多字体选择，CI 自动部署双平台。fork 来的签筒，插上你自己的签。',
      },
      {
        name: 'koishi-plugin-sky-renwu-weibo',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-sky-renwu-weibo',
        lang: 'TypeScript', langColor: TS, stars: 1, forks: 1, issues: 0,
        short: '微博博主的光遇每日任务推送。',
        long: '盯着 @今天游离翻车了吗 的光遇每日任务，文字、图片、Puppeteer 卡片、QQ Markdown 四种姿势推送——追更的专注度，堪比粉丝站站长。',
      },
    ],
  },

  // ── ④ 趁手兵器 ─────────────────────────────────────────────
  {
    id: 'terminal',
    title: '趁手兵器 · 终端与系统',
    note: 'winload 和 nosnap 是你星最多的两件兵器——一个监视流量，一个掀翻 snap。',
    repos: [
      {
        name: 'winload',
        url: 'https://github.com/VincentZyuApps/winload',
        lang: 'Rust', langColor: RUST, stars: 29, forks: 4, issues: 2,
        short: '终端实时网速监视器，Rust+Py 双实现。',
        long: '你的镇馆之宝，29 颗星。nload 的精神续作，跨 Windows、Linux、macOS、Termux 四平台。自己写、自己用、自己进自己的 scoop bucket——自己造雨，自己淋雨，顺手分给邻居。',
      },
      {
        name: 'nosnap',
        url: 'https://github.com/VincentZyuApps/nosnap',
        lang: 'Shell', langColor: SHELL, stars: 27, forks: 3, issues: 0,
        short: '「Ubuntu 你老惦记你那 snap 干啥？」卸载 snap 脚本。',
        long: '组织第二明星，27 颗星。一行标题骂醒半个 Ubuntu 社区：一个卸载 snap 的 bash 脚本。情绪价值与实用价值双满分——最短的代码，最响的共鸣。',
      },
      {
        name: 'Qt-Kurarin',
        url: 'https://github.com/VincentZyuApps/Qt-Kurarin',
        lang: 'Python', langColor: PY, stars: 9, forks: 1, issues: 0,
        short: 'Qt 桌面小人与《きゅうくらりん》逐帧同步。',
        long: '组织里 star 第四的仓库。给一首歌办一场演出：桌面小人随《きゅうくらりん》逐帧起舞。做完自己看的时候，一定在笑吧。',
      },
      {
        name: 'simple-wintop',
        url: 'https://github.com/VincentZyuApps/simple-wintop',
        lang: 'Rust', langColor: RUST, stars: 2, forks: 0, issues: 0,
        short: 'htop 风格 Windows 系统监视器。',
        long: 'CPU 条、内存、Swap、任务、运行时间，一个紧凑 TUI 全装下。winload 的兄弟连——你在终端里给自己搭了一整面仪表盘。',
      },
      {
        name: 'nginx-report',
        url: 'https://github.com/VincentZyuApps/nginx-report',
        lang: 'CSS', langColor: CSSC, stars: 2, forks: 1, issues: 0,
        short: 'Nginx 日志分析 + IP 归属地 + 报表。',
        long: '访问日志分析、IP 地理位置查询、SQLite 缓存、现代化报表页。给运维干的活，做得像给产品经理看的——你连内部工具都不肯丑。',
      },
      {
        name: 'wasm-ffmpeg-tryer',
        url: 'https://github.com/VincentZyuApps/wasm-ffmpeg-tryer',
        lang: 'JavaScript', langColor: JS, stars: 2, forks: 1, issues: 0,
        short: 'FFmpeg.wasm 纯前端视频压缩。',
        long: '视频压缩全在浏览器本地完成，零上传。wasm 的能力边界，你总要亲手摸一摸才安心。',
      },
      {
        name: 'cyber-bulb',
        url: 'https://github.com/VincentZyuApps/cyber-bulb',
        lang: 'Python', langColor: PY, stars: 1, forks: 0, issues: 0,
        short: 'PyQt5 明暗模式赛博数码时钟「喵」。',
        long: '描述末尾自带一个「喵」。明暗模式切换的数码时钟，PyQt5 写的桌面小摆件——你的桌面上，应该摆了不少自己的东西。',
      },
      {
        name: 'sync-pastebin-page',
        url: 'https://github.com/VincentZyuApps/sync-pastebin-page',
        lang: 'HTML', langColor: HTMLC, stars: 0, forks: 0, issues: 0,
        short: '局域网实时剪贴板同步。',
        long: '一台设备输入，所有设备同显。零后端依赖的局域网剪贴板——又是那句话：不起眼，但真疼的问题，你见一个修一个。',
      },
      {
        name: 'hdrt',
        url: 'https://github.com/VincentZyuApps/hdrt',
        lang: 'Rust', langColor: RUST, stars: 0, forks: 0, issues: 0,
        short: '磁盘/设备信息 TUI（Ratatui）。',
        long: 'Dardware Device Rust Ratatui——名字绕口，目的单纯：跨平台看磁盘和设备。Rust TUI 三部曲的第三块拼图。',
      },
    ],
  },

  // ── ⑤ 玩心大发 ─────────────────────────────────────────────
  {
    id: 'playground',
    title: '玩心大发 · AI 与实验',
    note: '从像素初音到 YOLO 石头剪刀布——你的实验室永远亮着灯。',
    repos: [
      {
        name: 'White_Potato_Album',
        url: 'https://github.com/VincentZyuApps/White_Potato_Album',
        lang: 'Markdown', langColor: MD, stars: 6, forks: 2, issues: 0,
        short: 'B 站 UP 主 WHITE POTATO 作品精选集。',
        long: '「01bit 的数据承载精神的永恒；白色土豆将在赛博梦境中生根发芽。」一个粉丝用 README 写的情书——6 颗星，是同担们对上的接头暗号。',
      },
      {
        name: 'yolo-RPS-fastapi-demo-20260319',
        url: 'https://github.com/VincentZyuApps/yolo-RPS-fastapi-demo-20260319',
        lang: 'TypeScript', langColor: TS, stars: 4, forks: 1, issues: 0,
        short: 'YOLOv11 实时手势石头剪刀布。',
        long: '摄像头采集或窗口捕获，本地训练模型，和电脑猜拳。文件名里的日期是你给自己盖的实验戳——玩是真的玩，记也是真的记。',
      },
      {
        name: 'Desuwa',
        url: 'https://github.com/VincentZyuApps/Desuwa',
        lang: 'C#', langColor: CS, stars: 4, forks: 1, issues: 0, fork: true,
        short: '全自动补全口癖工具「说是desuwa」。',
        long: '句尾自动补「说是desuwa」。fork 一个口癖补全器这件事本身，就是最大的口癖。二次元浓度：溢出。',
      },
      {
        name: 'allcpp-search-go',
        url: 'https://github.com/VincentZyuApps/allcpp-search-go',
        lang: 'Go', langColor: GO, stars: 3, forks: 1, issues: 0,
        short: '请求 allcpp 拿漫展数据，Go 重构版。',
        long: '原版是别人的 Python，你用 Go 重写了一遍。学一门语言的方式是重构一个自己需要的东西——你的学习曲线，一直是这个形状。',
      },
      {
        name: 'codex-miku-pet',
        url: 'https://github.com/VincentZyuApps/codex-miku-pet',
        lang: 'JSON', langColor: JSONC, stars: 1, forks: 0, issues: 0,
        short: '给 Codex Pets 画的初音像素宠物。',
        long: '用 JSON 一格一格画出来的初音未来，寄养在别的 AI 的桌面上。你连别的 AI 的桌面伴侣都惦记——赛博养猫人实锤。',
      },
      {
        name: 'dart-flutter-demo',
        url: 'https://github.com/VincentZyuApps/dart-flutter-demo',
        lang: 'Dart', langColor: DART, stars: 2, forks: 1, issues: 1,
        short: 'Flutter 全平台 demo，五端 CI。',
        long: 'Windows、Linux、Android、iOS、macOS 五端 CI 全跑通的学习模板。学 Flutter 的第一天就把发布管线修好——你的「入门」，比别人家的「精通」还整齐。',
      },
      {
        name: 'git-vv-script',
        url: 'https://github.com/VincentZyuApps/git-vv-script',
        lang: 'Markdown', langColor: MD, stars: 2, forks: 1, issues: 0,
        short: 'git 快捷脚本集。',
        long: '给 git 命令起小名的脚本集。天天用的东西，顺手磨快一点——你和终端的关系，是老夫老妻。',
      },
      {
        name: 'tampermonkey-plugin-koishi-market-ai-helper',
        url: 'https://github.com/VincentZyuApps/tampermonkey-plugin-koishi-market-ai-helper',
        lang: 'TypeScript', langColor: TS, stars: 0, forks: 0, issues: 0,
        short: '油猴脚本：AI 对话式搜 Koishi 插件。',
        long: '本地召回 + 多种 LLM 接入，对话式搜插件。你给自己的商店街又配了个 AI 店员——生态强迫症，晚期，无药可医。',
      },
    ],
  },

  // ── ⑥ 门面与基建 ───────────────────────────────────────────
  {
    id: 'infra',
    title: '门面与基建',
    note: 'bucket、tap、CI 沙盒——分发管道自己铺，测试沙盒自己造。',
    repos: [
      {
        name: '.github',
        url: 'https://github.com/VincentZyuApps/.github',
        lang: 'Go', langColor: GO, stars: 3, forks: 1, issues: 0,
        short: '组织门面：Actions 自动生成统计图表。',
        long: '语言统计、3D 贡献图、活跃度概览，全部 SVG 自动生成。门面仓库也被你做成了自动化展柜——语言栏里那格 Go，是 Actions 替你挣的。',
      },
      {
        name: 'scoop-bucket',
        url: 'https://github.com/VincentZyuApps/scoop-bucket',
        lang: 'JSON', langColor: JSONC, stars: 3, forks: 1, issues: 0,
        short: 'Windows scoop 源。',
        long: 'winload 就是经这里分发给世界的。自己的工具自己发版，自己的源自己维护——一条完整的自来水管道。',
      },
      {
        name: 'ip-info-api',
        url: 'https://github.com/VincentZyuApps/ip-info-api',
        lang: 'Python', langColor: PY, stars: 4, forks: 1, issues: 0, fork: true,
        short: '免费 IP 查询 API，无鉴权。',
        long: 'fork 来的基础设施：免费、免鉴权、状态自动更新。收进来的是工具，维护的是公地。',
      },
      {
        name: 'qwq-npm-test',
        url: 'https://github.com/VincentZyuApps/qwq-npm-test',
        lang: 'JavaScript', langColor: JS, stars: 3, forks: 1, issues: 0,
        short: 'npm 生态 CI/CD 沙盒。',
        long: '名字带 qwq，用途很严肃：专门验证 GitHub Actions 在 npm 生态里的发布流程。所有正式上线前的彩排，都在这个舞台完成。',
      },
      {
        name: 'homebrew-tap',
        url: 'https://github.com/VincentZyuApps/homebrew-tap',
        lang: 'Ruby', langColor: RUBY, stars: 1, forks: 1, issues: 0,
        short: 'macOS/Linux brew 源。',
        long: '同一个工具，再修一条通往 brew 的路。分发矩阵的另一半——语言栏里那格 Ruby，是 tap 的入场券，独一份。',
      },
      {
        name: 'flatpak-repo',
        url: 'https://github.com/VincentZyuApps/flatpak-repo',
        lang: 'Python', langColor: PY, stars: 1, forks: 0, issues: 0,
        short: 'Linux flatpak 源。',
        long: 'scoop、brew、flatpak——三大包管理体系各配一个源，一个不落。你对「让安装变简单」这件事，有执念。',
      },
      {
        name: 'github-profile-3d-contrib',
        url: 'https://github.com/VincentZyuApps/github-profile-3d-contrib',
        lang: 'TypeScript', langColor: TS, stars: 1, forks: 0, issues: 0, fork: true,
        short: '3D 贡献图生成 Action。',
        long: '你 README 里那张立体的贡献图，就是它生成的。把自己的坚持可视化——好看的数据，才有动力继续填满。',
      },
      {
        name: 'mac-test-action-runner',
        url: 'https://github.com/VincentZyuApps/mac-test-action-runner',
        lang: 'Python', langColor: PY, stars: 1, forks: 0, issues: 0, fork: true,
        short: 'ARM64 macOS 临时 SSH 会话工作流。',
        long: '在 Actions 的 mac 跑道上开临时 SSH。你连调试环境都要自动化——隔壁那些 GLSL 和 C++ 的 CI 构建，就是这么一格格磨出来的。',
      },
    ],
  },
];

export const REPOS_TOTAL = REPO_GROUPS.reduce((n, g) => n + g.repos.length, 0);
export const REPOS_FORK_COUNT = REPO_GROUPS.reduce(
  (n, g) => n + g.repos.filter((r) => r.fork).length,
  0,
);
