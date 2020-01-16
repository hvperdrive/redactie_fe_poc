import { FunctionComponent } from "react";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IModuleAPI { // eslint
	mainRouteComponent?: FunctionComponent;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

class Core {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private modules: {[key: string]: any} = {};

	public exposeModuleApi(name: string, api: IModuleAPI): void {
		if (this.modules[name]) {
			return;
		}

		this.modules[name] = api;
	}

	public getModuleAPI(name: string): IModuleAPI {
		return this.modules[name];
	}
}

export const core = new Core();

