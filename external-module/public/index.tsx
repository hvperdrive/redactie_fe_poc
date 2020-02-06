import React, { FC } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { wcmCore, ModuleRouteConfig } from '@wcm/core-module';

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
			{ wcmCore.renderRoutes(route.routes as any) }
		</div>
	)
};

wcmCore.registerRoute({
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

wcmCore.exposeModuleApi('external-module', {
	someprop: 'custom api prop',
});

export default {
	mainRouteComponent: ModuleRouteComponent,
};
