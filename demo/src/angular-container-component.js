import { flip } from './store';

/**
 * Angular container component, that connects to redux to get a 'flip' action bound to the dispatch function, and takes the the current flip state.
 *
 * This is a standard container component in an application with ng-redux.
 */
export default {
	controller: class AngularContainerComponentController {
		constructor($ngRedux) {
			this._$ngRedux = $ngRedux;
		}

		$onInit() {
			this._disconnect = this._$ngRedux.connect(
				(state) => ({ flipped: state.flipped }),
				{ flip }
			)(this);
		}

		$onDestroy() {
			this._disconnect();
		}
	},
	template: '<angular-component flipped="$ctrl.flipped" flip="$ctrl.flip()"></angular-component>',
};
