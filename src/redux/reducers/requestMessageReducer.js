import * as actionTypes from '../constants/requestMessageConstants';

export const requestMessageReducer = (state = false, action) => {
	switch (action.type) {
		case actionTypes.SET_MESSAGESHOW_TRUE:
			return true;
		case actionTypes.SET_MESSAGESHOW_FALSE:
			return false;
		default:
			return state;
	}
};
