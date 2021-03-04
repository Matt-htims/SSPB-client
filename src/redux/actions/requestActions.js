import * as actionTypes from '../constants/requestConstants';

export const addToRequest = prop => dispatch => {
	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: prop,
	});
};

export const removeFromRequest = id => dispatch => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id,
	});
};

export const resetRequest = () => dispatch => {
	dispatch({
		type: actionTypes.RESET_CART,
	});
};
