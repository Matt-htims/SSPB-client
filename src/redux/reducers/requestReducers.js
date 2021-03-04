import * as actionTypes from '../constants/requestConstants';

export const requestReducer = (state = { props: [] }, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			for (let prop of state.props) {
				if (action.payload._id === prop._id) {
					return {
						...state,
					};
				}
			}
			return {
				props: [...state.props, action.payload],
			};
		case actionTypes.REMOVE_FROM_CART:
			const result = state.props.filter(prop => prop._id !== action.payload);
			return {
				...state,
				props: [...result],
			};
		case actionTypes.RESET_CART:
			return {
				props: [],
			};
		default:
			return state;
	}
};
