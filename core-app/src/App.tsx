import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as ReactRouterDom from 'react-router-dom';
import { wcmCore } from '@wcm/core-module';

import { moduleLoader } from './module-loader';
import Home from './components/Home/Home';
import logo from './logo.svg';

declare global {
	interface Window {
		MODULE_LOADER: any;
	}
}

const App: FC = () => {
	window.MODULE_LOADER = moduleLoader;

	const [modulesLoaded, setModulesLoaded] = useState(false);
	const routes = [
		...wcmCore.getRoutes(),
		{
			path: '/',
			component: Home,
		},
	];

	console.log(routes);

	// Get modules config from server
	const modulesConfig = useMemo(() => [{
		jsPath: `${process.env.PUBLIC_URL}/module.js`,
		machineName: 'external-module',
	}], []);

	useEffect(() => {
		const deps = {
			'@wcm/core-module': { wcmCore },
			'react-router-dom': ReactRouterDom,
		};
		moduleLoader.loadModules(modulesConfig, deps).then(() => {
			setModulesLoaded(true);
		});

	}, [modulesConfig]);

	const renderNavigationItems = () => {
		const routes = wcmCore.getRoutes();
		return routes.map((route, index) => <Link key={index} to={route.path}>{ route.label }</Link>)
	}

	return (
		<div className="redactie-poc">
			<div className="redactie-poc__sidebar">
				<header>
					<Link to="/">
						<img src={logo} alt="logo" />
						<span>Redactie (poc)</span>
					</Link>
				</header>
				<nav>
					{ modulesLoaded && renderNavigationItems() }
				</nav>
			</div>
			<div className="redactie-poc__main">
				{ modulesLoaded && wcmCore.renderRoutes(routes as any) }
			</div>
		</div>
	);
}

export default App;
