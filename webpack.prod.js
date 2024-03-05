const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].[contentHash].css"
    }),
    new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            `...`, //keeps terser (JS minimization)
            new CssMinimizerPlugin(),
        ],
    },
});