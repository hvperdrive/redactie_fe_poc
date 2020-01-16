import { FunctionComponent } from "react";

export interface ModuleAPI {
	mainRouteComponent?: FunctionComponent;
	[key: string]: any;
}

export interface ModuleRouteConfig {
	path: string;
	component: FunctionComponent;
	type?: string;
	order?: number;
}
