import includeReactServiceFactory from './include-react-service';
import { expect } from 'chai';

describe('IncludeReact service', function() {
	let ReactComponent;
	let includeReact;

	beforeEach(function() {
		ReactComponent = function MyComponent() {};
		const cacheFactoryMock = function() {
			const cache = {};

			return {
				get: (key) => cache[key],
				put: (key, value) => cache[key] = value,
			};
		};

		includeReact = includeReactServiceFactory(cacheFactoryMock);
	});

	it('should register component', function() {
		includeReact.registerComponent('myComponent', ReactComponent);
		expect(includeReact.getComponent('myComponent')).to.equal(ReactComponent);
	});
});
