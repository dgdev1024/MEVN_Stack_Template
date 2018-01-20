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
    // This plugin will separate vendor code (which usually never changes) from
    // our application code (which changes a lot). This cuts down on compile time.
    //
    // This plugin also "fingerprints" our bundled code files with unique IDs, in order
    // to force the web browser to re-load the new files, instead of loading older, cached
    // script files.
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),

    // This plugin will build an 'index.html' file in the public folder containing our
    // bundled code files, based on the 'index.html' file in our project's root folder,
    // and then automatically inject script tags which load our bundled application and
    // vendor code. This eliminates the tedium of manually changing the 'src' attributes
    // in those script tags every time you compile the frontend.
    new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        chunksSortMode: 'dependency'
    })
];

// Uglify our client's code if we are building in production mode.
if (env === 'production') {
    // Use the UglifyJS plugin we installed with NPM, rather than
    // Webpack's built-in UglifyJS plugin, otherwise you may run into some
    // cryptic errors when building for production.
    const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
    plugins.push(new uglifyJsPlugin());

    // This will strip out all build warnings when building for production.
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