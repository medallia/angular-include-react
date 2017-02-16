import React from 'react';
import PropTypes from 'prop-types';
import './react-component.scss';

/**
 * React component, capable of triggering a 'flip' action, and showing the current flip state.
 *
 * This is a standard presentational component in an application with react-redux.
 */
class ReactComponent extends React.Component {
	render() {
		const { flipped, flip } = this.props;
		const className = `react-component ${flipped ? 'react-component--flipped' : ''}`;

		return (
			<img className={ className } src="/angular-include-react-logo.jpg" onClick={flip}/>
		);
	}
}

ReactComponent.propTypes = {
	flipped: PropTypes.bool,
	flip: PropTypes.func,
};

export default ReactComponent;
