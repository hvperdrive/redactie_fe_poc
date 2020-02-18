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
				<Link to={`${match.path}/add`}> child route </Link>
			</nav>
			{Core.routes.render(route.routes as any)}
		</div>
	)
};

Core.routes.register({
	path: '/content',
	component: ModuleRouteComponent,
	label: 'Content',
	routes: [
		{
			path: '/content/add',
			component: ChildRouteComponent
		}
	]
});

Core.modules.exposeModuleApi('external-module', {
	someprop: 'custom api prop',
});

export default {
	mainRouteComponent: ModuleRouteComponent,
};
