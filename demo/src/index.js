import angular from 'angular';
import ngRedux from 'ng-redux';
import angularIncludeReact from '../../.';
import angularComponent from './angular-component';
import angularContainerComponent from './angular-container-component';

import { reducer } from './store';
import ReactContainerComponent from './react-container-component';

/** This demo file shows the integration of angular-include-react library into the angular application */

const ngModule = angular.module('angular-include-react-demo', [
	// Add react include angular module as a dependency
	angularIncludeReact,
	ngRedux,
]);

ngModule.component('angularContainerComponent', angularContainerComponent);
ngModule.component('angularComponent', angularComponent);

ngModule.config(function($ngReduxProvider) {
	$ngReduxProvider.createStoreWith(
		reducer
	);
});

// Inject includeReact service into a run function in your module
ngModule.run(function(includeReact) {
	// Register a react container component with an arbitrary name into the include-react registry.
	// The component won't receive any props, so its must be able to fetch its entire state from the redux store.
	includeReact.registerComponent('react-component', ReactContainerComponent);
});
