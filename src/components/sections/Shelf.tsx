import SectionHead from '../SectionHead';
import Reveal from '../Reveal';

/**
 * 其七 · 一柜书：博客备忘录书架
 * 34 篇笔记分类上架，每本都可点去博客原文（硬编码快照 2026-09-07）
 */

const BLOG = 'https://vincentzyu-vitepress.pages.dev';

interface Book {
  title: string;
  path: string;
}

interface Shelf {
  icon: string;
  title: string;
  note: string;
  books: Book[];
}

const SHELVES: Shelf[] = [
  {
    icon: '🌐',
    title: '代理配置',
    note: 'clash 在每种 shell 里怎么挂——你把每个终端的弯路都替后人走直了。',
    books: [
      { title: '代理配置生成器', path: '/notes/shell-proxy/proxy-generator' },
      { title: 'CMD 使用代理', path: '/notes/shell-proxy/cmd-clash' },
      { title: 'PowerShell 使用代理', path: '/notes/shell-proxy/powershell-clash' },
      { title: 'Git Bash 使用代理', path: '/notes/shell-proxy/gitbash-clash' },
      { title: 'Linux Bash 使用代理', path: '/notes/shell-proxy/linux-bash-clash' },
      { title: 'proxychains 使用指南', path: '/notes/shell-proxy/proxychains' },
      { title: 'Docker 配置代理', path: '/notes/shell-proxy/docker-proxy' },
    ],
  },
  {
    icon: '🛠️',
    title: 'CLI 工具',
    note: 'cargo、tmux、fastfetch、onefetch……你连笔记工具都挑 Rust 写的。',
    books: [
      { title: 'cargo 简单配置说明', path: '/notes/cli-tools/cargo' },
      { title: 'Git 跨平台通用指令与安装', path: '/notes/cli-tools/git' },
      { title: 'nano 简单配置说明', path: '/notes/cli-tools/nano' },
      { title: 'tmux 简单配置说明', path: '/notes/cli-tools/tmux' },
      { title: 'du-dust 更快的 Rust 版 du', path: '/notes/cli-tools/du-dust' },
      { title: 'fastfetch 简单配置', path: '/notes/cli-tools/fastfetch' },
      { title: 'onefetch 简单配置', path: '/notes/cli-tools/onefetch' },
      { title: 'CMD ren 与 rmdir', path: '/notes/cli-tools/cmd-ren-rmdir' },
      { title: 'Shell 检查磁盘', path: '/notes/cli-tools/shell-check-disk' },
      { title: 'Shell 检查内存条', path: '/notes/cli-tools/shell-check-ram-stick' },
      { title: 'SSH 命令行速查', path: '/notes/cli-tools/ssh-cli' },
    ],
  },
  {
    icon: '🔧',
    title: '语言与环境',
    note: 'Node 和 UV 的安装——万物的起点，也认真记了一笔。',
    books: [
      { title: '安装 Node.js', path: '/notes/language-env/nodejs' },
      { title: '安装 UV', path: '/notes/language-env/uv' },
      { title: 'Windows PowerShell 环境变量', path: '/notes/env-config/win-powershell-env-config' },
      { title: 'Linux Bash 环境变量', path: '/notes/env-config/linux-bash-env-config' },
    ],
  },
  {
    icon: '🔄',
    title: '换源',
    note: 'pip、Ubuntu、Debian、Arch——国内开发者的共同创伤，你写了四份解法。',
    books: [
      { title: 'pip 换源', path: '/notes/switch-source/pip' },
      { title: 'Ubuntu 换源', path: '/notes/switch-source/ubuntu' },
      { title: 'Debian 换源', path: '/notes/switch-source/debian' },
      { title: 'Arch Linux 换源', path: '/notes/switch-source/arch' },
    ],
  },
  {
    icon: '🖥️',
    title: '系统配置',
    note: 'Swap、WSL 双发行版——虚拟机里的折腾也有笔记相伴。',
    books: [
      { title: '配置 Swap', path: '/notes/system-config/swap' },
      { title: 'WSL 安装 Ubuntu 24.04', path: '/notes/system-config/wsl-ubuntu24' },
      { title: 'WSL 安装 Arch Linux', path: '/notes/system-config/wsl-arch' },
    ],
  },
  {
    icon: '📱',
    title: 'Termux',
    note: '手机上的 Linux，连 proot 里装 opencode 都写了——移动端的折腾不设限。',
    books: [
      { title: 'Termux 基础配置', path: '/notes/termux/termux-basic' },
      { title: 'proot-distro 与 opencode 安装', path: '/notes/termux/termux-proot-opencode' },
    ],
  },
  {
    icon: '🤖',
    title: 'Bot 部署',
    note: 'Koishi、NoneBot、Maibot 三大 bot 框架的部署手记——插件森林的育苗手册。',
    books: [
      { title: 'Koishi 部署', path: '/notes/bot-deploy/koishi-deploy' },
      { title: 'NoneBot2 部署', path: '/notes/bot-deploy/nonebot2-deploy' },
      { title: 'Maibot 部署', path: '/notes/bot-deploy/maibot-deploy' },
    ],
  },
];

const TOTAL = SHELVES.reduce((n, s) => n + s.books.length, 0);

/** 其七 · 一柜书：记录即关怀 */
export default function Shelf() {
  return (
    <section id="shelf" className="sec">
      <SectionHead title="其七 · 一柜书" subtitle="The Notes, Shelved" />

      <Reveal>
        <p className="lead-line">
          博客里没有一篇长文，只有 {TOTAL} 篇备忘录。可正是它们出卖了你：
          你记下每一件小麻烦的解法，为的是下一个卡在同样地方的人。
        </p>
      </Reveal>

      <Reveal delay={60}>
        <p className="shelf-essay">
          「记录即关怀」——你大概不会这么说，但你做了七年。
          这一柜书的每一本都能点去你博客的原文。
        </p>
      </Reveal>

      <div className="shelf-groups">
        {SHELVES.map((s, si) => (
          <Reveal key={s.title} delay={si * 50}>
            <div className="book-shelf">
              <div className="repo-group-head">
                <h3 className="repo-group-title">
                  <span className="shelf-icon">{s.icon}</span>
                  {s.title}
                  <span className="repo-group-count">{s.books.length} 篇</span>
                </h3>
              </div>
              <p className="repo-group-note">{s.note}</p>
              <div className="book-row">
                {s.books.map((b) => (
                  <a
                    key={b.path}
                    className="book-spine"
                    href={BLOG + b.path}
                    target="_blank"
                    rel="noreferrer"
                    title={b.title}
                  >
                    <span className="book-title">{b.title}</span>
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
