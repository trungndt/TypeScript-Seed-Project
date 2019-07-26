const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let outputJsName = 'bundle.js';
let outputCssDir = '';
let outputCssName = 'bundle.css';

module.exports = {
    entry: path.join(__dirname, 'src', 'app.ts'),
    output: {
        filename: outputJsName,
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader'
                ],
                exclude: /\.svg$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: outputCssDir + outputCssName
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, ''),
        compress: true,
        port: 3000,
        publicPath: '/dist/',
    }
};