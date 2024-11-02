import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin()
    ],
    build: {
        outDir: './dist',
        minify: 'esbuild',
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
            fileName: (format) => `[name].[format].js`
        },
        esbuild: {
            minify: true
        }
    }
})