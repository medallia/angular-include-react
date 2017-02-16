import IncludeReactController from './include-react-controller';

/**
 * This angular component renders a React component inside. The component to be rendered should have been pre-registered
 * by name into the IncludeReactService. The component rendered will have access to the redux store, that will be
 * obtained through $ngRedux service.
 */
export default {
	bindings: {
		component: '@',
	},
	controller: IncludeReactController,
};
