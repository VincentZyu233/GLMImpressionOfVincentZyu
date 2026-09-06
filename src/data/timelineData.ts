// ═══════════════════════════════════════════════════════════════
//  其四 · 岁时 —— VincentZyuApps 仓库编年史
//  数据快照：2026-09-07（83 仓按创建时间升序，硬编码不更新）
//  caption 优先取本文件；未写的在组件里从 reposData 的短评回退
// ═══════════════════════════════════════════════════════════════

export const TIMELINE_SNAPSHOT = '2026-09-07';

export interface TimelineEntry {
  date: string;
  name: string;
  caption?: string;
  milestone?: string;
}

export const TIMELINE: TimelineEntry[] = [
  { date: '2023-09-16', name: 'White_Potato_Album', milestone: '起点' },
  { date: '2025-02-19', name: 'koishi-plugin-youtube-vincentzyu-fork', milestone: 'bot 帝国第一块砖' },
  { date: '2025-07-10', name: 'koishi-plugin-cs-lookup-vincentzyu-fork' },
  { date: '2025-07-29', name: 'koishi-plugin-onebot-info-image' },
  { date: '2025-08-01', name: 'koishi-plugin-awa-quote-image' },
  { date: '2025-10-27', name: 'koishi-plugin-music-link-vincentzyu-fork' },
  { date: '2025-11-12', name: 'wydashen-guangyi-query', caption: '（由 koishi-plugin-wydashen-guangyi-query 更名）14 星的光翼查询' },
  { date: '2025-12-05', name: 'skyblessings-fastapi-pillow' },
  { date: '2025-12-14', name: 'uniapp-koishi-market' },
  { date: '2025-12-19', name: 'fastapi-awa-fuzzy-search-minecraft-backend' },
  { date: '2025-12-19', name: 'koishi-plugin-awa-mc-ament' },
  { date: '2025-12-25', name: 'koishi-plugin-anime-convention-lizard-vincentzyu-fork' },
  { date: '2025-12-25', name: 'allcpp-search-go' },
  { date: '2025-12-28', name: 'spigot-plugin-bad-apple' },
  { date: '2026-01-03', name: 'qwq-npm-test' },
  { date: '2026-02-01', name: 'levilamina-plugin-mclistener-ws-server' },
  { date: '2026-02-01', name: 'levilamina-plugin-serverinfo-rest' },
  { date: '2026-02-04', name: 'koishi-plugin-serverinfo-rest-client' },
  { date: '2026-02-08', name: 'winload', milestone: '镇馆之宝诞生' },
  { date: '2026-02-09', name: 'scoop-bucket' },
  { date: '2026-02-09', name: '.github' },
  { date: '2026-02-12', name: 'koishi-plugin-wydashen-guangyi-query' },
  { date: '2026-02-20', name: 'nosnap', milestone: '12 天后，第二明星' },
  { date: '2026-03-09', name: 'koishi-plugin-chiral-carbon-verifier' },
  { date: '2026-03-09', name: 'koishi-plugin-twitch' },
  { date: '2026-03-10', name: 'koishi-plugin-git-repo-monitor' },
  { date: '2026-03-10', name: 'mc-skin-wrap-http-server' },
  { date: '2026-03-11', name: 'koishi-plugin-quote-debug-msg-json-image' },
  { date: '2026-03-11', name: 'uniapp-mp-qwq-server-frontend' },
  { date: '2026-03-16', name: 'wangyi-mc-bedrock-check-world' },
  { date: '2026-03-16', name: 'wangyi-mc-checkworld-tauri' },
  { date: '2026-03-19', name: 'yolo-RPS-fastapi-demo-20260319' },
  { date: '2026-03-29', name: 'koishi-plugin-md-tryer-vincentzyu-fork' },
  { date: '2026-04-02', name: 'git-vv-script' },
  { date: '2026-04-03', name: 'Desuwa' },
  { date: '2026-04-08', name: 'koishi-plugin-sky-blessing' },
  { date: '2026-04-08', name: 'skyblessings-static-page' },
  { date: '2026-04-19', name: 'nginx-report' },
  { date: '2026-04-20', name: 'ip-info-api' },
  { date: '2026-04-27', name: 'homebrew-tap' },
  { date: '2026-05-08', name: 'dart-flutter-demo' },
  { date: '2026-05-10', name: 'mac-test-action-runner' },
  { date: '2026-05-17', name: 'koishi-plugin-randpic' },
  { date: '2026-05-18', name: 'Qt-Kurarin' },
  { date: '2026-05-22', name: 'koishi-plugin-get-qq-bot-transfer-link' },
  { date: '2026-05-26', name: 'koishi-plugin-course-schedule' },
  { date: '2026-05-27', name: 'koishi-plugin-who-at-me-vincentzyu' },
  { date: '2026-05-29', name: 'koishi-plugin-auto-emoji-onebot-vincentzyu' },
  { date: '2026-05-30', name: 'wasm-ffmpeg-tryer' },
  { date: '2026-06-01', name: 'koishi-plugin-mclistener-ws-client' },
  { date: '2026-06-01', name: 'mcdr_listener_ws_server' },
  { date: '2026-06-02', name: 'qwq-flytre-bingo-booster' },
  { date: '2026-06-14', name: 'koishi-plugin-dice-games101-3d-renderer' },
  { date: '2026-06-15', name: 'koishi-plugin-onebot-touxian' },
  { date: '2026-06-16', name: 'koishi-plugin-awa-mc-fuzzy-search' },
  { date: '2026-06-17', name: 'qwqCounterStrikeSharpPlugin' },
  { date: '2026-06-18', name: 'CounterStrikeSharpListenerWsServer' },
  { date: '2026-06-19', name: 'koishi-plugin-pjsk-pptr-for-qq-vincentzyu-fork' },
  { date: '2026-06-21', name: 'simple-wintop' },
  { date: '2026-06-21', name: 'lcon' },
  { date: '2026-06-24', name: 'github-profile-3d-contrib' },
  { date: '2026-06-27', name: 'sync-pastebin-page' },
  { date: '2026-06-27', name: 'koishi-plugin-mcrenderskin-vincentzyu-fork' },
  { date: '2026-06-29', name: 'koishi-plugin-not-just-cf-vincentzyu-fork' },
  { date: '2026-06-30', name: 'koishi-plugin-skykid-height-cosmetic-query' },
  { date: '2026-06-30', name: 'koishi-plugin-sky-renwu-weibo' },
  { date: '2026-07-04', name: 'skykid-height-cosmetic-image-draw-api', caption: '光遇身高装扮的绘图 API——查询插件的孪生服务端' },
  { date: '2026-07-05', name: 'koishi-plugin-test-broadcast' },
  { date: '2026-07-05', name: 'hdrt' },
  { date: '2026-07-08', name: 'SkyModelViewerWinui', caption: '光遇模型查看器，WinUI 桌面版——连模型都要转着看' },
  { date: '2026-07-10', name: 'tampermonkey-plugin-koishi-market-ai-helper' },
  { date: '2026-07-19', name: 'WireSight' },
  { date: '2026-07-21', name: 'koishi-plugin-gold-price-image' },
  { date: '2026-07-29', name: 'cyber-bulb' },
  { date: '2026-08-01', name: 'koishi-plugin-get-image-link-debug' },
  { date: '2026-08-02', name: 'flatpak-repo' },
  { date: '2026-08-12', name: 'codex-miku-pet' },
  { date: '2026-08-14', name: 'koishi-plugin-picstatus' },
  { date: '2026-08-14', name: 'sky-shards', caption: '光遇碎片工具又一生' },
  { date: '2026-08-22', name: 'Ori-WotW-QoE-Mod', caption: '《奥日与鬼火意志》体验增强 mod——MC 之外也惦记着好游戏' },
  { date: '2026-08-23', name: 'koishi-plugin-sky-shards', caption: '光遇碎片查询插件——工具链的新芽' },
  { date: '2026-08-28', name: 'OpenHardwareMonitorWinUI', caption: '硬件监视器 WinUI 复刻——star 里收藏过的项目，亲手续了一命' },
  { date: '2026-09-04', name: 'lua-love2d-snake', caption: 'Love2D 贪吃蛇，八种 AI 算法对战——最新的一卷' },
];

export const YEAR_NOTES: Record<string, string> = {
  '2023': '起点是喜欢。9 月 16 日，第一卷是为喜欢的 UP 主立的传——收藏即创作。',
  '2025': 'Bot 帝国奠基。2 月接手第一个 Koishi 插件之后一发不可收拾：出图、监控、光遇、市场——插件森林初具规模。',
  '2026': '全面开花。2 月 winload 与 nosnap 相隔 12 天出生，双双成为门面；之后 Rust 终端三部曲、光遇工具链、AI 实验室……工作台每个月都在长新芽——长卷成卷时是 75 仓，此刻已是 83。',
};

export const TIMELINE_TOTAL = TIMELINE.length;
