'use strict';

var path = require('path');

var nodeModules = path.join(__dirname, '/node_modules');

module.exports = {
    cache: true,
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json']
    },
    context: __dirname,
    entry: [
        './src'
    ],
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    module: {
        noParse: [
            path.join(nodeModules, '/react/dist/*.js')
        ],
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                include: path.join(__dirname, 'src'),
                loaders: [
                    'react-hot',
                    'babel'
                ]
            },
            {
                test: /(\.scss|\.css)$/,
                loaders: [
                    'style',
                    'css?importLoaders=1',
                    'autoprefixer',
                    'sass'
                ]
            }
        ]
    }
};
