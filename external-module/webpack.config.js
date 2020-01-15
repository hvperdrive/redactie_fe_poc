const path = require('path');

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
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	externals: {
		react: 'React',
	},
};
