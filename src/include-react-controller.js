import ReactDOM from 'react-dom';
import React from 'react';
import IncludeReactReactComponent from './include-react-react-component';

/**
 * This controller is responsible for rendering the React component into an angular component, and doing the
 * corresponding cleanup when the angular component is destroyed.
 */
export default class IncludeReactController {
	constructor($element, includeReact, $ngRedux) {
		this.$element = $element;
		this.includeReactService = includeReact;
		this.$ngRedux = $ngRedux;
	}

	$postLink() {
		// $ngRedux API is fully compatible with redux store API
		this.mountComponent(this.includeReactService.getComponent(this.component), this.$element, this.$ngRedux);
	}

	$onDestroy() {
		this.unmountComponent(this.$element);
	}

	mountComponent(component, element, store) {
		const props = { store, component };
		ReactDOM.render(React.createElement(IncludeReactReactComponent, props), element[0]);
	}

	unmountComponent(element) {
		ReactDOM.unmountComponentAtNode(element);
	}
}
