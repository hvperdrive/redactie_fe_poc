import * as ReactModule from 'react';
import { get } from 'scriptjs';

class ModuleLoader {
	private moduleSources: { [key: string]: any } = {};

	public addModuleSource(name: string, source: any) {
		this.moduleSources[name] = source;
	}

	public getModuleSource(name: string): any {
		return this.moduleSources[name];
	}

	public loadModules(moduleConfigs: { jsPath: string, machineName: string }[], deps: { [key: string]: any }): Promise<any> {
		if (Array.isArray(moduleConfigs) && moduleConfigs.length === 0) {
			return Promise.resolve();
		}

		const promises = moduleConfigs.map((moduleConfig) => this.loadModule(moduleConfig.jsPath, moduleConfig.machineName, deps));
		return Promise.all(promises);
	}

	public loadModule(path: string, moduleName: string, deps: { [key: string]: any }): Promise<any> {
		return new Promise((resolve, reject) => {
			get(path, () => {
				this.compileSource(this.moduleSources[moduleName], deps).then((result) => {
					resolve(result);
				}, reject);
			});
		});
	}

	private compileSource(source: any, deps: { [key: string]: any }): Promise<any> {
		const modules: { [key: string]: any } = {
			'react': ReactModule,
			...deps,
		};

		const require = (module: string) => modules[module];

		try {
			const exports = {};
			const result = source(require, exports);

			return Promise.resolve({
				result,
				exports,
				require
			});
		}
		catch (e) {
			console.log("error", e)
			return Promise.reject(e);
		}
	}
}

export const moduleLoader = new ModuleLoader();
