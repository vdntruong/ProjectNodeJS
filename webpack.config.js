'use strict';
module.exports = {
	entry: {
		main: './src/js/main.js',
		app: './src/js/app.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/public/javascripts/bundles'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: '/node_modules',
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.m?css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	stats: {
		colors: true
	},
	mode: 'production'
};
