// Strict Mode
'use strict';

// Imports
const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// Naming and Path Settings
const entryPoint = path.resolve(__dirname, 'client/main.js');
const outputFile = '[name].[chunkhash].js';
const exportPath = path.resolve(__dirname, 'public');

// Plugins and Environment Flag
let env = process.env.WEBPACK_ENV || 'development';
let plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),

    new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        chunksSortMode: 'dependency'
    })
];

// Uglify our client's code if we are building in production mode.
if (env === 'production') {
    const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
    plugins.push(new uglifyJsPlugin());
    plugins.push(new webpack.DefinePlugin({
        'process.env': { NODE_ENV: '"production"' }
    }));
}

// Main Configuration
module.exports = {
    entry: entryPoint,
    output: {
        path: exportPath,
        filename: outputFile
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 
                                [ 'es2015', { modules: false } ], 
                                'stage-1' 
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.vue?/,
                use: [ 'vue-loader' ]
            }
        ]
    },
    resolve: {
        alias: { 'vue$': 'vue/dist/vue.esm.js' }
    },
    plugins
};