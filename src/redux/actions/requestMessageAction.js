import * as actionTypes from '../constants/requestMessageConstants';

export const setMessageFalse = () => dispatch => {
	dispatch({
		type: actionTypes.SET_MESSAGESHOW_FALSE,
	});
};

export const setMessageTrue = () => dispatch => {
	dispatch({
		type: actionTypes.SET_MESSAGESHOW_TRUE,
	});
};
