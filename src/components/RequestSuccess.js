import React from 'react';
import { useDispatch } from 'react-redux';

import { setMessageFalse } from '../redux/actions/requestMessageAction';

import cross from '../public/cross.svg';

//	Animations
import { motion } from 'framer-motion';
import { fade } from '../animation';

const RequestSuccess = () => {
	const dispatch = useDispatch();

	//	Handlers
	const closeMessageHandler = () => {
		dispatch(setMessageFalse());
	};
	return (
		<motion.div variants={fade} className="requestsuccess">
			<img onClick={closeMessageHandler} src={cross} alt="close" />
			<div className="requestsuccess__container">
				<div className="requestsuccess__title">
					<h1>Request success</h1>
				</div>
				<div className="requestsuccess__body">
					<p>
						Thanks for the request, we will get back to you as soon as possible.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default RequestSuccess;
