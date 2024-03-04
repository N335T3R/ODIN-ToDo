const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: './src/script.js',
        new: './src/new.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.{svg|png|jpg|jpeg|gif}$/i,
                type: 'asset/resource',
            },
        ],
    },
};