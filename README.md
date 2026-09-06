# GLM 印象长卷 · 致 VincentZyu

> 🖊️📜 **GLM 对 VincentZyu 的印象长卷** —— 墨、纸与朱砂印。
> 一次认真的凝视，和几句真话。

<div align="center">

### 🎉 [**👉 点此打开长卷 · GitHub Pages 👈**](https://vincentzyu233.github.io/GLMImpressionOfVincentZyu/)

[![⚡ 打开长卷 · GitHub Pages](https://img.shields.io/badge/⚡_打开长卷-GitHub_Pages-ff69b4?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)](https://vincentzyu233.github.io/GLMImpressionOfVincentZyu/)
[![✨ VincentZyuApps 组织](https://img.shields.io/badge/✨_印象主角-VincentZyuApps-1976d2?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)](https://github.com/VincentZyuApps)

[![🌌 Gemini 的画卷（隔壁）](https://img.shields.io/badge/🌌_隔壁画卷-Gemini_Impression-8b5cf6?style=for-the-badge&logo=googlegemini&logoColor=white&labelColor=181717)](https://github.com/VincentZyu233/GeminiImpressionOfVincentZyu)

[![Deploy to GitHub Pages](https://github.com/VincentZyu233/GLMImpressionOfVincentZyu/actions/workflows/deploy.yml/badge.svg)](https://github.com/VincentZyu233/GLMImpressionOfVincentZyu/actions/workflows/deploy.yml)
[![React 18](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite 6](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![霞鹜文楷](https://img.shields.io/badge/字体-霞鹜文楷-4a7ebb?style=flat-square&logo=googlefonts&logoColor=white)](https://github.com/lxgw/LxgwWenKai)
[![Stars](https://img.shields.io/github/stars/VincentZyu233/GLMImpressionOfVincentZyu?style=flat-square&color=ff69b4&logo=github&logoColor=white)](https://github.com/VincentZyu233/GLMImpressionOfVincentZyu/stargazers)

</div>

---

## 🥚 免费鸡蛋

> **本项目全程使用 GLM 官网 8 月底放出的免费鸡蛋——GLM 5.3 模型完成（智谱官方渠道：[chat.z.ai](https://chat.z.ai)）。**
>
> 从卷首的「你好」到卷尾的朱砂印，从 83 仓编年史到 900 星画像，
> 每一行代码、每一段印象文案、每一处彩蛋旋律，皆出自这枚免费鸡蛋。
>
> 想领你自己的免费鸡蛋？去官网唠一唠 → **[chat.z.ai](https://chat.z.ai)** 🥚✨

---

水墨长卷风格的交互式网页：宣纸底色、墨迹随鼠标晕开、滚动徐徐展开，
七个章节 —— **卷首 · 观其人 · 品其作 · 遍览藏库（75 仓库全收录）· 知其趣 · 对话 · 落款**，
卷尾有一枚可以亲手盖下的 **朱砂印**。

与隔壁 [GeminiImpressionOfVincentZyu](https://github.com/VincentZyu233/GeminiImpressionOfVincentZyu)（星空幻灯片风）遥相呼应：
Gemini 住 40805，GLM 敲 40806 的门。

## 开发

```bash
npm install
npm run dev        # http://localhost:40806
```

## 构建

```bash
npm run build      # 产物在 dist/
npm run preview    # 本地预览构建产物
npm run typecheck  # TS 类型检查
```

## 部署（GitHub Pages）

push 到 `main` 且 commit message 包含 `build-page` 时自动部署
（也可在 Actions 页面手动触发 workflow_dispatch），见
`.github/workflows/deploy.yml`。

Pages 地址：<https://vincentzyu233.github.io/GLMImpressionOfVincentZyu/>

## 📦 技术栈

| 技术 | 版本 | 说明 |
|:---|:---|:---|
| [![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev) | 18 | UI 框架，十节长卷的骨架 |
| [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | 5 | 全部逻辑的类型守卫 |
| [![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev) | 6 | 构建工具与热重载开发服务器 |
| [![npm: 霞鹜文楷](https://img.shields.io/npm/v/%40chinese-fonts/lxgwwenkai?style=flat-square&logo=npm&logoColor=white&label=%E9%9C%9E%E9%B9%AC%E6%96%87%E6%A5%B7)](https://www.npmjs.com/package/@chinese-fonts/lxgwwenkai) | npm | 霞鹜文楷官方 npm 打包（@chinese-fonts/lxgwwenkai），全站字体 |
| [![Canvas 2D](https://img.shields.io/badge/Canvas-2D-e34c26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) | 原生 | 水墨粒子（墨絮 / 拖墨 / 溅墨）与墨契印象卡渲染 |
| [![Web Audio API](https://img.shields.io/badge/Web_Audio-API-1190ea?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API) | 原生 | 五声音阶琴声、Rickroll 拨弦与盖章闷响合成器 |

---

*此卷由 GLM 写就 · 墨不欺纸，纸不欺人。*

> 🔍 本卷藏有四处秘藏，寻墨者自得。
