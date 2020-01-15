import React, { FC } from 'react';

class CoreApi {
	public exposeModuleApi(name: string, api: { [key:string]: any }) {
		if (window.CORE && window.CORE.exposeModuleApi) {
			window.CORE.exposeModuleApi(name, api);
		}
	}
}

const coreApi = new CoreApi();

const ModuleRouteComponent: FC = () => (
	<div>
		<h1>External Module Route</h1>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis incidunt in eum
			modi pariatur accusantium. Inventore asperiores id molestiae expedita laborum iusto
			sequi corrupti. Beatae eius atque numquam rerum?
		</p>
	</div>
);

coreApi.exposeModuleApi('external-module', {
	mainRouteComponent: ModuleRouteComponent,
});

export default {
	mainRouteComponent: ModuleRouteComponent,
};
