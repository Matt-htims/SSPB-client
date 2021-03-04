import { useDispatch } from 'react-redux';

import { removeFromRequest } from '../redux/actions/requestActions';

const RequestProp = ({ propId, propCode, description, size, hireCost }) => {
	const dispatch = useDispatch();

	//  Handlers
	const removeFromRequestHandler = () => {
		dispatch(removeFromRequest(propId));
	};
	return (
		<div className="requestProp">
			<div className="requestProp__container">
				<div className="requestProp__image">
					<img
						src={`https://cdn.image4.io/gallon/${propCode}.jpg`}
						alt="board"
					/>
				</div>
				<div className="requestProp__textcontainer">
					<div className="requestProp__text">
						<h4>{propCode}</h4>
						<p className="description">{description}</p>
						<p>{size}</p>
						<p>{hireCost}</p>
						<div className="button">
							<button
								onClick={removeFromRequestHandler}
								className="icon-btn add-btn"
							>
								<div className="btn-txt">Remove</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestProp;
