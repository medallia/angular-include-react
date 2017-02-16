const { resolve } = require('path');
const webpack = require('webpack');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { ifDevelopment, ifProduction } = getIfUtils(process.env.NODE_ENV);
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: ['./index.js'],
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: './',
		pathinfo: ifDevelopment(), // Include info about the modules path, e.g. require(/* ./test */23),
		library: ['feature'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				enforce: 'post',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'ng-annotate-loader',
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								includePaths: [resolve(__dirname, 'node_modules')], // Include SCSS files from node_modules
							},
						},
					],
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader'],
				}),
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},

			// Inline SVGs encoded in UTF-8
			{
				test: /\.svg$/,
				loader: 'svg-url-loader',
			},

			// Inline PNGs in Base64 if it is smaller than 10KB; otherwise, emmit files using file-loader.
			{
				test: /\.png$/,
				loader: 'url-loader',
				options: { mimetype: 'image/png', limit: 10000, name: '[name]-[hash:6].[ext]' },
			},
		],
	},
	plugins: removeEmpty([
		// Define global variables for webpack and its plugins
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		}),

		// Dump bundled CSS into one file
		new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),

		// JS minification
		ifProduction(new webpack.optimize.UglifyJsPlugin({
			comments: false,
			mangle: true,
			sourceMap: true,
			compress: {
				unused: true,
				warnings: false,
				comparisons: true,
				conditionals: true,
				// For `v8LazyParse()`
				negate_iife: false,
				dead_code: true,
				if_return: true,
				join_vars: true,
				evaluate: true,
				screw_ie8: true,
			},
		})),
	]),
	devtool: 'source-map',
	stats: { children: false }, // Hide log spams from child plugins
};
