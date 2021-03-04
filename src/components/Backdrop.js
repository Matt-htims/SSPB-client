import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

//	Actions
import { setMessageFalse } from '../redux/actions/requestMessageAction';

const Backdrop = ({ show, click, propShow, setMenuToggle }) => {
	const dispatch = useDispatch();
	const requestSuccessMessage = useSelector(state => state.requestMessage);

	const history = useHistory();
	const showElement = show || propShow || requestSuccessMessage;

	const close = () => setMenuToggle(false);

	const showHandler = e => {
		if (propShow) {
			history.push('/props');
			close();
		} else if (requestSuccessMessage) {
			dispatch(setMessageFalse());
		} else {
			close();
		}
	};

	return showElement ? (
		<div className="backdrop" onClick={showHandler}></div>
	) : null;
};

export default Backdrop;
