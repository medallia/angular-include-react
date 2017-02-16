import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

/** This HOC wraps the given component into a react-redux's Provide component, so it can access the given store. */
function IncludeReactReactComponent(props) {
	const Component = props.component;

	return (<Provider store={props.store}><Component/></Provider>);
}

IncludeReactReactComponent.propTypes = {
	component: PropTypes.func,
	store: PropTypes.object,
};

export default IncludeReactReactComponent;
