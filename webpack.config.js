const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
			},
			{
				test: /\.(ico|jpe?g|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [new htmlWebpackPlugin({ template: './src/index.html' })],
};
