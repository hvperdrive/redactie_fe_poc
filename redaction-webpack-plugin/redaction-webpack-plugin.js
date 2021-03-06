const ConcatSource = require("webpack-sources").ConcatSource;

class RedactionWebpackPlugin {

	constructor() {}

	apply(compiler) {
		compiler.hooks.compilation.tap('RedactionWebpackPlugin', (compilation) => {
			compilation.hooks.afterOptimizeChunkAssets.tap('RedactionWebpackPlugin', (chunks) => {
				this.wrapChunks(compilation, chunks);
			});
		});
	}

	wrapChunks(compilation, chunks) {
		for (const chunk of chunks) {
			if (!chunk.rendered) {
				// Skip already rendered (cached) chunks
				// to avoid rebuilding unchanged code
				continue;
			}

			for (const fileName of chunk.files) {
				this.wrapFile(compilation, fileName);
			}
		}
	}

	wrapFile(compilation, fileName) {
		const header = `window.MODULE_LOADER.addModuleSource('external-module', (require, exports) => {return `;
		const footer = `})`

		compilation.assets[fileName] = new ConcatSource(
			String(header),
			compilation.assets[fileName],
			String(footer)
		);
	}
}

module.exports = RedactionWebpackPlugin;
