import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

//  Actions
import { resetRequest } from '../redux/actions/requestActions';

//  Components
import RequestProp from '../components/RequestProp';
import RequestInfo from '../components/RequestInfo';
import ScrollTop from '../components/ScrollTop';

//	Animations
import { motion } from 'framer-motion';
import { lineAnimation, pageAnimation, fade } from '../animation';

const RequestScreen = () => {
	const dispatch = useDispatch();
	const propRequest = useSelector(state => state.request);
	const { props } = propRequest;

	const [cost, setCost] = useState(0);

	const propCost = () => {
		let totalCost = 0;
		for (let prop of props) {
			totalCost += Number(prop.hireCost.slice(1));
		}
		setCost(totalCost);
	};

	useEffect(() => {
		propCost();
	}, [props]);

	//  Handlers
	const resetRequestHandler = () => {
		dispatch(resetRequest());
	};

	return (
		<>
			<ScrollTop />
			<motion.div
				variants={pageAnimation}
				exit="exit"
				initial="hidden"
				animate="show"
				className="requestscreen"
			>
				<div className="requestscreen__title">
					<motion.div variants={fade} className="requestscreen__titletext">
						<h1>Check availability</h1>
						<div className="requestscreen__titlenum">
							<h3>
								{props.length ? props.length : 0}{' '}
								{props.length === 1 ? 'item' : 'items'}
							</h3>
							<h3>£{cost} per week</h3>
						</div>
					</motion.div>

					<motion.div variants={lineAnimation} className="line"></motion.div>
				</div>
				<div className="requestscreen__main">
					<motion.div variants={fade} className="requestscreen__main-props">
						{props &&
							props.map(prop => (
								<RequestProp
									propId={prop._id}
									key={prop._id}
									propCode={prop.code}
									description={prop.description}
									size={prop.size}
									hireCost={prop.hireCost}
								/>
							))}
					</motion.div>
					<motion.div variants={fade} className="requestscreen__main-info">
						<RequestInfo />
					</motion.div>
				</div>
				{props.length ? (
					<div className="requestscreen__button">
						<button onClick={resetRequestHandler}>
							<div>Remove all</div>
						</button>
					</div>
				) : (
					''
				)}
			</motion.div>
		</>
	);
};

export default RequestScreen;
