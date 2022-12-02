import React from 'react';
import { Link } from 'react-router-dom';

//	Animations
import { motion } from 'framer-motion';
import { popup } from '../animation';

const Prop = ({ propId, propCode, description }) => {
	return (
		<>
			<Link to={`/props/${propId}`} className="prop__link">
				<motion.div
					variants={popup}
					initial="hidden"
					animate="show"
					className="prop__container"
				>
					<div className="prop">
						<div className="prop__image">
							<img
								src={`https://res.cloudinary.com/gallon/image/upload/v1615035731/${propCode}.jpg`}
								alt="board"
							/>
						</div>
						<div className="prop__textcontainer">
							<div className="prop__text">
								<h4>{propCode}</h4>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	);
};

export default Prop;
