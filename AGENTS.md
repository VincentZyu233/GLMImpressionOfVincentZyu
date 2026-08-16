# Repository Notes for Agents

## 🔹 项目概况

- GLM 对 VincentZyu 的印象长卷：Vite + React 18 + TS，纯前端零后端。
- 本地开发端口 **40806**（40805 是隔壁 Gemini 的，别抢）。
- 所有印象文案硬编码在 `src/data/impressionData.ts`（章节文案）与
  `src/data/reposData.ts`（75 仓库藏库数据），改内容只动这两个文件。

## 🔹 Commit 习惯

- 中文说明 + conventional commit 风格标题，正文写清楚主要改动点。
- 需要触发 GitHub Pages 部署时，commit 标题带上 `build-page`。
- co-author 用下面验证过能渲染头像的 noreply 邮箱（ID+用户名 格式）：

```
Co-authored-by: GLM <1732805+glm@users.noreply.github.com>
Co-authored-by: ZCode <3461545+zcode@users.noreply.github.com>
```

- 注意：组织账号（如 zai-org）没有 noreply 邮箱，无法渲染头像；
  `glm@z.ai` 之类的自编邮箱也不会被 GitHub 识别。
- 协作者只保留 GLM 与 ZCode 两个（用户点名要求：不要 Claude / Codex /
  bot 等，历史已 filter-branch 清理过，别再加回去）。

## 🔹 藏库数据更新流程（用户说"更新仓库数据"时）

1. `curl -s "https://api.github.com/orgs/VincentZyuApps/repos?per_page=100&page=1"`
   拉最新快照（open_issues_count 含未合并 PR）。
2. 手动同步 `src/data/reposData.ts` 的数字；语言占比 Top5 需逐仓调
   `gh api repos/VincentZyuApps/<repo>/languages` 取回重算；新增仓库要写
   短评（25-50 字）+ 长评（250-500 字）两段中文印象。
3. fork 徽章规则（**并集**）：名字带 `fork` **或** API `fork: true`，任一命中即挂。
4. 更新 `REPOS_SNAPSHOT` 快照日期，跑 `npm run typecheck && npm run build` 验证。
5. commit 标题带 `build-page` 部署上线。

## 🔹 样式约定

- 设计系统：宣纸 `--paper` / 墨 `--ink` / 朱砂 `--cinnabar`，霞鹜文楷。
- 新章节遵循现有骨架：`SectionHead` 竖排标题 + `Reveal` 浮现 + 章节序号。
- 音效走 `src/utils/audioSynth.ts`，别超过现有音量级。
