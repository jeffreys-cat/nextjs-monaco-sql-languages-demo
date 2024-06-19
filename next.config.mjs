/** @type {import('next').NextConfig} */

import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    
    webpack(config, options) {
        if (!options.isServer) {
            config.plugins.push(
                new MonacoWebpackPlugin({
                    filename: "static/[name].worker.js",
                    customLanguages: [
                        {
                            label: 'mysql',
                            entry: path.resolve(
                                __dirname,
                                'node_modules/monaco-sql-languages/esm/languages/mysql/mysql.contribution',
                            ),
                            worker: {
                                id: 'monaco-sql-languages/esm/languages/mysql/mySQLWorker',
                                entry: path.resolve(
                                    __dirname,
                                    'node_modules/monaco-sql-languages/esm/languages/mysql/mysql.worker',
                                ),
                            },
                        },
                    ],
                }),
            );
            config.module.rules.push({ test: /\.ttf$/, type: "asset/resource" });
        }
        return config;
    },
};

export default nextConfig;
