import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

//  Components
import Prop from '../components/Prop';

//	Redux
import { useSelector, useDispatch } from 'react-redux';
import {
	getProps as listProps,
	updateProps,
} from '../redux/actions/propActions';
import { updateCategory } from '../redux/actions/categoryActions';

const PropscreenPropContainer = () => {
	//	Media Queries
	const oneWide = useMediaQuery({ query: '(max-width: 683px)' });
	const twoWide = useMediaQuery({ query: '(max-width: 1388px)' });
	const threeWide = useMediaQuery({ query: '(max-width: 1848px)' });
	const fourWide = useMediaQuery({ query: '(max-width: 2308px)' });

	const scrollToRef = ref =>
		window.scrollTo({
			top:
				ref.current.scrollHeight -
				(oneWide
					? 9500
					: twoWide
					? 5000
					: threeWide
					? 4500
					: fourWide
					? 3500
					: 3000),
		});

	const dispatch = useDispatch();
	const getProps = useSelector(state => state.getProps);
	const { props, loading, error, pageDetails } = getProps;

	useEffect(() => {
		dispatch(updateCategory('all'));
		dispatch(listProps());
	}, [dispatch]);

	const propContainer = useRef(null);

	useEffect(() => {
		scrollToRef(propContainer);
	}, [props, loading]);

	//	Doing something on scroll

	// const loadMore = () => {
	// 	if (props.hasNextPage) {
	// 		dispatch(updateProps(props.nextPage + 1));
	// 		setIsFetching(false);
	// 	}
	// };

	// const [isFetching, setIsFetching] = useState(false);
	// const [page, setPage] = useState(2);
	// useEffect(() => {
	// 	if (!loading && props.nextPage >= 3) {
	// 		window.scrollTo(
	// 			0,
	// 			document.querySelector('.propsscreen__props').scrollHeight - 7500
	// 		);
	// 	}
	// }, [loading]);

	// useEffect(() => {
	// 	if (isFetching) {
	// 		if (pageDetails && pageDetails.hasNextPage) {
	// 			dispatch(updateProps(pageDetails.nextPage));
	// 			// window.scrollTo(
	// 			// 	0,
	// 			// 	document.querySelector('.footer').scrollHeight - 1000
	// 			// );
	// 			setIsFetching(false);
	// 		}
	// 	}
	// }, [isFetching]);

	// const handleScroll = () => {
	// 	if (
	// 		!isFetching &&
	// 		window.innerHeight + document.documentElement.scrollTop !==
	// 			document.documentElement.offsetHeight
	// 	)
	// 		return;
	// 	setIsFetching(true);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<div className="propsscreen__props" ref={propContainer}>
			{props && (
				<>
					{loading ? (
						<h2>Loading...</h2>
					) : error ? (
						<h2>{error}</h2>
					) : (
						props &&
						props.map(prop => (
							<Prop
								propId={prop._id}
								key={prop._id}
								propCode={prop.code}
								description={prop.description}
								number={prop.number}
							/>
						))
					)}
				</>
			)}
		</div>
	);
};

export default PropscreenPropContainer;
