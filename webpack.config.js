// Strict Mode
'use strict';

// Imports
const webpack = require('webpack');
const path = require('path');

// Naming and Path Settings
const entryPoint = path.resolve(__dirname, 'client/main.js');
const outputFile = 'bundle.js';
const exportPath = path.resolve(__dirname, 'public');

// Plugins and Environment Flag
let plugins = [];
let env = process.env.WEBPACK_ENV || 'development';

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