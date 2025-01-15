import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob';
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
    base: './',
    plugins: [liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './*.html']), ViteEjsPlugin()],
    crossorigin: '',
    css: {
        devSourcemap: true,
    },
    server: {
        open: './index.html',
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
    build: {
        minify: false, //取消編碼最小化
        rollupOptions: {
            input: Object.fromEntries(
                glob
                    .sync('*.html')
                    .map((file) => [
                        path.relative('.', file.slice(0, file.length - path.extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url)),
                    ])
            ),
            output: {
                // 指定打包檔案輸出目錄和檔案路徑
                entryFileNames: 'assets/js/[name].js',
                chunkFileNames: 'assets/js/[name].js',
                assetFileNames(assetInfo) {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/css/[name].css';
                    }
                    if (
                        ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].some((ext) => assetInfo.name.endsWith(ext))
                    ) {
                        return 'assets/Image/[name].[ext]';
                    }
                    if (['.ttf', '.woff', '.woff2'].some((ext) => assetInfo.name.endsWith(ext))) {
                        return 'webFont/[name].[ext]';
                    }
                    return 'assets/[name].[ext]';
                },
            },
        },
        outDir: 'dist',
        sourcemap: false, //不生成 .map 檔案
    },
});
