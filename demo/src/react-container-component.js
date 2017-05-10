import { connect } from 'react-redux';
import { flip } from './store';
import ReactComponent from './react-component';

/**
 * React container component, that connects to redux to get a 'flip' action bound to the dispatch function, and takes the the current flip state.
 *
 * This is a standard container component in an application with react-redux.
 */
export default connect(
	(state) => ({ flipped: state.flipped }),
	(dispatch) => ({ flip: () => dispatch(flip()) })
)(ReactComponent);
