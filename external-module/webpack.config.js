const path = require('path');
const RedactionWebpackPlugin = require('@redactie/module-webpack-plugin');

module.exports = env => {
	const defaultConfig = {
		mode: 'production',
		devtool: 'source-map',
		entry: './public/index.tsx',
		performance: {
			hints: false,
		},
		module: {
			rules: [
				{
					test: /\.ts(x)?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			// add default plugins here
		],
		externals: {
			react: 'react',
			'react-dom': 'react-dom',
			'react-router-dom': 'react-router-dom',
			'@redactie/redactie-core': '@redactie/redactie-core',
		},
		output: {
			filename: 'external-module.umd.js',
			path: path.resolve(__dirname, 'dist'),
			libraryTarget: 'umd',
		},
	};

	if (env.analyse) {
		return {
			...defaultConfig,
			plugins: [...defaultConfig.plugins, new BundleAnalyzerPlugin()],
		};
	}

	if (env.prod) {
		return {
			...defaultConfig,
			plugins: [
				...defaultConfig.plugins,
				new RedactionWebpackPlugin({
					moduleName: 'external-demo-module',
				}),
			],
		};
	}

	return defaultConfig;
};
