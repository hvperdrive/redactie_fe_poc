import { ModuleAPI, ModuleRouteConfig } from './core.types';

class WCMCore {
	private modules: {[key: string]: any} = {};
	private routes: ModuleRouteConfig[] = [];

	public exposeModuleApi(name: string, api: ModuleAPI): void {
		if (this.modules[name]) {
			return;
		}

		this.modules[name] = api;
	}

	public getModuleAPI(name: string): ModuleAPI {
		return this.modules[name];
	}

	public registerRoute(routeConfig: ModuleRouteConfig): void {
		// TODO: validate routeConfig
		if (routeConfig) {
			this.routes.push(routeConfig);
		}
	}

	public getRoutes(): ModuleRouteConfig[] {
		return this.routes;
	}
}

export const wcmCore = new WCMCore();
