import * as React from 'react';
import { ModuleAPI, ModuleRouteConfig } from './core.types';
import { Switch, Route, SwitchProps } from 'react-router-dom';

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

	public renderRoutes(routes: ModuleRouteConfig[] | undefined, extraProps: any = {}, swicthProps: SwitchProps = {}): any {
		return routes ? (
			<Switch {...swicthProps}>
				{routes.map((route, index) => (
					<Route
						key={route.key || index}
						path={route.path}
						render={
							props => route.render ? (
								route.render({...props, ...extraProps, route: route})
							) : (
								<route.component {...props} {...extraProps} route={route}/>
							)
						}

					/>
				))}
			</Switch>
		) : null;
	}
}

export const wcmCore = new WCMCore();
