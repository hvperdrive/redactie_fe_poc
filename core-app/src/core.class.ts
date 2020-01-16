import { FunctionComponent } from "react";
import * as ReactModule from 'react';
import { get } from 'scriptjs';

export interface IModuleAPI {
	mainRouteComponent?: FunctionComponent;
}

class Core {
	private moduleSources: {[key: string]: any} = {};
	private modules: {[key: string]: any} = {};

	public exposeModuleApi(name: string, api: IModuleAPI): void {
		if (this.modules[name]) {
			// TODO: Throw error? API already exist
			return;
		}

		this.modules[name] = api;
	}

	public getModuleAPI(name: string): IModuleAPI {
		return this.modules[name];
	}

	public addModuleSource(name: string, source: any) {
		this.moduleSources[name] = source;
	}

	public getModuleSource(name: string): any {
		return this.moduleSources[name];
	}

	public loadModules(moduleConfigs: { jsPath: string, machineName: string }[]): Promise<any> {
		if (Array.isArray(moduleConfigs) && moduleConfigs.length === 0) {
			return Promise.resolve();
		}

		const promises = moduleConfigs.map((moduleConfig) => this.loadModule(moduleConfig.jsPath, moduleConfig.machineName));
		return Promise.all(promises);
	}

	public loadModule(path: string, moduleName: string): Promise<any> {
		return new Promise((resolve, reject) => {
			get(path, () => {
				this.compileSource(this.moduleSources[moduleName]).then((result) => {
					resolve(result);
				}, reject);
			});
		});
	}

	private compileSource(source: any): Promise<any> {
		const modules: {[key: string]: any} = {
			'React': ReactModule,
		};

		const require = (module: string) => modules[module];

		try {
			const exports = {};
			const result = source(require, exports);
			console.log(exports, result);
			return Promise.resolve({
				result,
				exports,
				require
			});
		}
		catch (e) {
			return Promise.reject(e);
		}
	}
}

export const core = new Core();
