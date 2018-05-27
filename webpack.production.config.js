const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

const dotenvResult = dotenv.config();
const dotEnvConfig = Object.keys(dotenvResult.parsed).reduce((result, key) => ({
    ...result,
    [key]: JSON.stringify(dotenvResult.parsed[key]),
}), {});

const config = {
    mode: 'production',

    devtool: 'hidden-source-map',

    entry: {
        app: [
            'babel-polyfill',
            './index.js',
            './assets/scss/main.scss',
        ],
    },

    context: resolve(__dirname, 'app'),

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
        publicPath: '',
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: resolve(__dirname, 'node_modules'),
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ...process.env,
                NODE_ENV: JSON.stringify('development'),
                ...dotEnvConfig,
            },
        }),
        new HtmlWebpackPlugin({
            template: `${__dirname}/app/index.html`,
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css',
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            App: resolve(__dirname, 'app/'),
        },
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/png',
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/octet-stream',
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/svg+xml',
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = config;
