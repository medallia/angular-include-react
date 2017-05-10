const FLIP = 'FLIP';
const INITIAL_STATE = {
	flipped: false,
};

function reducer(state = INITIAL_STATE, action) {
	if (action.type === FLIP) {
		return {
			flipped: !state.flipped,
		};
	}

	return state;
}

function flip() {
	return {
		type: FLIP,
	};
}

export {
	reducer,
	flip,
};
