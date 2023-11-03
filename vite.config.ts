import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

/** module path */
import tsPaths from './tsconfig.path.json';

/** Resolve tsconfig.json paths to aliases */
function resolveTsconfigPathsToAlias() {
    const paths = tsPaths.compilerOptions.paths;
    return Object.keys(paths).reduce((alias, item) => {
        const key = item.replace('/*', '');
        alias[key] = path.resolve(__dirname, paths[item][0].replace('/*', ''));
        return alias;
    }, {});
}

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [react()],
        server: {
            https: process.env.VITE_APP_HTTPS === 'true',
            host: process.env.VITE_APP_HOST,
            port: parseInt(process.env.VITE_APP_PORT),
        },
        resolve: {
            alias: resolveTsconfigPathsToAlias(),
        },
    });
};
