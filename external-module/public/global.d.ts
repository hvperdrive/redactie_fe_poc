interface Window {
	CORE: {
		exposeModuleApi: (name: string, api: { [key: string]: any }) => void;
	}
}
