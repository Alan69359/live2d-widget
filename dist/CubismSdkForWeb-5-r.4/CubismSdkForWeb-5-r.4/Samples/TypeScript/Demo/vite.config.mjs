import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig((env) => {
    let common = {
        server: {
            port: 5000,
        },
        root: './',
        base: '/',
        publicDir: './public',
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                '@framework': path.resolve(__dirname, '../../../Framework/src'),
            }
        },
        build: {
            target: 'modules',
            assetsDir: 'assets',
            outDir: './dist',
            sourcemap: env.mode == 'development' ? true : false,
        },
    };
    return common;
});
