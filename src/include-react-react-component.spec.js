import IncludeReactReactComponent from './include-react-react-component';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

chai.use(chaiEnzyme());

describe('IncludeReact react component', function() {
	let MockComponent;
	let mockStore;

	beforeEach(function() {
		MockComponent = function MyComponent() { };
		mockStore = { };
	});

	it('should wrapp component with store provider', function() {
		// this test almost duplicates the component implementation, but it clearly shows its API
		const wrapper = shallow(
			<IncludeReactReactComponent component={MockComponent} store={mockStore}/>
		);

		expect(wrapper).to.contain(<Provider store={mockStore}><MockComponent/></Provider>);
	});
});
