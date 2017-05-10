/**
 * Angular component, capable of triggering a 'flip' action, and showing the current flip state
 *
 * This is a standard presentational component in an application with ng-redux.
 */
export default {
	bindings: {
		flipped: '<',
		flip: '&',
	},
	template: `
		<div>
			<span>{{ $ctrl.flipped ? 'Flipped' : 'Normal' }}</span>
			<button type="button" ng-click="$ctrl.flip()">Flip!</button>
		</div>
	`,
};
