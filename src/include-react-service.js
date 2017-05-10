/**
 * This service is used to pre-register React components under certain name, so they can be rendered with the
 * include-react directive.
 */
export default function includeReactServiceFactory($cacheFactory) {
	const cache = $cacheFactory('includeReactComponents');

	return {
		registerComponent: (name, component) => cache.put(name, component),
		getComponent: (name) => cache.get(name),
	};
}
