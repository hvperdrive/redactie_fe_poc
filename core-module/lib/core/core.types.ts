import React, { FunctionComponent } from "react";
import { Location, RouteComponentProps } from 'react-router-dom';

export interface ModuleAPI {
	mainRouteComponent?: FunctionComponent;
	[key: string]: any;
}

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}> extends RouteComponentProps<Params> {
    route?: ModuleRouteConfig;
}

export interface ModuleChildRouteConfig {
	key?: React.key;
	location?: Location;
	path: string;
	component: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType;
	label?: string;
	routes?: ModuleChildRouteConfig[];
	render?: (props: RouteConfigComponentProps<any>) => React.ReactNode;
}

export interface ModuleRouteConfig extends ModuleChildRouteConfig {
	type?: string;
	order?: number;
	[propName: string]: any;
}
