import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ReactRouterDom from 'react-router-dom';
import { wcmCore } from '@wcm/core-module';

import { moduleLoader } from './module-loader';
import Home from './Home';
import logo from './logo.svg';

declare global {
	interface Window {
		MODULE_LOADER: any;
	}
}

const App: FC = () => {
	window.MODULE_LOADER = moduleLoader;

	const [modulesLoaded, setModulesLoaded] = useState(false);

	// Get modules config from server
	const modulesConfig = useMemo(() => [{
		jsPath: `${process.env.PUBLIC_URL}/module.js`,
		machineName: 'external-module',
		navigationLabel: 'external-module',
	},
	{
		jsPath: `${process.env.PUBLIC_URL}/module-2.js`,
		machineName: 'external-module-2',
		navigationLabel: 'external-module-2',
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

	const renderRoutes = () => {
		const routes = wcmCore.getRoutes();

		return routes.map((route, index) => (
			<Route key={index} path={route.path} component={route.component}/>
		));
	}

	const renderNavigationItems = () => {
		return modulesConfig.map((moduleConfig, index) => {

			const label = moduleConfig.navigationLabel;
			const path = `/${moduleConfig.machineName}`;

			if (path) {
			return <Link key={index} to={path}>{label}</Link>
			}

			return null;
		});
	}

	return (
		<Router>
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
					<Switch>
						{ modulesLoaded && renderRoutes() }
						{ modulesLoaded && <Route path="/" component={Home}/> }
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
