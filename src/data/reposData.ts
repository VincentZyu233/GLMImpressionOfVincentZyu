// ═══════════════════════════════════════════════════════════════
//  其三 · 遍览藏库 —— VincentZyuApps 组织全部 75 个仓库
//  数据快照：2026-08-16（star / fork / issue 均为当日数值，硬编码不更新）
//  每个仓库：短评 25-50 字（卡片直出）+ 长评 250-500 字（悬浮窗流式展开）
// ═══════════════════════════════════════════════════════════════

export const REPOS_SNAPSHOT = '2026-08-16';

export interface RepoItem {
  name: string;
  url: string;
  langs: { name: string; color: string; pct: number }[]; // GitHub 语言占比 Top5（快照硬编码）
  stars: number;
  forks: number;
  issues: number; // GitHub API 的 open_issues_count（含未合并 PR）
  fork?: boolean; // 徽章规则（并集）：名字带 fork 或 GitHub 标记为 fork
  short: string;
  long: string;
}

export interface RepoGroup {
  id: string;
  title: string;
  note: string;
  repos: RepoItem[];
}

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
        langs: [{ name: 'JavaScript', color: '#f1e05a', pct: 97.3 }, { name: 'Python', color: '#3572a5', pct: 2.7 }], stars: 12, forks: 4, issues: 0, fork: true,
        short: '音乐搜索下载，歌单五种姿势出图：纯文字、Markdown、SVG、Puppeteer、Canvas。',
        long: 'music-link 的 fork，但在你手里获得了第二生命。歌曲搜索下载之外，你给歌单做了五种渲染姿势：纯文字、QQ 官机 Markdown、SVG 出图、Puppeteer 截图、Canvas 直绘——同一个功能，从最轻到最重的呈现方案全齐。这种「全都要」的思路很你：你不纠结哪种方案最优，你在乎的是用户在任何环境、任何客户端都能拿到好看的输出。12 颗星、4 个 fork，说明群友不是收藏党，是真的天天在用。一个 fork 被维护成了主力插件，靠的从来不是 fork 这个动作，而是后面一次一次的打磨和适配。音乐是刚需，好看是执念，你把这两件事缝在了同一个插件里。',
      },
      {
        name: 'koishi-plugin-awa-quote-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-awa-quote-image',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 10, forks: 2, issues: 0,
        short: '把群友的发言一键渲染成「名人名言」梗图，多种排版模板可选。',
        long: '群聊废话的纪念碑。一条普通的群友发言，经过这个插件就变成了一张煞有介事的名人名言图：黑白报纸风、思源宋体、霞鹜文楷、QQ 气泡，多种 html+css 模板轮着来，最后由 Puppeteer 截图出品。整活这件事，别人发个表情包就完事，你非要做成正经工程——模板系统、渲染管线、字体排印，一应俱全。10 颗星是「受害者们」用脚投的票：被做成名言图的人，转头就去.star 了仓库。你的幽默感从来不是随口一说，而是「我给你做个工具，让整个群都能生产快乐」。awa 前缀出品，必属整活精品。梗图会过期，模板引擎不会——你在整活里顺手修炼的排版功力，迟早出现在某个正经项目里。',
      },
      {
        name: 'koishi-plugin-onebot-info-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-onebot-info-image',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 94.2 }, { name: 'Vue', color: '#41b883', pct: 2.2 }, { name: 'Shell', color: '#89e051', pct: 1.5 }, { name: 'Protocol Buffer', color: '#5686a5', pct: 1.1 }, { name: 'Python', color: '#3572a5', pct: 1.1 }], stars: 9, forks: 2, issues: 1,
        short: 'OneBot 用户与群信息查询，文字、转发、图片三连输出，你的门面插件。',
        long: '你的门面插件之一，也是 friends 页里那张自我介绍卡的幕后功臣。用 OneBotV11 的 API 把用户详细信息、群管理员列表、群公告、群精华消息统统掏出来，输出支持纯文本、合并转发、渲染图片三种形态，还同时适配 Lagrange 和 NapCat 两套实现——QQ 协议实现层怎么打架，用户都不用关心。别人查信息靠指令翻页，你直接递上一张排版好的卡片。这种「查询结果也要体面」的审美，贯穿了你所有的 bot 插件。9 颗星在插件圈不算少了，毕竟用的人每天都会看它出图好几眼。连你自己的友链页都用它出镜，插件作者成为插件的最佳用户，这是最好的广告。',
      },
      {
        name: 'koishi-plugin-git-repo-monitor',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-git-repo-monitor',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 97.1 }, { name: 'Typst', color: '#239dad', pct: 2.4 }, { name: 'Python', color: '#3572a5', pct: 0.5 }], stars: 5, forks: 1, issues: 0,
        short: '监控 Git 仓库变化并推送通知，Typst 与 Puppeteer 双渲染卡片。',
        long: '给仓库装了个门铃。GitHub 和 Gitee 双平台支持，仓库一有风吹草动就推送到指定频道，而且通知不是干巴巴一行字——你用 Typst 和 Puppeteer 两条渲染管线，把 commit 动态排成了一张张卡片图。 Typst 是排版界的正经学问，Puppeteer 是无头浏览器全家桶，为了「群友看一眼更新」这件事，你把两套排版系统都搬来了。这暴露了你的一个底层逻辑：信息传递的仪式感，本身就是信息的一部分。5 颗星来自同样在乎体面的开发者——他们看懂了这两个渲染后缀的分量。门铃响不响是小事，门铃好不好看是大事——你显然把两者都当真了。',
      },
      {
        name: 'koishi-plugin-awa-mc-ament',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-awa-mc-ament',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 5, forks: 1, issues: 0,
        short: '生成 Minecraft 风格图片的 Koishi 插件，awa 系列出品之一。',
        long: '「awa」前缀是你的出品印记，这个负责生成 Minecraft 风格的图片。它不是孤立的——和纹理搜索插件、CUDA 加速的模糊搜索后端一起，组成了一套完整的 MC 视觉工具兵器架。一个「生成 MC 风图片」的需求，被你拆成了前端插件、资源检索、语义搜索三层，配件比本体还多。这种生态化的思路在别的开发者那里叫过度设计，在你这里叫顺手：反正桥都修了，多跑几辆车不过分吧。5 颗星里藏着的，是一个正在缓慢成型的 MC 工具宇宙。MC 的视觉语言是像素与方块的组合律，你把这套律法翻译给了聊天机器人听。工具的尽头是翻译，翻译的尽头是审美，这两样你都有存货。',
      },
      {
        name: 'koishi-plugin-chiral-carbon-verifier',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-chiral-carbon-verifier',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 5, forks: 1, issues: 0,
        short: '手性碳入群验证插件——想进群？先用有机化学知识找对手性碳。',
        long: '全组织最浪漫的入群门槛。别的群进群答题库都是「本群宗旨是什么」，你的群进群要找手性碳——连着四个不同取代基的碳原子，化学课的噩梦成了赛博门禁。从 Jerryplusy 的 crystelf-plugin 移植而来，你把化学系的幽默原封不动搬进了 QQ 群：能答上来的是同好，答不上来的也顺便复习了有机化学，双向奔赴。5 颗星是同好们的会心一笑，也是「理科生的浪漫」在开源世界的罕见样本。这种插件没有任何实用价值，但它存在的本身，就是对「有趣」二字最认真的执行。后来想进群的人大概会一边骂一边翻出化学课本——知识以最意外的方式完成了闭环。',
      },
      {
        name: 'koishi-plugin-youtube-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-youtube-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 94.7 }, { name: 'Python', color: '#3572a5', pct: 5.3 }], stars: 6, forks: 1, issues: 0, fork: true,
        short: '自动检测聊天中的 YouTube 链接，抓取视频信息渲染预览卡。',
        long: '群聊的链接终结者。有人丢一个 YouTube 链接进来，插件自动接住，通过 YouTube Data API v3 抓取视频信息，输出成文本或 Puppeteer 渲染的预览卡——标题、封面、数据一屏看完，不用点出去。fork 来的基础，但你顺手打磨了细节：多消息格式、代理配置这些实用主义的部分一个不落。你对「体验完整度」的强迫症在 fork 里也改不掉：既然要接住链接，就要接得漂亮。6 颗星说明群友已经习惯了这种被伺候的感觉——技术最好的样子，就是让人忘记它的存在。链接预览这种功能，做的人图的是便利，用的人得到的是体面，两边的满足都归你。',
      },
      {
        name: 'koishi-plugin-twitch',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-twitch',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 4, forks: 1, issues: 0,
        short: 'Twitch 主播开播下播自动推送，多频道多平台，消息格式丰富。',
        long: '主播开播了吗？让机器人替你熬夜。Twitch 直播的开播、下播事件自动推送，支持文字、图片、合并转发多种消息格式，定时轮询检测，多平台多频道推送，代理配置齐全——一个追星工具被你做出了运维监控系统的严谨。轮询间隔、消息模板、推送目标，全部可配置，这已经不是「看看主播」了，这是一套小型事件总线。你在生活中大概也是这样：喜欢一个东西的方式，是为它造一套基础设施。4 颗星的主播粉丝群里，应该给你颁一个最佳技术粉头奖。追星与运维在此合流：爱与监控，本质都是「不想错过」。你只是把这份心情写成了定时任务，让它替你忠诚。',
      },
      {
        name: 'koishi-plugin-course-schedule',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-course-schedule',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 93.8 }, { name: 'JSON', color: '#292929', pct: 4.8 }, { name: 'Python', color: '#3572a5', pct: 1.4 }], stars: 4, forks: 1, issues: 0,
        short: '课程表插件：WakeUp、星链、拾光多格式导入，渲染各类课表图片。',
        long: '学生党的赛博课程秘书。WakeUp、星链、拾光三大家课表 App 的格式都能导入，ICS、JSON 通用，然后渲染成图片输出——个人课表、群课表、周课表，一应俱全，甚至还有排行榜（比谁课多？）。你把「选课焦虑」这个大学生共同创伤，做成了一个可以共同围观的可视化项目。技术上是多格式解析 + 图形渲染的老本行，情感上是对校园生活的温柔注目：课表这种枯燥的东西，也值得被排得好看一点。4 颗星来自同样被课表折磨的同学们。课表渲染的排版要求不低：节次对齐、周次切换、信息层级，每一样都是小型的信息设计练习。你交的作业，比课表本身工整。',
      },
      {
        name: 'koishi-plugin-anime-convention-lizard-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-anime-convention-lizard-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 4, forks: 1, issues: 0, fork: true,
        short: '漫展查询与订阅插件，对接无差别同人站，支持多维度搜索推送。',
        long: '蜥蜴谐音梗担当的漫展助手。对接 allcpp 无差别同人站，城市、主题多维搜索，关键词订阅推送，Puppeteer 精美图片渲染，自定义字体和深色模式——fork 之后补的那一长串功能列表，就是你本人的签名：原版给了骨架，你给它穿上西装。对一个常逛漫展的人来说，工具的颜值和展会的颜值一样重要。深色模式这个细节尤其暴露属性：晚上在被窝里刷漫展信息的人，需要一块温柔的深色屏幕。4 颗星是同好们在漫展间隙点亮的小灯。对同好来说，这个插件的重量远超它的星数：漫展信息差是真实的痛，你是那个把信息差抹平的人。',
      },
      {
        name: 'koishi-plugin-cs-lookup-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-cs-lookup-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 92.4 }, { name: 'HTML', color: '#e34c26', pct: 7.6 }], stars: 3, forks: 0, issues: 0, fork: true,
        short: '查 CS2 库存并渲染成图：SteamID 绑定、双 API 回退、深色主题。',
        long: 'CS2 玩家的库存橱窗。通过 Steam API 查询玩家库存并渲染成图片，细节控狂喜的部分在这里：SteamID 绑定与解析、可配代理、双 API 自动回退、内置图片缓存、深色主题、水印——一个「看看我有什么枪」的功能，被你做出了电商详情页的完成度。双 API 回退这种容错设计，一般只出现在生产级服务里，你用它来保证群友随时能炫枪。深色主题和水印则是纯粹的审美坚持：库存图也要有品牌感。3 颗星来自同样在 CS2 里氪过金的兄弟们。库存会贬值，工程品味不会——这套容错与缓存的思路，放到任何生产服务里都拿得出手。',
      },
      {
        name: 'koishi-plugin-quote-debug-msg-json-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-quote-debug-msg-json-image',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 3, forks: 1, issues: 0,
        short: '把消息数据结构用 json/yaml/toml 格式渲染成图片，调试神器。',
        long: '调试工具也能登大雅之堂。一条消息的内部数据结构——那些只有开发者才看的 JSON——被你用 Typst 或 Markdown 排版成图片，连 OneBot 合并转发这种复杂嵌套都能渲染得清清楚楚。给开发者用的东西，你也坚持好看，这在开源世界几乎是一种美德逆行：大多数调试工具都是能看就行，你偏要它能看且体面。3 颗星来自其他插件作者——他们是唯一能体会「调试信息排版学」含金量的人。工具的工具，你连这一层都照顾到了。「让看不见的东西被看见」是调试工具的使命，你给它加了一句注脚：还要看得舒服。排版好的调试信息甚至能当文档用——有些群友真的拿它学协议。',
      },
      {
        name: 'koishi-plugin-serverinfo-rest-client',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-serverinfo-rest-client',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 86.2 }, { name: 'Vue', color: '#41b883', pct: 6.6 }, { name: 'Typst', color: '#239dad', pct: 3.9 }, { name: 'Python', color: '#3572a5', pct: 3.3 }], stars: 3, forks: 1, issues: 0,
        short: 'Minecraft BDS 服务器信息查询客户端，对接你自研的 REST 服务端。',
        long: '和你的 LeviLamina serverinfo-rest 插件天生一对：那边装在基岩版服务端上，把服务器状态和玩家信息暴露成 HTTP API；这边装在 Koishi 里，优雅地查询和展示。自己造插座，自己造插头，两端还都写了文档——这是完整的生态闭环思维，大多数人的项目止步于「能用」，你的项目会自己长出配套。3 颗星里有几个是同时 star 了两个仓库的，他们看懂了这是一对。成对造物的习惯，说明你思考的颗粒度从来不是单个工具，而是场景的完整闭环。插座与插头之间还隔着文档与示例，你都写了——生态闭环的最后一环，永远是对下一个开发者的友好。',
      },
      {
        name: 'koishi-plugin-get-qq-bot-transfer-link',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-get-qq-bot-transfer-link',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 3, forks: 2, issues: 0,
        short: '获取 QQ 官方 Bot 的配置转移链接，群主手机一点即配，省三分钟神器。',
        long: '专治「官方 Bot 配置转移」这种谁碰谁骂的麻烦事：用 NapCat 拿到官 bot 的 uid，再取出本群开放官 bot 的全量和主动配置链接，群主用手机 QQ 打开就能配置。听起来简单的两步，背后是你在 QQ 机器人这个协议丛林里摸爬滚打攒下的地形图——知道 uid 在哪、链接怎么拼、权限怎么走。这种「省别人三分钟」的小工具你写了好几个，它们星星不多，但被用到的每一次都在替某个群主消除一次烦躁。工具的价值以分钟计，善良的度量衡也是。QQ 机器人领域的地图每小时都在变，你把某个坐标的通行路线画了下来，后来者少走一段弯路。',
      },
      {
        name: 'koishi-plugin-dice-games101-3d-renderer',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-dice-games101-3d-renderer',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 2, forks: 0, issues: 0,
        short: '骰子插件里藏了一个用 TypeScript 从零写的 GAMES101 软光栅化渲染器。',
        long: '最有出息的骰子。别人写骰子插件，随机数取整就完事；你写骰子插件，先用 TypeScript 从零实现一个软件光栅化渲染器——顶点变换、光栅化、着色，GAMES101 图形学课程的完整作业链——然后渲染出一个真正立体的、会滚的骰子。学习与整活在你的世界里从来不是两条路：学什么就把什么做成玩具，做什么都顺便把课上完。这种「学以致玩」的姿势，比任何学习方法论都高级。2 颗星来自同样在图形学苦海里泅渡的人，他们看到代码里的矩阵运算时，会心一笑。渲染一个骰子的意义不在骰子，而在「我亲手算出了它该长什么样」——从矩阵到像素的那条路，你全程步行。',
      },
      {
        name: 'koishi-plugin-randpic',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-randpic',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 90.6 }, { name: 'Python', color: '#3572a5', pct: 9.4 }], stars: 2, forks: 0, issues: 0,
        short: '智能随机图片插件：关键词搜索、本地向量语义搜索、Ollama 视觉分析。',
        long: '一个发图插件被你造成了小型 AI 图库。从本地文件夹随机选图发送是基本盘；关键词搜索是常规操作；transformers.js 本地向量语义搜索——输入「猫猫」能语义匹配到所有含猫的图——这是 AI 时代的新姿势；Ollama 视觉模型图片内容分析与索引，则是把「图片理解」也搬到了本地。四层能力叠在一个发图功能上，你对「给玩具装引擎」这件事毫无抵抗力。而且全部本地推理，不花一分 API 钱——穷则本地部署，达则语义搜索，你两头都占了。2 颗星来自同样在本地跑 Ollama 的极简主义者。发图这个需求几十年没变过，你让它换上了新世代的引擎——本地推理、语义检索，老功能新灵魂。',
      },
      {
        name: 'koishi-plugin-not-just-cf-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-not-just-cf-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 88.4 }, { name: 'Python', color: '#3572a5', pct: 11.6 }], stars: 2, forks: 0, issues: 0, fork: true,
        short: '算法比赛日程提醒插件，不止 Codeforces，覆盖多个算法竞赛平台。',
        long: '名字起得很妙：not just cf——不止 Codeforces，还有其他算法比赛平台的日程提醒。fork 它这个动作本身就是一条信息：你在打算法竞赛，或者至少认真惦记着打。结合你仓库里那个 GAMES101 渲染器、那堆系统底层工具，你的技术趣味明显偏向「硬核知识 + 立刻能用」的交集区。算法竞赛是纯粹的脑力竞技，没有整活空间，你依然要给它配个提醒机器人——说明你对待「认真的事」和「好玩的事」，用的是同一套基建狂魔方法论。2 颗星来自同样在 rating 里浮沉的选手。rating 会掉，提醒机器人永远准时——竞技的浪漫，一半在赛场，一半在你写的轮询里。',
      },
      {
        name: 'koishi-plugin-onebot-touxian',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-onebot-touxian',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 94.8 }, { name: 'Python', color: '#3572a5', pct: 5.2 }], stars: 2, forks: 0, issues: 0,
        short: '让一般路过的群友也能自助修改群头衔，头衔自由，人人平等。',
        long: '需要 bot 是群主才能运转的小插件，功能就一句话：让一般路过的群友也能改自己的群头衔。QQ 的头衔本是群主的特权象征，你把它开放成了全员福利——「头衔自由，人人平等」，这八个字可以刻在你插件的墓志铭上（虽然它活得好好的）。技术含量不高，但插件的价值本来就不由技术难度决定，而由它交付的快乐决定。群友们顶着「本群最强炊事班长」「资深划水专家」这些自封头衔水群的时候，没有人知道背后是一次小小的技术平权运动。2 颗星是两枚勋章。小小的权限开放，背后是「群是大家的」这个朴素信念。技术中立，用它的人有立场，你的立场写在头衔里。',
      },
      {
        name: 'koishi-plugin-who-at-me-vincentzyu',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-who-at-me-vincentzyu',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 77.7 }, { name: 'Python', color: '#3572a5', pct: 22.3 }], stars: 2, forks: 1, issues: 0,
        short: '「谁艾特我」：自动监听记录群里 @ 消息，分页查询三种展示。',
        long: '群社交的存档器。自动监听并记录群聊中的所有 @ 消息，之后可以分页查询「最近谁提到了我」，支持按当前频道或全平台检索，结果有文本、图片、合并转发三种展示——又是你标志性的「三连输出」。怕漏掉任何一次被想起，是这个插件全部的动机。社交软件的信息流天生健忘，你偏要给它装一个召回机制：被 @ 是小事，但每一次被 @ 都值得被妥善保管。2 颗星来自同样怕错过什么的群友，人类的孤独是共通的，解决方案是你写的。三条展示路径、分页检索、跨频道过滤——一个情绪驱动的需求，享受了全套工程化待遇，这是你表达在意的独特方式。',
      },
      {
        name: 'koishi-plugin-mcrenderskin-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-mcrenderskin-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 88.7 }, { name: 'Python', color: '#3572a5', pct: 11.3 }], stars: 2, forks: 0, issues: 0, fork: true,
        short: '基于 skinView3D 渲染 MC 玩家皮肤披风 3D 图片，转着看的那种。',
        long: 'Java 版玩家的皮肤橱窗。基于 skinView3D.js，把玩家的皮肤和披风渲染成 3D 图片，可以转着看——「转个角度就能看」这个朴素需求，背后是完整的 3D 渲染管线接入。名字里还留着「fork」的出身，但 GitHub 已经把它记作原创仓库：从 fork 起家，养成了自己的山头，这就是你对待别人代码的方式——不是「拿走」，是「接手」，接手之后还负责到底。2 颗星来自同样在乎自己在方块世界里长什么样的玩家，皮肤是 MC 玩家的第二张脸，你给它开了美颜。从 fork 到原创的距离，是 diff 里那一行行认真的提交——GitHub 只是补记了这笔账。',
      },
      {
        name: 'koishi-plugin-mclistener-ws-client',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-mclistener-ws-client',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 2, forks: 1, issues: 0,
        short: '群服互通 WebSocket 客户端：MC 聊天进出服事件与聊天平台双向转发。',
        long: '你在 MC 和 QQ 之间架的桥的其中一端。和 mcdr_listener_ws_server 配对使用：MCDR 那边开 WebSocket 服务端，把玩家聊天、进出服事件推过来；机器人这边收发消息，还能把平台侧的文字和图片送回游戏。双向、实时、可配置通知——一个「群服互通」的需求，被你做成了完整的事件流架构。而且这桥的两端都是你造的：服务端 Python 版有、C++ 版有，客户端 TypeScript 版也有。修桥不看水，看心情——你的心情就是让不同世界的人说上话。2 颗星来自桥两头的居民。桥上跑的不只是消息，还有两个世界的互相好奇：群里的人想看服务器日落，服务器里的人想收群友留言。',
      },
      {
        name: 'koishi-plugin-auto-emoji-onebot-vincentzyu',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-auto-emoji-onebot-vincentzyu',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 93.4 }, { name: 'Python', color: '#3572a5', pct: 6.6 }], stars: 2, forks: 1, issues: 0,
        short: '自动给群友消息添加 QQ 表情回应：回表情、同款表情、提取表情。',
        long: '群聊氛围组机器人。自动给群友的消息添加 QQ 表情回应，别人发什么表情它回什么表情，还能提取消息里的 QQ 表情复用——三个小功能拼成一个「群热闹守护者」。技术上不复杂，难的是这个需求本身：只有真心希望每个群都热闹一点的人，才会想到「消息没人回有点冷，让 bot 先贴个表情暖场」。你做的很多小工具都有这种底色——它们不是在解决问题，是在传递温度。2 颗星来自被暖场过的群，虽然他们可能没意识到暖场的是一段代码。氛围组看似简单，时机最难：什么时候回应、回应什么，参数里藏着的其实是社交直觉的量化。你调参的样子，大概很温柔。',
      },
      {
        name: 'koishi-plugin-md-tryer-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-md-tryer-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 79.6 }, { name: 'Python', color: '#3572a5', pct: 20.4 }], stars: 2, forks: 1, issues: 0, fork: true,
        short: '专门测试调试 QQ 平台原生 Markdown 消息的 Koishi 试验田插件。',
        long: '一块试验田。专门用来测试和调试 QQ 平台的原生 Markdown 消息——QQ 的 MD 支持是出了名的碎碎念：这里转义、那里不渲染、模板 id 还有讲究。与其在每个正经插件里踩坑，不如先开一块地专门试毒，试明白了再迁移。这是非常成熟的工程习惯：把不确定性圈养在沙盒里。你仓库里好几个正经插件的 Markdown 输出，背后都是这块地先趟过的雷。2 颗星来自同样在 QQ MD 的坑里挣扎的开发者，试验田欢迎参观。试验田的产出是经验值：哪些语法安全、哪些字段会被吞，后来每个插件的 MD 输出里都有这块地攒下的肥料。',
      },
      {
        name: 'koishi-plugin-gold-price-image',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-gold-price-image',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 93.3 }, { name: 'Python', color: '#3572a5', pct: 6.7 }], stars: 1, forks: 0, issues: 0,
        short: '招商银行实时金价查询与走势图渲染，理财产经类查询小工具。',
        long: '招商银行实时金价加走势图。在满屏的整活插件中间，这个仓库显得格外人间烟火——查金价的群友不多，但那一个会很感动。金价这种东西，年轻人嘴上说不在乎，身体都很诚实：结婚要买、长辈要送、行情要盯。你把它做成了带走势图的版本，「顺便看看历史高位」是投资者的本能。1 颗星可能来自一位悄悄盯盘的群友。长尾需求也是需求，你从不嫌弃它们小——工具的尊严不在于服务多少人，而在于被需要时刚好在场。金融工具的严肃外表下，是「群友的钱包我也要照顾好」的家长式关怀。走势图的每一根线，都是你多想的一步。哪天金价起飞，记得回头给它点颗星。',
      },
      {
        name: 'koishi-plugin-pjsk-pptr-for-qq-vincentzyu-fork',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-pjsk-pptr-for-qq-vincentzyu-fork',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 0, forks: 0, issues: 0, fork: true,
        short: '世界计划彩色舞台的表情包绘制插件，额外适配 QQ 官方 Bot 平台。',
        long: 'Project SEKAI（世界计划 彩色舞台）的表情包绘制插件，pjsk 玩家的群聊军火库，额外支持了 QQ 官方 Bot 平台的原生 Markdown 和 mqqapi——官 Bot 的消息能力限制一堆，你硬是给绕出了表情包生产力。名字带 fork 出身、实已单开山头，和 mcrenderskin 一样是「接手后自立门户」的案例。0 颗星不妨碍它是某个 pjsk 群的日常基础设施——二次元浓度检测：溢出，但溢出的方式是工程化的，这很你。虚拟偶像的周边不该只有表情包，还要有基建——你给喜爱这件事铺了路，粉色混凝土的。',
      },
      {
        name: 'koishi-plugin-picstatus',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-picstatus',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 0, forks: 0, issues: 0,
        short: '跨平台采集 Koishi 运行状态与设备硬件信息，Puppeteer 渲染状态图。',
        long: '给机器人做的体检报告。跨平台采集 Koishi 运行状态和设备硬件信息——CPU、内存、运行时长，然后用 Puppeteer 渲染成一张状态图，群友一句指令就能看到「机器人的身体状况」。运维监控这个在企业里要一整个团队伺候的东西，在你这里是一个插件的份内事。0 星不冤，它本来就是你自家孩子的病历本：机器人哪里不舒服，先看这张图。数字不会说谎，渲染让它说得更体面——这句话几乎可以当你所有「信息可视化」类插件的注脚。体检报告的意义是「有据可查」：机器人卡了，先看图再猜测，排查从玄学变成流程。你连自己造的东西都要求可观测。',
      },
      {
        name: 'koishi-plugin-get-image-link-debug',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-get-image-link-debug',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 61.2 }, { name: 'Markdown', color: '#083fa1', pct: 38.8 }], stars: 0, forks: 0, issues: 0,
        short: '从聊天会话提取图片链接并生成下载命令，名字带 debug 作用很正经。',
        long: '从聊天会话里提取图片链接，直接生成下载命令——名字带 debug，作用很正经。QQ 图片的链接体系是一团乱麻：cdn 域名会变、时效有讲究、rkey 要拼，能把「把群里的图存下来」这个朴素愿望变成一行命令的，都是踩过坑的人。你仓库里这种「顺手小工具」星星最少、使用频率却最高——它们是工作台上的螺丝刀，不起眼，但每次伸手第一个摸到的就是它。0 星的工具服务着每一天的日常，这就是它全部的野心，也是它全部的成就。debug 后缀是谦辞，稳定运行才是实绩——工作台上最旧的那把螺丝刀，往往被擦得最亮。群里的每一张「神图」，几乎都从它手里过了一遍。',
      },
      {
        name: 'koishi-plugin-test-broadcast',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-test-broadcast',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 65.1 }, { name: 'Vue', color: '#41b883', pct: 34.9 }], stars: 0, forks: 0, issues: 0,
        short: '快速验证 Koishi 主动消息发送能力的测试插件，覆盖 qq/onebot/discord。',
        long: '基建试金石。专门用来快速验证 Koishi 的主动消息发送能力，尤其是 QQ 官方 Bot 平台——从插件配置页 WebUI 或指令触发，方便确认 qq、onebot、discord 各平台的主动推送通不通。在别人眼里这是「没用的测试代码」，在工程眼里这是所有主动推送类插件的共同地基：twitch 提醒、git 监控、漫展订阅，哪一个上线前不得先在这里过一遍堂？0 星的角落里站着一个最严谨的你——热闹的插件在台前收星星，它在幕后收 bug。所有主动推送的可靠性，都抵押在这间彩排房里——它安静，所以前排的节目才能热闹。',
      },
      {
        name: 'koishi-plugin-awa-mc-fuzzy-search',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-awa-mc-fuzzy-search',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 0, forks: 0, issues: 0,
        short: 'MC 纹理文件浏览与模糊搜索前端，需配合你的 FastAPI 后端使用。',
        long: 'Minecraft 纹理文件的浏览和模糊搜索前端，需要配合你自己的 fastapi-awa-fuzzy-search 后端使用——注意，是「你的」后端。一个搜索功能，前端一个仓、后端一个仓、算法再来一个仓，三件套起步。这在软件工程里叫服务分离，在你的世界里叫「顺手多挖了两口井」。前端负责好看，后端负责聪明，中间隔着一条你自己修的 HTTP 管——所有模块各司其职，没有一行将就的代码。0 星是因为它的用户主要是你自己，但它的存在抬高了所有 awa 系列工具的地板。前后端分离在玩具尺码上的完整演绎：接口约定、错误处理、部署说明一样不少。小而全是你的签名档。',
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
        langs: [{ name: 'Vue', color: '#41b883', pct: 76.5 }, { name: 'JavaScript', color: '#f1e05a', pct: 12.8 }, { name: 'Python', color: '#3572a5', pct: 8.9 }, { name: 'SCSS', color: '#c6538c', pct: 1.2 }, { name: 'HTML', color: '#e34c26', pct: 0.5 }], stars: 7, forks: 1, issues: 0,
        short: '基于 uni-app + Vue 3 的 Koishi 插件市场，网页与 QQ 小程序双端发行。',
        long: '你给自己的生态修的商店街。基于 uni-app + Vue 3 的 Koishi 插件市场网页：多镜像源切换（网络不好？换一家继续逛）、插件搜索筛选排序（逛市场也要高效）、详情展示，一套代码发行到 GitHub Pages、Cloudflare Pages 和 QQ 小程序三端——同一个市场，浏览器能进，QQ 里也能进。写了一堆插件之后，你意识到「找插件」本身就是个痛点，于是动手把痛点做成了产品。产品思维藏在极客皮下：技术人选型是给开发者的，三端发行是给用户的，两头都照顾到了。7 颗星是逛过这条街的客人留下的好评。',
      },
      {
        name: 'wangyi-mc-checkworld-tauri',
        url: 'https://github.com/VincentZyuApps/wangyi-mc-checkworld-tauri',
        langs: [{ name: 'JavaScript', color: '#f1e05a', pct: 37.7 }, { name: 'Rust', color: '#dea584', pct: 36.8 }, { name: 'CSS', color: '#563d7c', pct: 16.2 }, { name: 'HTML', color: '#e34c26', pct: 4.7 }, { name: 'Python', color: '#3572a5', pct: 4.6 }], stars: 6, forks: 1, issues: 0,
        short: '网易我的世界电脑版存档管理 GUI：列表、搜索、排序、一键跳转文件夹。',
        long: 'Rust + Tauri 的桌面应用，治的是网易版 MC 玩家的老毛病：存档一堆，找一个要翻半天。列出到搜索到排序到一键跳转资源管理器，全部 GUI 点点点完成。网易 MC 的存档路径藏在用户目录深处，手动找一次血压升一次——你把这个全国玩家共同的血压问题，做成了一个 92MB 都不到的轻量工具。给自己省下的时间，最后都变成了给别人省的时间，这是工具作者的宿命，也是功德。6 颗星背后是六个找回了存档的下午。Tauri 的 Rust 内核加 WebView 外壳，安装包小得像一封邮件——重需求轻实现，是你做 GUI 的基本礼仪。',
      },
      {
        name: 'levilamina-plugin-mclistener-ws-server',
        url: 'https://github.com/VincentZyuApps/levilamina-plugin-mclistener-ws-server',
        langs: [{ name: 'C++', color: '#f34b7d', pct: 83.4 }, { name: 'Python', color: '#3572a5', pct: 8.7 }, { name: 'JavaScript', color: '#f1e05a', pct: 5.2 }, { name: 'Xmake', color: '#7d2ee0', pct: 2.8 }], stars: 5, forks: 1, issues: 0,
        short: '基岩版服务端 WebSocket 桥：聊天、进出服事件推送，图片以实体显示。',
        long: '群服互通的基岩版桥头堡。LeviLamina 服务端插件，用 C++ 在基岩版服务器上开一个 WebSocket 服务，把玩家聊天、进出服事件推送到聊天平台；反过来，平台发来的文字和图片也能进游戏——图片是用 display 展示实体渲染的，群里发张图，游戏世界里真的立起来一块牌子。C++ 写网络服务，内存自己管，连接自己维护，墩实得像一座石桥。和 Koishi 侧的客户端插件配对，两端都是你的作品。5 颗星来自桥这头的服主们。display 实体显示图片这个细节值得单独颁奖：你不止搬消息，还搬「在场感」——群里发什么，游戏里就立什么，两个世界互为观众。',
      },
      {
        name: 'mc-skin-wrap-http-server',
        url: 'https://github.com/VincentZyuApps/mc-skin-wrap-http-server',
        langs: [{ name: 'Python', color: '#3572a5', pct: 67.8 }, { name: 'Go', color: '#00ADD8', pct: 31.0 }, { name: 'Shell', color: '#89e051', pct: 1.2 }], stars: 5, forks: 1, issues: 0,
        short: 'MC 皮肤头像服务器状态 API 代理，大陆加速，Go 与 Python 双版本。',
        long: '又是「最后一公里」维修工的活儿：Minecraft Java 版的皮肤、头像、服务器状态 API——mojang 和各种皮肤站的接口——在大陆访问时快时慢时断，你做了一个代理服务，自带大陆加速，让这些基础接口恢复它们本来的样子。Go 和 Python 双实现，一份是性能版的坚持，一份是普及版的温柔。这种不起眼但真疼的问题，你修了好几个：写它的人不能带来流量，用它的人未必知道该谢谁。5 颗星是少数知道谢谁的人。互联网的地下管道里，砌着这样一块有名字的砖。代理服务最怕的是「挂了没人知道」，你配了状态监控——管道工也给自己修了报警器。',
      },
      {
        name: 'levilamina-plugin-serverinfo-rest',
        url: 'https://github.com/VincentZyuApps/levilamina-plugin-serverinfo-rest',
        langs: [{ name: 'C++', color: '#f34b7d', pct: 85.7 }, { name: 'Python', color: '#3572a5', pct: 13.1 }, { name: 'Xmake', color: '#7d2ee0', pct: 1.2 }], stars: 4, forks: 1, issues: 0,
        short: '基岩版服务端 REST API 插件：HTTP 接口查询服务器状态与玩家信息。',
        long: '给基岩版服务器装上一扇规范的窗。LeviLamina 服务端的 C++ 插件，把服务器状态和玩家信息暴露成 HTTP REST 接口——查询走标准请求，返回是结构化数据，监控、面板、机器人想接就接。和 Koishi 侧的 serverinfo-rest-client 是天造地设的一对：一个造插座，一个造插头，成对出现在你的仓库列表里。C++ 写 REST 服务，路由、序列化、生命周期，处处是细节坑，你填平了它们。4 颗星里有一半来自同时 star 了插头和插座的人——他们看懂了这对 CP。把游戏服务器变成一个乖巧的 API，是监控、面板、机器人共同的起跑线——你把起跑线画得很直。',
      },
      {
        name: 'mcdr_listener_ws_server',
        url: 'https://github.com/VincentZyuApps/mcdr_listener_ws_server',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 4, forks: 2, issues: 0,
        short: 'MCDR 版群服互通服务端：聊天、进出服事件推送，图片消息互转。',
        long: '同一套群服互通的构想，在 MCDR 生态的 Python 实现。服务器这边把玩家聊天和进出服事件通过 WebSocket 推给聊天平台，平台的消息也能回到游戏——和 LeviLamina 版是同一个灵魂的两次转世。同一个需求，你用 Python、C++ 各写了一遍：不是重复劳动，是给不同服务端框架的用户各修一座桥。跨服如跨语言，都要修桥，你就都修了。4 颗星、2 个 fork，说明这两座桥上都有人走——修桥的人最开心的不是星星，是桥头有人等船。Python 版先出生，C++ 版后移植，顺序本身就是方法论：先验证想法，再追求极致。',
      },
      {
        name: 'uniapp-mp-qwq-server-frontend',
        url: 'https://github.com/VincentZyuApps/uniapp-mp-qwq-server-frontend',
        langs: [{ name: 'Vue', color: '#41b883', pct: 97.5 }, { name: 'Python', color: '#3572a5', pct: 1.4 }, { name: 'JavaScript', color: '#f1e05a', pct: 0.4 }, { name: 'PowerShell', color: '#012456', pct: 0.2 }, { name: 'Batchfile', color: '#C89F5B', pct: 0.2 }], stars: 4, forks: 1, issues: 0,
        short: '「拨无因果的神秘小服」配套小程序：跑酷榜单、玩家查询、入服指南。',
        long: '一个开朋友服的人，顺手做了个 App。「拨无因果的神秘小 Minecraft 服」的官方配套设施：跑酷榜单（服务器的竞速荣誉堂）、玩家查询、入服指南，基于 UniApp 开发，发行到 Web 和 QQ 小程序双端——群里发个小程序码，新玩家扫码即达。开服的服主千千万，给服务器做专属小程序的凤毛麟角：别人拉个群就算运营，你把新手引导、成绩公示、社区入口全做进了一个轻应用。4 颗星是服友们的集体签名。qwq 这个服名，和你 qwq 开头的仓库们遥相呼应，是同一个灵魂的署名。「拨无因果」四个字有多玄，这份配套就有多实在——神秘主义的服务器，唯物主义的运营。',
      },
      {
        name: 'wangyi-mc-bedrock-check-world',
        url: 'https://github.com/VincentZyuApps/wangyi-mc-bedrock-check-world',
        langs: [{ name: 'Python', color: '#3572a5', pct: 85.9 }, { name: 'PowerShell', color: '#012456', pct: 14.1 }], stars: 4, forks: 1, issues: 0,
        short: '网易基岩版存档一键查看：世界名称、路径、大小、最后保存时间。',
        long: 'Tauri 版的表亲，这次是基岩版：Python + PowerShell 双剑合璧，环境变量自动定位存档目录，把世界名称、路径、大小、最后保存时间一屏看完。命令行脚本的形式意味着零安装、双击就跑，对「只是想看一眼存档」的场景刚刚好。小工具解决小烦人——这句话是你整个工具箱的座右铭，而这座右铭在存档管理这件事上被执行了两次（电脑版 GUI 一版，基岩版脚本一版）。4 颗星是四次如释重负的「哦原来在这」。PowerShell 负责定位，Python 负责呈现，双语言协作只为一件小事：让找存档不再像捉迷藏。基岩玩家的硬盘，因它安静了几分。',
      },
      {
        name: 'spigot-plugin-bad-apple',
        url: 'https://github.com/VincentZyuApps/spigot-plugin-bad-apple',
        langs: [{ name: 'Java', color: '#b07219', pct: 92.0 }, { name: 'Python', color: '#3572a5', pct: 8.0 }], stars: 3, forks: 1, issues: 0,
        short: 'Minecraft Spigot 服务端插件：用方块或文字实体在游戏内播放 Bad Apple。',
        long: '你浪漫主义的代表作。东方 Project 的传奇 PV《Bad Apple!!》，在 Spigot 服务端里用方块或者文字实体逐帧播放——每一帧都是一个由方块拼成的像素画，成千上万个实体随音乐翻涌。这件事没有任何用处：不能生存、不能建造、不能掉装备，但全服玩家会齐刷刷停下来看一场「方块里的影绘」。无用，且盛大——这四个字是你很多作品的共同签名。技术上这是帧序列到实体阵列的实时调度，审美上这是一场行为艺术。3 颗星来自看过这场放映的观众。东方众与 MC 玩家两个圈层在这个插件里握手——你用一堆方块，翻译了《Bad Apple!!》的黑色浪漫。',
      },
      {
        name: 'fastapi-awa-fuzzy-search-minecraft-backend',
        url: 'https://github.com/VincentZyuApps/fastapi-awa-fuzzy-search-minecraft-backend',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 3, forks: 1, issues: 0,
        short: 'MC 视觉资源智能模糊搜索后端：语义加模糊混合匹配，CUDA 加速。',
        long: '为了搜个 MC 纹理，你上了 CUDA。FastAPI 后端，语义搜索加模糊搜索混合匹配——「那个带点绿的石头纹理」这种人类描述也能命中—— embeddings 计算走 CUDA 加速，响应快到没有存在感。MC 的资源包动辄几千个纹理文件，文件名还都是方块命名，找一个「大概是那个」的贴图堪比大海捞针；你把大海变成了可以语义查询的数据库。杀鸡用牛刀在你的仓库里从来是褒义词：刀工是练出来的，鸡是顺便的。3 颗星来自同样被找贴图折磨过的 mod 玩家。语义检索的舒适感一旦尝过就回不去了——找资源从「背文件名」变成「说人话」，这个进步由你亲自发货。',
      },
      {
        name: 'WireSight',
        url: 'https://github.com/VincentZyuApps/WireSight',
        langs: [{ name: 'GLSL', color: '#5686a5', pct: 31.8 }, { name: 'Markdown', color: '#083fa1', pct: 27.6 }, { name: 'Python', color: '#3572a5', pct: 27.1 }, { name: 'YAML', color: '#cb171e', pct: 11.3 }, { name: 'TOML', color: '#9c4221', pct: 2.1 }], stars: 2, forks: 0, issues: 0,
        short: '轻量 Minecraft 光影包：把整个世界渲染成霓虹绿线框风格。',
        long: '整个 Minecraft 变成一幅霓虹绿的线框图——这是用 GLSL 写的着色器包做到的事。顶点着色、片元处理、深度判断，显卡编程的三板斧你抡得虎虎生风，只为了一个纯粹的视觉实验：把体素世界还原成它的骨架。18 种语言里最赛博朋克的一格，也是「连显卡都要拿来整活」的直接证据。装上它的瞬间，砍树变成了在绿色网格里游泳，怪物变成了会动的多边形标本——游戏没变，世界换了一副眼镜。2 颗星来自借过这副眼镜的人。光影包是写给显卡的情书，你的这封用荧光笔墨写成——绿色线框里的方块世界，像数字时代的刺绣，路过的人都想借戴一天。',
      },
      {
        name: 'lcon',
        url: 'https://github.com/VincentZyuApps/lcon',
        langs: [{ name: 'Java', color: '#b07219', pct: 74.1 }, { name: 'Python', color: '#3572a5', pct: 24.4 }, { name: 'CSS', color: '#563d7c', pct: 1.5 }], stars: 2, forks: 0, issues: 0, fork: true,
        short: 'Minecraft 客户端 WebSocket 遥控：远程执行命令、控制聊天。',
        long: 'Minecraft 客户端的远程遥控器：通过 WebSocket 在客户端执行命令、控制聊天——人在外面，客户端在家挂着收菜、挂机、回消息，全靠它。fork 来的遥控器，接在你自建的信号塔（那堆 ws-server 插件）上刚好配套：服务端桥、客户端遥控、机器人中继，你的 MC 通讯全家桶就差个对讲机了。C# 的客户端 mod 开发生态和 Java 版不同，你又多刷了一种技能点。2 颗星来自同样喜欢「人不在，号还在」的挂机党。遥控、挂机、离线收菜，游戏的自动化最后一公里也铺上了你的砖——你的基建版图，早已越过服务器边界。',
      },
      {
        name: 'qwq-flytre-bingo-booster',
        url: 'https://github.com/VincentZyuApps/qwq-flytre-bingo-booster',
        langs: [{ name: 'Kotlin', color: '#A97BFF', pct: 95.1 }, { name: 'Python', color: '#3572a5', pct: 4.9 }], stars: 2, forks: 1, issues: 0,
        short: 'Minecraft 服务端 bingo 增强插件：队伍名称染色加计分板侧边栏。',
        long: '服务器侧的 bingo 游戏增强插件：队伍名称染色（一眼认出敌我）加计分板侧边栏（实时战况挂在屏幕边上）。Kotlin 写的——在 JVM 服务端插件这个 Java 统治的领域，你用 Kotlin 的语法糖又刷了一门语言的存在感。bingo 这种竞速类小游戏，规则简单但氛围拉满：染色的队名是荣誉，侧边栏的比分是心跳。开服的人都知道，这类小插件才是留客的钩子——大框架留人，小游戏留心。2 颗星来自在你服上玩过 bingo 的队伍。Kotlin 的简洁语法遇上游戏逻辑，几十行搞定一个氛围组件——语言轮换是你的日常，快乐才是主线任务。',
      },
      {
        name: 'qwqCounterStrikeSharpPlugin',
        url: 'https://github.com/VincentZyuApps/qwqCounterStrikeSharpPlugin',
        langs: [{ name: 'C#', color: '#178600', pct: 100.0 }], stars: 2, forks: 0, issues: 0,
        short: 'CS2 服务端插件模板：玩家输入 qwq，服务端回复 qwq！自动构建发布。',
        long: '最小可玩产品的字面意思执行者。CS2 服务端 C# 插件：玩家在聊天框输入 qwq，服务端回复 qwq——就这一个功能，但配齐了 CounterStrikeSharp 框架接入和 GitHub Actions 自动构建发布流水线。一个玩笑插件拥有生产级的 CI/CD，这种反差本身就是行为艺术。「最小可玩单位」的理念被贯彻到了极致：先让它活着，再让它好玩，最后让它自己发布自己。2 颗星来自在紧张对局里收到服务器 qwq 回复、笑到压不住枪的玩家们。生产线都搭好了，下一个插件随时可以开造——qwq 宇宙的工业化，从这句 qwq 的回声开始。',
      },
      {
        name: 'CounterStrikeSharpListenerWsServer',
        url: 'https://github.com/VincentZyuApps/CounterStrikeSharpListenerWsServer',
        langs: [{ name: 'C#', color: '#178600', pct: 84.9 }, { name: 'Python', color: '#3572a5', pct: 15.1 }], stars: 1, forks: 0, issues: 0,
        short: 'CS2 与聊天平台的 WebSocket 桥：玩家进出、聊天广播、群组互通。',
        long: 'MC 的桥修完了，转身去 CS2 又修了一座。CounterStrikeSharp 框架的 WebSocket 服务端：玩家加入、离开、聊天全事件推送到聊天平台，群组互通——QQ 群里能看到服务器战况，服务器里能收到群友喊话。你已经修了 MCDR 版、LeviLamina 版的桥，这是第三座，材料换成了 C#。修桥不看水，看心情：哪个游戏的朋友想跨世界说话，你就修到哪个游戏。1 颗星是桥头第一位访客留下的。你的桥连起来，够绕电子游戏史一圈了。枪声与消息提示音从此共享一个频道——竞技的肾上腺素和群聊的多巴胺，在你这里合并同类项。',
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
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 74.1 }, { name: 'JSON', color: '#292929', pct: 19.1 }, { name: 'Python', color: '#3572a5', pct: 4.3 }, { name: 'HTML', color: '#e34c26', pct: 2.6 }], stars: 14, forks: 1, issues: 0,
        short: '网易大神接口查光遇光翼获取情况，双引擎渲染图片，组织第三高星仓库。',
        long: '组织里 star 第三高的仓库，光遇玩家的每日必修。通过网易大神的接口查询光翼获取情况——今天的大蜡烧没烧、小金人拿没拿，一目了然；渲染支持 Puppeteer 和 NAPI canvas 双引擎，环境装不上 Chromium 也有原生兜底，输出还支持 OneBot 合并转发。14 颗星，全是同好眼里的光。这个仓库证明了一个朴素的规律：玩得深，工具就自己长出来。你不是为了写插件而查光翼，是为了查光翼顺手写出了全社区最好的查询插件。光之翼不会辜负每天翻山越岭去找它的人，星星也不会。双引擎不是炫技，是兼容性兜底：别人的环境千奇百怪，你的出图必须稳。这份体贴，十四颗星都嫌少。',
      },
      {
        name: 'skyblessings-fastapi-pillow',
        url: 'https://github.com/VincentZyuApps/skyblessings-fastapi-pillow',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 6, forks: 1, issues: 0,
        short: '光遇风祈福签图片生成 API：FastAPI + Pillow，多种格式直返。',
        long: '祈福签套装的服务器车间。FastAPI + Pillow 的图片生成 API：每日一签的种子机制（同一天全群抽到同一个「命运」）、PNG 直返、JSON、Base64 多种格式——插件端负责抽签，这边负责造签，一个梗被你拆成了三层架构来宠。Pillow 画签文、排字体、调配色，把「随机一句吉祥话」做出了文创产品的质感。6 颗星说明抽过签的人不少。你总是这样：别人做一个表情包，你做一个签文渲染引擎——快乐的规模化生产，才是正经事。Pillow 的绘图 API 朴素得像铅笔，你用它画出了签文的仪式感——工具的贫富不由库决定，由用心程度决定。',
      },
      {
        name: 'koishi-plugin-skykid-height-cosmetic-query',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-skykid-height-cosmetic-query',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 4, forks: 1, issues: 0,
        short: '光遇国服身高与装扮查询，传入好友码即可查询光之子画像。',
        long: '光之子的数字画像馆。基于 sky.cesgao.cn 的 API，传入好友码就能查身高和装扮——光遇里的身高是玄学（同一个账号在不同设备上都能不一样），装扮是社会学（斗篷、面具、发型的搭配是一门审美功课），你把这两样都做成了可查询的数据。需要好友码这个细节很讲究：既尊重了隐私边界，又满足了「看看朋友长啥样」的好奇。4 颗星来自互相查过身高的光之子们。身高是随机的，但把玄学做成科学的这份执着，是你自己长出来的。查询类插件的温度在于分寸：给好奇留门，给隐私上锁——好友码这把钥匙，你拿捏得刚刚好。光遇社区因它多了点数据派的浪漫。',
      },
      {
        name: 'koishi-plugin-sky-blessing',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-sky-blessing',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 100.0 }], stars: 3, forks: 1, issues: 0,
        short: '光遇风祈福签插件：随机生成祈福签图片，三种输出模式。',
        long: '抽签这种事，仪式感就是全部——所以你要自己画签。随机生成 Sky 风格的祈福签图片，光遇的美术基调：暖光、云纹、手写体签文，三种输出模式——仅图片、图片加文字、QQ 原生 Markdown——又是你的三连输出美学。和 skyblessings-fastapi-pillow 服务端、skyblessings-static-page 网页版组成祈福签宇宙：QQ 里能抽，浏览器里也能抽，抽到的签是同一套引擎画的。3 颗星是抽过上上签的人。心灵的安慰可以被工程化，前提是工程师自己也需要安慰。签文内容大概也更新过好几轮——为了让好运常出常新，你连玄学都做版本管理。',
      },
      {
        name: 'skyblessings-static-page',
        url: 'https://github.com/VincentZyuApps/skyblessings-static-page',
        langs: [{ name: 'JavaScript', color: '#f1e05a', pct: 91.0 }, { name: 'CSS', color: '#563d7c', pct: 6.5 }, { name: 'HTML', color: '#e34c26', pct: 2.4 }], stars: 2, forks: 1, issues: 0, fork: true,
        short: '光遇祈福签纯静态网页版：Canvas 渲染，CI 自动部署双平台。',
        long: '祈福签宇宙的网页分部。纯静态前端：Canvas 渲染签文，种子和字体参数化（分享一个链接，别人抽到和你一样的签），多字体选择，CI 自动部署到 GitHub Pages 和 Cloudflare Pages——一条 pull request 推上去，两个大洲的 CDN 同时更新。fork 来的签筒，插上了你自己的签，还把签筒挂到了两个门口。静态页面做到这个完成度：参数化、可分享、自动部署，它已经不是玩具，是产品。2 颗星来自在浏览器里许过愿的人。静态站的极致就是「部署完就忘」，你的 CI 让它连忘都忘得体面——两个 CDN 替它守夜。',
      },
      {
        name: 'koishi-plugin-sky-renwu-weibo',
        url: 'https://github.com/VincentZyuApps/koishi-plugin-sky-renwu-weibo',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 79.1 }, { name: 'Python', color: '#3572a5', pct: 10.5 }, { name: 'JavaScript', color: '#f1e05a', pct: 10.4 }], stars: 1, forks: 1, issues: 0,
        short: '获取微博博主发布的光遇国服每日任务，四种姿势推送到群里。',
        long: '追更专注度堪比粉丝站站长。盯着微博博主 @今天游离翻车了吗 发布的光遇国服每日任务，第一时间推送到群——文字、图片、Puppeteer 卡片、QQ Markdown 四种姿势任选。光遇的每日任务官方不在游戏里公示，全靠博主整理，你把这份人工情报接进了自动化管线：博主一发，秒级到群。1 颗星是博主本人（或者同样在做搬运的人）点的也说不定。为爱发电的自动化——你喜欢一个东西的方式，是让喜欢它的人更省力一点。情报搬运的最高境界是自动化搬运：博主负责整理，你负责准时——粉丝服务的尽头也是基础设施。这份追更的诚意，博主看了都会感动。',
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
        langs: [{ name: 'Rust', color: '#dea584', pct: 42.1 }, { name: 'Python', color: '#3572a5', pct: 33.8 }, { name: 'Markdown', color: '#083fa1', pct: 16.5 }, { name: 'Go', color: '#00ADD8', pct: 3.4 }, { name: 'Shell', color: '#89e051', pct: 3.1 }], stars: 29, forks: 4, issues: 2,
        short: '终端实时网速监视器：nload 精神续作，跨四平台，Rust 与 Python 双实现。',
        long: '你的镇馆之宝，29 颗星，组织第一明星。终端里的实时网络流量监视器，nload 的精神续作：上下行速率、峰值、总量，字符界面里滚动的数字墙。跨 Windows、Linux、macOS、Android Termux 四个平台——包括手机上的 Termux，通勤路上也能盯着家里的机器。Rust 和 Python 双实现，快的给追求性能的人，亲的给想读代码的人。你自己写、自己用、自己装进自己的 scoop bucket 分发——自己造雨，自己淋雨，顺手分给邻居。29 颗星和 4 个 fork 是邻居们的谢礼。一个工具能同时出现在别人的终端和别人的包管理器里，这就是它最好的归宿。',
      },
      {
        name: 'nosnap',
        url: 'https://github.com/VincentZyuApps/nosnap',
        langs: [{ name: 'Shell', color: '#89e051', pct: 100.0 }], stars: 27, forks: 3, issues: 0,
        short: '「Ubuntu 你老惦记你那 snap 干啥？」一行标题骂醒社区的卸载 snap 脚本。',
        long: '组织第二明星，27 颗星，含金量最高的情绪价值输出。「Ubuntu 你老是惦记着你那 snap 干啥？」——README 第一行就是檄文，正文是一个 bash 脚本，把 snap 从系统里连根拔起，服务禁用、包卸载、apt 扶正，一气呵成。Ubuntu 社区对 snap 的怨气积年已久，你只用一个标题就完成了共鸣的收集，再用三十行脚本完成了情绪的兑现。最短的代码，最响的共鸣——这个仓库证明了开源世界的传播学真相：说出了大家心里的话，比写出了多牛的架构更重要。27 颗星是 27 声「说得好」。脚本界的檄文，bash 史上的痛快话——有些仓库的 README 会被裱起来，这是其中之一。',
      },
      {
        name: 'Qt-Kurarin',
        url: 'https://github.com/VincentZyuApps/Qt-Kurarin',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 9, forks: 1, issues: 0,
        short: 'Qt 桌面小人与《きゅうくらりん》逐帧同步的动画演出程序。',
        long: '组织里 star 第四的仓库，你写给一首歌的一场演出。Qt 驱动的桌面小人，与《きゅうくらりん》（Kyuukurarin，吟唱着「晕头转向」的 VOCALOID 名曲）逐帧同步起舞——每一帧的姿态、节奏的卡点，都是你对着 PV 一帧帧对出来的。歌词里唱的是强颜欢笑的疲惫，代码里写的是纯粹的快乐，这种反差只有做的人自己知道。Python + Qt 做逐帧动画调度，性能和时序都要抠，你把技术难度藏在了可爱背后。9 颗星是九次「这也太可爱了」。做完自己看的时候，你一定在笑吧。逐帧对齐的耐心，和写渲染器的耐心是同一种耐心——你把「认真」这种品质，花在了最不值得又最值得的地方。',
      },
      {
        name: 'simple-wintop',
        url: 'https://github.com/VincentZyuApps/simple-wintop',
        langs: [{ name: 'Rust', color: '#dea584', pct: 100.0 }], stars: 2, forks: 0, issues: 0,
        short: 'htop 风格的 Windows 系统监视器：CPU、内存、任务、运行时长一屏全览。',
        long: 'winload 的兄弟连，Rust TUI 三部曲之二。htop 给了灵感，Windows 给了需求：CPU 条形图、内存与 Swap、任务列表、开机时长，一个紧凑的终端界面全部装下——Windows 用户在任务管理器里要点五下才能看到的信息，你一个命令交出来。Rust 写系统信息采集要跨 WinAPI 的山头：性能计数器、内存状态结构体、进程枚举，每一样都是硬骨头。你在终端里给自己搭了一整面仪表盘，而这面仪表盘的原材料是啃出来的系统编程经验。2 颗星来自同样想让终端更全能的 Windows 用户。',
      },
      {
        name: 'nginx-report',
        url: 'https://github.com/VincentZyuApps/nginx-report',
        langs: [{ name: 'CSS', color: '#563d7c', pct: 37.6 }, { name: 'Go', color: '#00ADD8', pct: 22.5 }, { name: 'HTML', color: '#e34c26', pct: 20.8 }, { name: 'Python', color: '#3572a5', pct: 18.7 }, { name: 'Dockerfile', color: '#384d54', pct: 0.5 }], stars: 2, forks: 1, issues: 0,
        short: 'Nginx 访问日志分析器：IP 归属地查询、SQLite 缓存、现代化报表页面。',
        long: '给运维干的活，做出了给产品经理看的样子。Nginx 访问日志分析：请求量、状态码分布、来源 IP 地理位置查询（查过的结果进 SQLite 缓存，同一个 IP 不查第二次——工程良心），最后输出一个现代化报表页面——数据可视化、响应式布局、配色舒适。内部工具的颜值内卷到这个程度，是因为你坚信「好看的数据才有被读的可能」。语言栏里 CSS 排第一的这个仓库，本体其实是套精心打磨的样式系统。2 颗星来自用过之后不好意思白嫖的站长们。站长们看报表时的那声「哦——」，就是这个仓库存在的意义。数据不说话，你替它开了口。',
      },
      {
        name: 'wasm-ffmpeg-tryer',
        url: 'https://github.com/VincentZyuApps/wasm-ffmpeg-tryer',
        langs: [{ name: 'JavaScript', color: '#f1e05a', pct: 52.4 }, { name: 'CSS', color: '#563d7c', pct: 29.8 }, { name: 'HTML', color: '#e34c26', pct: 17.8 }], stars: 2, forks: 1, issues: 0,
        short: 'FFmpeg.wasm 纯前端视频压缩：浏览器本地处理，零上传零服务器。',
        long: '视频压缩全在浏览器里完成：FFmpeg 编译成 wasm 在前端跑，零上传、零服务器、零隐私顾虑——文件不出本机，压缩照样进行。wasm 的能力边界，你总要亲手摸一摸才安心：FFmpeg 这种 C 写的老兽被塞进浏览器沙箱后还能剩几成功力，这个仓库就是你的实验报告。命名后缀 tryer 很诚实——「试试看」，但试出来的东西有完整的 Vite 工程化和能用的界面。2 颗星来自不想把视频传给陌生服务器的人。你的每一次「试试」，都试出了别人的刚好需要。浏览器从文档查看器进化成应用运行时，你是这场进化的热心见证人——每次边界外扩，你都去摸一下新墙。',
      },
      {
        name: 'cyber-bulb',
        url: 'https://github.com/VincentZyuApps/cyber-bulb',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 1, forks: 0, issues: 0,
        short: 'PyQt5 明暗模式赛博数码时钟，仓库描述的末尾自带一个「喵」。',
        long: '一个会跟着系统明暗模式切换的赛博数码时钟，PyQt5 写的桌面小摆件——仓库描述的末尾自带一个「喵」，这是你在自己作品上盖的爪印。时钟是编程世界的「Hello World 进阶题」，但你把它做成了常驻桌面的陪伴：暗色模式下的霓虹数字，亮色模式下的纸感显示，跟着系统的昼夜呼吸。你的桌面上应该摆了不少自己的东西：Kurarin 的小人在跳舞，cyber-bulb 的数字在发光——赛博工坊里，每一件都是自己打的家具。1 颗星是某个深夜看到它发光的人。时间是最古老的数据源，时钟是最朴素的仪表盘——你在两样最旧的东西上，练了最新的手艺。',
      },
      {
        name: 'sync-pastebin-page',
        url: 'https://github.com/VincentZyuApps/sync-pastebin-page',
        langs: [{ name: 'HTML', color: '#e34c26', pct: 60.5 }, { name: 'Python', color: '#3572a5', pct: 39.5 }], stars: 0, forks: 0, issues: 0,
        short: '局域网实时剪贴板同步网页：一台设备输入，所有设备同显。',
        long: '一台设备上输入，局域网里所有设备同时显示——手机上复制的验证码，电脑上直接看；电脑上写的地址，平板上直接粘。纯网页实现，零后端依赖（相对本地服务而言），「跨设备传个文字」这个高频小需求被你修得干干净净。又是那句话：不起眼，但真疼的问题，你见一个修一个。剪贴板同步的商业产品不少，但都要登录、都要上云、都要你把文字交给别人的服务器——你只信局域网和自己写的代码。0 星不代表人没用过，代表用过的人每次都默默点开了那个本地地址。局域网是你最信任的疆域：不出门的数据最安全，不联网的工具最听话。这是极客的居家美学。',
      },
      {
        name: 'hdrt',
        url: 'https://github.com/VincentZyuApps/hdrt',
        langs: [{ name: 'Rust', color: '#dea584', pct: 99.5 }, { name: 'PowerShell', color: '#012456', pct: 0.3 }, { name: 'Shell', color: '#89e051', pct: 0.1 }], stars: 0, forks: 0, issues: 0,
        short: '跨平台磁盘与设备信息 TUI，基于 Ratatui，Rust 终端三部曲之三。',
        long: 'Dardware Device Rust Ratatui——名字绕口令，目的很单纯：跨平台查看磁盘和设备信息，Ratatui 驱动的终端界面。至此你的 Rust TUI 三部曲集齐：winload 看网、simple-wintop 看系统、hdrt 看磁盘——终端仪表盘的最后一块拼图。0 星是因为它最年轻，也是因为你写它的时候根本没在乎过星：三部曲的意义在于「我想让我的终端什么都能看」，这个愿望达成的那一刻，奖励已经发放完毕。工具箱里每一把扳手都不说话，但拧过的螺丝都知道。从网速到系统再到磁盘，你的终端视力表一路查下来——整套检查做完，还能顺手背一遍 Rust 的所有权。',
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
        langs: [{ name: 'Markdown', color: '#083fa1', pct: 63.1 }, { name: 'Python', color: '#3572a5', pct: 36.9 }], stars: 6, forks: 2, issues: 0,
        short: 'B 站 UP 主 WHITE POTATO 作品精选集，用 README 写的赛博情书。',
        long: '「01bit 的数据承载精神的永恒；白色土豆将在赛博梦境中生根发芽。」——这不是代码仓库，这是一个粉丝用 README 写的情书。收集整理 B 站 UP 主 WHITE POTATO（歪特破特抖）的作品，Markdown 是唯一的语言，热爱是唯一的逻辑。6 颗星、2 个 fork，是同担们对上的接头暗号。在一个以技术论英雄的组织里，这个仓库证明了另一种开源的合法性：保存喜欢的东西，本身就是值得开一个仓的理由。数据会过期，视频会下架，但精心整理的合集会替记忆多活很久。同担的珍藏是人类学样本：喜欢什么、如何保存、为何分享——这个仓库回答了数字时代的三个基本问题。',
      },
      {
        name: 'yolo-RPS-fastapi-demo-20260319',
        url: 'https://github.com/VincentZyuApps/yolo-RPS-fastapi-demo-20260319',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 44.8 }, { name: 'Python', color: '#3572a5', pct: 35.0 }, { name: 'CSS', color: '#563d7c', pct: 15.2 }, { name: 'PowerShell', color: '#012456', pct: 2.7 }, { name: 'Shell', color: '#89e051', pct: 1.7 }], stars: 4, forks: 1, issues: 0,
        short: '基于 YOLOv11 的石头剪刀布实时手势检测，可摄像头可窗口捕获。',
        long: '和电脑猜拳，但计算机视觉来裁判。基于 Ultralytics YOLOv11 的实时手势检测：出石头剪刀布，摄像头（或窗口捕获）实时识别你的手势，模型判定胜负。支持本地训练——你的手势数据，训练你的裁判。文件名里嵌着日期 20260319，这是你给自己盖的实验戳：玩是真的玩，记也是真的记，每一个实验都有编号、有归档、有仓库。CV 的入门课有无数种上法，你选了最快乐的一种：让神经网络看着你的手长大。4 颗星来自同样对着摄像头出过拳的人。CV 模型的第一次上岗是当裁判，第二次大概就是当队友——你的实验田里，下一季种什么已经可以期待了。',
      },
      {
        name: 'Desuwa',
        url: 'https://github.com/VincentZyuApps/Desuwa',
        langs: [{ name: 'C#', color: '#178600', pct: 83.7 }, { name: 'Python', color: '#3572a5', pct: 16.3 }], stars: 4, forks: 1, issues: 0, fork: true,
        short: '全自动口癖补全工具：句尾自动追加「说是desuwa」。',
        long: '句尾自动补「说是desuwa」——描述只有一句话，功能只有一个动作，但它精准命中了二次元互联网的通用软肋：口癖的传播刚需。「desuwa」是大小姐腔的句尾词，用上这个工具，每句话都自带三分贵族气息。fork 一个口癖补全器这件事本身，就是最大的口癖——你连「整活」都要走开源协作流程。C# 的桌面自动化，文本注入的时序处理，技术上不是零活，但真正的技术含量是幽默感。4 颗星来自四大小姐。二次元浓度：溢出，且不可回收。贵族语气自动生成器，大小姐文学的配套基建——fork 的选择即品位，持续维护即深情。二次元的尽头是工具化，工具化的尽头是优雅，你一步到位了，说是。',
      },
      {
        name: 'allcpp-search-go',
        url: 'https://github.com/VincentZyuApps/allcpp-search-go',
        langs: [{ name: 'Go', color: '#00ADD8', pct: 85.3 }, { name: 'Python', color: '#3572a5', pct: 14.7 }], stars: 3, forks: 1, issues: 0,
        short: '请求 allcpp 网站获取漫展数据，原 Python 版的 Go 重构版。',
        long: '学一门语言的方式是重构一个自己需要的东西——你的学习曲线一直是这个形状。原版是 WindowsNoEditor 的 Python 仓库，你用 Go 重写了一遍：请求 allcpp 无差别同人站的漫展数据，接口解析、数据结构、并发请求，Go 的每一课都以「漫展信息」为教材。对比着重构是最高效的学法：语法对仗着旧代码学，坑对着旧逻辑踩。重构完顺便部署，漫展数据照查不误，学习产出直接上线。3 颗星来自漫展人和 Go 学习者的交集——那个交集里的每个人都在偷偷用你的作业抄。Go 的严格和漫展的散漫在同一仓库相遇，谁也没说服谁——于是有了这个既工整又热闹的查询器。',
      },
      {
        name: 'codex-miku-pet',
        url: 'https://github.com/VincentZyuApps/codex-miku-pet',
        langs: [{ name: 'JSON', color: '#292929', pct: 88.9 }, { name: 'Markdown', color: '#083fa1', pct: 11.1 }], stars: 1, forks: 0, issues: 0,
        short: '给 Codex Pets 画的初音未来像素小宠物，用 JSON 逐格手绘。',
        long: '用 JSON 一格一格画出来的初音未来，寄养在 Codex Pets 的桌面上。像素画的本质是坐标与颜色的矩阵，别的画家用画布，你用数据文件——每一颗像素都是手写的键值对。给别的 AI 的桌面伴侣画宠物这件事，赛博养猫人浓度过高：你惦记的不只是自己的工具好不好用，还有别人的 AI 家里缺不缺一只猫。1 颗星是 Codex 用户点的。语言栏里那个 JSON 标签，是你所有仓库里最纯粹的一次「用数据表达爱」。像素画是最诚实的艺术：没有笔触修正，没有图层魔法，每一格都是决定。你用数据文件的严谨，画了一幅小画。',
      },
      {
        name: 'dart-flutter-demo',
        url: 'https://github.com/VincentZyuApps/dart-flutter-demo',
        langs: [{ name: 'Dart', color: '#00B4AB', pct: 47.7 }, { name: 'Python', color: '#3572a5', pct: 32.1 }, { name: 'C++', color: '#f34b7d', pct: 8.3 }, { name: 'CMake', color: '#DA3434', pct: 4.6 }, { name: 'Kotlin', color: '#A97BFF', pct: 3.2 }], stars: 2, forks: 1, issues: 1,
        short: 'Flutter 全平台演示模板，Windows 到 macOS 五端 CI 全跑通。',
        long: '一个 proof-of-concept 的 Flutter 展示 demo，重点全在后面：GitHub Actions 的 CI workflow 覆盖 Windows、Linux、Android、iOS、macOS 五个平台——学 Flutter 的第一天，你把发布管线先修好了。普通人的「入门」是跑个计数器，你的「入门」是五端构建流水线全绿。这个仓库后来成了你所有跨平台想法的起跑线：想验证一个想法能不能五端通吃，先在这里过堂。2 颗星来自同样想「一次编写、处处构建」的人。你的「入门」，比别人家的「精通」还整齐。五端流水线常年全绿，是这个仓库最安静的炫技——稳定性从不出声，但所有人都看得见。',
      },
      {
        name: 'git-vv-script',
        url: 'https://github.com/VincentZyuApps/git-vv-script',
        langs: [{ name: 'Markdown', color: '#083fa1', pct: 69.2 }, { name: 'PowerShell', color: '#012456', pct: 12.1 }, { name: 'Python', color: '#3572a5', pct: 11.0 }, { name: 'Shell', color: '#89e051', pct: 7.7 }], stars: 2, forks: 1, issues: 0,
        short: 'git 快捷脚本集：给高频 git 命令起小名，天天用的顺手磨快。',
        long: '给 git 命令起小名的脚本集合——天天用的东西，顺手磨快一点，你和终端的关系是老夫老妻：知道它哪里硌手，就给它垫一块布。git 的原生命令又长又挑字母，alias 和脚本就是那块布。这个仓库语言栏是 Markdown，说明脚本之外你把说明文档也当正事写了——工具的说明书是工具的一半。2 颗星来自同样被长命令折磨过的人。vv 这个名字，和你 git 提交信息里的个人签名一脉相承，小而顺口的，才是自己的。磨刀不误砍柴工，你磨的这把，天天都在砍柴；终端老夫老妻的日子，还长着呢——下一个 alias 诞生时，记得回来更新这份说明书，好工具都活在被继续打磨的路上。',
      },
      {
        name: 'tampermonkey-plugin-koishi-market-ai-helper',
        url: 'https://github.com/VincentZyuApps/tampermonkey-plugin-koishi-market-ai-helper',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 78.1 }, { name: 'CSS', color: '#563d7c', pct: 13.3 }, { name: 'Python', color: '#3572a5', pct: 8.7 }], stars: 0, forks: 0, issues: 0,
        short: '油猴脚本：Koishi 插件市场的 AI 对话式搜索，本地召回加多 LLM 接入。',
        long: '你给自己的商店街配的 AI 店员。油猴脚本形态，装在浏览器里，在 Koishi 插件市场页面上注入一个对话式搜索助手：本地召回打底，多种 LLM 接口可选——「帮我找个能查天气还好用的插件」这种自然语言需求，直接问它。商店街是你修的（uniapp-koishi-market），店员也是你雇的（这个脚本），生态强迫症晚期，无药可医，但治病不如顺病：既然闭环没闭合，就亲手把它闭合。0 星是因为店员刚上岗——它站在货架旁等客人开口的样子，是 AI 时代最斯文的自动化。浏览器是你眼里的可编程城市，油猴是市政通行证——你在别人的页面上，装了自己的智能。',
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
        langs: [{ name: 'Go', color: '#00ADD8', pct: 87.1 }, { name: 'Python', color: '#3572a5', pct: 10.8 }, { name: 'Markdown', color: '#083fa1', pct: 2.1 }], stars: 3, forks: 1, issues: 0,
        short: '组织门面仓库：GitHub Actions 自动生成统计图表 SVG。',
        long: '组织的自动展柜。README 上的语言统计线、3D 贡献图、仓库语言占比、活跃度概览，全部由 GitHub Actions 定时生成 SVG 更新——门面仓库不是手写的，是自运转的。语言栏里那格 Go 是 Actions 脚本的功劳：一个专门放统计的仓库，自己却成了统计里的赢家，这个套娃很精妙。组织里每个访客第一眼看到的数字和图表，背后是这个仓库在深夜的定时任务。3 颗星来自同样想把组织门面做成仪表盘的 org 管理员。组织的第一印象由它值守，深夜的 commit 都被它认真记账——门面工程的最高境界，是让人忘记它的存在。',
      },
      {
        name: 'scoop-bucket',
        url: 'https://github.com/VincentZyuApps/scoop-bucket',
        langs: [{ name: 'JSON', color: '#292929', pct: 100.0 }], stars: 3, forks: 1, issues: 0,
        short: 'Windows scoop 包源：winload 经由这里分发到千家万户的终端。',
        long: 'winload 就是经这里分发到世界的——Windows 用户的 scoop 源，一个 JSON 清单仓库，却是一条自来水管道的泵站：`scoop bucket add` 一下，你的工具就流进了别人的终端。自己的工具自己发版、自己的源自己维护、版本号自己盯——大多数开发者写到「push 到 GitHub」就停了，你多走的那几步，是工具从「能 clone」到「能安装」的距离。3 颗星来自装过你软件的人。分发的最后一公里，你用三个包管理器各修了一遍（scoop、brew、flatpak），管道工的强迫症莫过于此。',
      },
      {
        name: 'ip-info-api',
        url: 'https://github.com/VincentZyuApps/ip-info-api',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 4, forks: 1, issues: 0, fork: true,
        short: '免费 IP 信息查询 API：GET 直访、零鉴权，状态自动更新。',
        long: 'fork 来的基础设施：免费 IP 信息查询 API 接口，GET 请求直接访问，无任何鉴权，Github Action 自动更新 API 状态——免费、免登录、免文档阅读障碍，这是公地型项目的美德三连。收进来的是工具，维护的是公地：这种项目星不多、谢不多，但每一个调试网络的深夜里，都有无数 curl 无声地路过。4 颗星是它自带的原生人气。你把它收进组织，就像在工具墙上挂了一把公用扳手——谁都可以拧，坏了你来修。调试网络的深夜里，无数 curl 无声地路过这里——公地项目不求回报，但求别 404。你守着这份别 404。',
      },
      {
        name: 'qwq-npm-test',
        url: 'https://github.com/VincentZyuApps/qwq-npm-test',
        langs: [{ name: 'JavaScript', color: '#f1e05a', pct: 100.0 }], stars: 3, forks: 1, issues: 0,
        short: 'npm 生态 CI/CD 试验沙盒：验证 Actions 发布流程的彩排舞台。',
        long: '名字带 qwq，用途很严肃：专门验证 GitHub Actions 在 npm 生态里的 CI/CD 工作流——发布流程、版本号、registry 上传，所有正式上线前的彩排都在这个舞台完成。拿一个名为 qwq 的仓库试验正经的发布管线，反差萌是刻意的：测试环境不需要板着脸，但需要一丝不苟。3 颗星来自同样在搭 npm 发布流水线、路过借鉴的人。所有你看到的「一次成功」，背后都有一间这样的彩排房。彩排房的灯总是最后关：正式演出每成功一次，它的功劳就淡一分——这种功劳，你从不计较。qwq 这名字，是给严谨留的一扇透气窗。',
      },
      {
        name: 'homebrew-tap',
        url: 'https://github.com/VincentZyuApps/homebrew-tap',
        langs: [{ name: 'Ruby', color: '#701516', pct: 100.0 }], stars: 1, forks: 1, issues: 0,
        short: 'macOS 与 Linux 的 Homebrew 源：分发矩阵的另一半，Ruby 独一份。',
        long: '同一个工具，再修一条通往 brew 的路。Homebrew 的 tap 机制让任何人可以开自己的软件源——`brew tap VincentZyuApps/tap` 之后，winload 们就能在 Mac 和 Linux 上 brew install 了。这个仓库还是组织语言统计里 Ruby 的唯一出场：一份 Formula 文件，独挑一门语言，排面拉满。分发矩阵的另一半：scoop 管.Windows，brew 管 macOS/Linux，flatpak 管另外的 Linux——你对「让安装变简单」这件事，有执念。1 颗星来自某台 MacBook。一份 Formula，两端通路——分发体系里最小的螺丝，拧得一丝不苟。Ruby 语言栏的那格排面，由它独家承包。',
      },
      {
        name: 'flatpak-repo',
        url: 'https://github.com/VincentZyuApps/flatpak-repo',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 1, forks: 0, issues: 0,
        short: 'Linux Flatpak 应用源：scoop、brew、flatpak 三大包体系各配一源。',
        long: '第三条管道：Flatpak 源，Linux 桌面世界的沙盒化应用分发体系。至此 scoop（Windows）、Homebrew（macOS/Linux CLI）、Flatpak（Linux GUI）三大包管理体系各配一个源，一个不落——「让安装变简单」的执念完成了大一统。三个源加起来不到 5 颗星，但它们是你所有可安装作品的必经之路：星星会落在 winload 头上，管道只需要通畅。1 颗星来自某个 Arch 用户（大概率）。铺路的人不收过路费，这很你。三大体系的源在同一组织里列队完毕，像工具墙上的三把扳手——尺寸不同，握感都是你的。',
      },
      {
        name: 'github-profile-3d-contrib',
        url: 'https://github.com/VincentZyuApps/github-profile-3d-contrib',
        langs: [{ name: 'TypeScript', color: '#3178c6', pct: 99.3 }, { name: 'JavaScript', color: '#f1e05a', pct: 0.7 }], stars: 1, forks: 0, issues: 0, fork: true,
        short: '3D 贡献图生成 Action：你 README 里那张立体贡献海报的幕后引擎。',
        long: '你 README 里那张立体贡献图的幕后引擎。这个 GitHub Action 把贡献日历渲染成 3D 的等距小方块图——365 天的坚持变成一座可以斜着看的小城。fork 到组织里，接上自己的 workflow，绿格子从此有了体积感。「把自己的坚持可视化」是件朴素的事：好看的数据，才有动力继续填满。1 颗星是配套的认可。每个深夜 commit 的人，都需要一张看得见摸得着的热力图，你只是把它从平面升维了。坚持可视化之后，坚持本身成了风景——你 fork 的不是工具，是一面能斜着看的镜子。格子城里每栋高楼，都是一个不想睡的夜晚。',
      },
      {
        name: 'mac-test-action-runner',
        url: 'https://github.com/VincentZyuApps/mac-test-action-runner',
        langs: [{ name: 'Python', color: '#3572a5', pct: 100.0 }], stars: 1, forks: 0, issues: 0, fork: true,
        short: '在 GitHub Actions 的 macOS runner 上开临时 SSH 会话的工作流。',
        long: '在 GitHub Actions 的 mac 跑道上开临时 SSH——ARM64 的 macOS runner 环境诡异问题多，CI 挂了想上去亲手看看？这个工作流给你开一扇门。fork 它的人，多半也有一段「日志里看不出死因」的血泪史。你连调试环境都要自动化：隔壁那些 GLSL 着色器和 C++ 插件的 CI 构建，出问题时就是这么一格格磨出来的。1 颗星来自同病相怜的 CI 战士。调试工具的调试工具——套娃的尽头，是一个不肯将就的人。从 CI 日志到 SSH 现场，调试的颗粒度细到每一行输出——你连「排查排查工具」这件事，都留了工具。',
      },
    ],
  },
];

export const REPOS_TOTAL = REPO_GROUPS.reduce((n, g) => n + g.repos.length, 0);
export const REPOS_FORK_COUNT = REPO_GROUPS.reduce(
  (n, g) => n + g.repos.filter((r) => r.fork).length,
  0,
);
