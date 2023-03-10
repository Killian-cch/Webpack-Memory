const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'production',
	watch: true,
  	entry: './src/index.js',
  	output: {
    	filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dist'),
  	},

    plugins: [new MiniCssExtractPlugin({filename: 'main.css'})],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};