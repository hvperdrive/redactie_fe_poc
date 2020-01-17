import React, { FC } from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';

import { wcmCore } from '@wcm/core-module';

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

const ModuleRouteComponent: FC = () => {
	const match = useRouteMatch();

	return (
		<div>
			<h1>External Module Route</h1>

			<nav>
				<Link to={`${match.path}/child-route`}> child route </Link>
			</nav>
			<Switch>
				<Route path={`${match.path}/child-route`} component={ChildRouteComponent}/>
			</Switch>
		</div>
	)
};

/**
 * path
 * component
 * label (translation)
 * type
 * order
 * routes
 * 	path
 * 	component
 * 	label (translation)
 * 	routes
 */

wcmCore.registerRoute({
	path: '/external-module',
	component: ModuleRouteComponent,
});

wcmCore.exposeModuleApi('external-module', {
	someprop: 'custom api prop',
});

export default {
	mainRouteComponent: ModuleRouteComponent,
};
