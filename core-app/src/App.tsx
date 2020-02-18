import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as ReactRouterDom from 'react-router-dom';
import Core from '@redactie/redactie-core';

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
		...Core.routes.getAll(),
		{
			path: '/',
			component: Home,
		},
	];

	// Get modules config from server
	const modulesConfig = useMemo(() => [
		{
			jsPath: `${process.env.PUBLIC_URL}/module.js`,
			machineName: 'external-module',
		},
		{
			jsPath: `${process.env.PUBLIC_URL}/redactie-form-renderer.js`,
			machineName: 'redactie-form-renderer',
		},
		{
			jsPath: `${process.env.PUBLIC_URL}/redactie-ckeditor.js`,
			machineName: 'redactie-ckeditor',
		}
	], []);

	useEffect(() => {
		const deps = {
			'@redactie/redactie-core': Core,
			'react-router-dom': ReactRouterDom,
		};
		moduleLoader.loadModules(modulesConfig, deps).then(() => {
			setModulesLoaded(true);
		});

	}, [modulesConfig]);

	const renderNavigationItems = () => {
		const routes = Core.routes.getAll();
		return routes.map((route: any, index: any) => <Link key={index} to={route.path}>{route.label}</Link>)
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
					{modulesLoaded && renderNavigationItems()}
				</nav>
			</div>
			<div className="redactie-poc__main">
				{modulesLoaded && Core.routes.render(routes as any)}
			</div>
		</div>
	);
}

export default App;
