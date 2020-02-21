import React, { FC } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import Core, { ModuleRouteConfig } from '@redactie/redactie-core';

const ChildRouteComponent: FC = () => (
	<div>
		<h3> Child route </h3>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis incidunt in eum
			modi pariatur accusantium. Inventore asperiores id molestiae expedita laborum iusto
			sequi corrupti. Beatae eius atque numquam rerum?
		</p>
	</div>
);

const ModuleRouteComponent: FC<{ route: ModuleRouteConfig }> = ({ route }) => {
	const match = useRouteMatch();
	return (
		<div>
			<h1>External Module Route</h1>

			<nav>
				<Link to={`${match.path}/child`}> child route </Link>
			</nav>
			{Core.routes.render(route.routes as any)}
		</div>
	)
};

Core.modules.exposeModuleApi('external-demo-module', {
	someprop: 'custom api prop',
});

const sitesModule = Core.modules.getModuleAPI('sites-module');

if (sitesModule) {
	sitesModule.routes.register({
		path: '/external-demo',
		component: ModuleRouteComponent,
		label: 'External Demo',
		routes: [
			{
				path: '/external-demo/child',
				component: ChildRouteComponent
			}
		]
	});
}

export default {
	mainRouteComponent: ModuleRouteComponent,
};
