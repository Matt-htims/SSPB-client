import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import emailjs, { init } from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//	Actions
import { resetRequest } from '../redux/actions/requestActions';
import { setMessageTrue } from '../redux/actions/requestMessageAction';

//  Components
import RequestSuccess from '../components/RequestSuccess';

//	Form validations
const validationSchema = Yup.object().shape({
	email: Yup.string().email().required('Email is required'),
	name: Yup.string().required('Name is required'),
	number: Yup.number().required('Phone number is required'),
});

const initialValues = {
	name: '',
	email: '',
	number: '',
};

init('user_FiCHL0g9Wh5oDIJ5uqFXJ');

const RequestInfo = () => {
	const dispatch = useDispatch();
	//  Redux state
	const { props } = useSelector(state => state.request);
	const requestSuccessMessage = useSelector(state => state.requestMessage);

	return (
		<>
			{requestSuccessMessage && <RequestSuccess />}
			<div className="requestinfo">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values, { resetForm }) => {
						const { name, email, number } = values;
						if (props.length > 0) {
							const propsList = props.map(prop => prop.code + '   ');
							try {
								emailjs.send('service_wnuxll9', 'template_xwcldoo', {
									user_email: email,
									user_name: name,
									user_number: number,
									props: propsList,
								});
							} catch (error) {
								console.error(error);
								return alert('Server error');
							}

							dispatch(setMessageTrue());
							dispatch(resetRequest());
							resetForm();
						} else {
							alert('You do not have anything added to the request!');
						}
					}}
				>
					{formik => {
						const { errors, touched, isValid, dirty } = formik;
						return (
							<div className="container">
								<h1 className="requestinfo__title">Enter your details</h1>
								<Form>
									<div className="form-row">
										<Field
											type="name"
											name="name"
											id="name"
											placeholder="Name"
											className={
												errors.name && touched.name ? 'input-error' : null
											}
										/>
										<ErrorMessage
											name="name"
											component="span"
											className="error"
										/>
									</div>

									<div className="form-row">
										<Field
											type="email"
											name="email"
											id="email"
											placeholder="Email"
											className={
												errors.email && touched.email ? 'input-error' : null
											}
										/>
										<ErrorMessage
											name="email"
											component="span"
											className="error"
										/>
									</div>

									<div className="form-row">
										<Field
											type="number"
											name="number"
											id="number"
											placeholder="Phone number"
											className={
												errors.number && touched.number ? 'input-error' : null
											}
										/>
										<ErrorMessage
											name="number"
											component="span"
											className="error"
										/>
									</div>

									<button
										type="submit"
										className={!(dirty && isValid) ? 'disabled-btn' : ''}
										disabled={!(dirty && isValid)}
									>
										Send request
									</button>
								</Form>
							</div>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default RequestInfo;
