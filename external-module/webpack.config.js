const path = require('path');
const RedactionWebpackPlugin = require('redaction-webpack-plugin');

module.exports = {
	entry: './public/index.tsx',
	output: {
		filename: 'external-module.umd.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
		],
	},
	plugins: [
		new RedactionWebpackPlugin()
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	externals: {
		react: 'react',
		'@wcm/core-module': '@wcm/core-module',
		'react-router-dom': 'react-router-dom',
	},
};
