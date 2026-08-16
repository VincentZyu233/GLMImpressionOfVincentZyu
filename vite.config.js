import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 部署在子路径 /GLMImpressionOfVincentZyu/ 下
const isGithubPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/GLMImpressionOfVincentZyu/' : '/',
});
