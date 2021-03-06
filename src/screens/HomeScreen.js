import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getPropDetails } from '../redux/actions/propActions';

//	Images
import beans from '../public/beans.jpeg';
import buns from '../public/buns.jpeg';
import cheesecake from '../public/cheesecake.jpeg';
import macncheese from '../public/macncheese.jpeg';
import omelette from '../public/omelette.jpeg';
import soup from '../public/soup.jpeg';
import collage from '../public/collage.jpg';
import logo from '../public/logoGrey.svg';
import arrow from '../public/arrowBlack.svg';

//	Components
import ScrollTop from '../components/ScrollTop';

//	Animation
import { motion } from 'framer-motion';
import {
	pageAnimation,
	photoAnimation,
	titleAnimation,
	scrollReveal,
	fade,
} from '../animation';

const scrollToRef = ref =>
	window.scrollTo({ top: ref.current.offsetTop - 150, behavior: 'smooth' });

const HomeScreen = () => {
	//	Scroll to seenin section
	const seenIn = useRef(null);
	const arrowHandler = () => {
		scrollToRef(seenIn);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPropDetails('603909d81b50fc0d88ef9d6c'));
	}, []);
	return (
		<motion.div
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
			className="homescreen"
		>
			<ScrollTop />
			<div>
				<motion.div variants={titleAnimation} className="homescreen__title">
					<div className="homescreen__image">
						<img src={logo} alt="logo" />
					</div>
					<div className="homescreen__titletext">
						<h1>BACKGROUND HIRE</h1>
						<h4>Simon Smith Photography</h4>
					</div>
				</motion.div>
			</div>
			<div className="homescreen__collection">
				<div className="homescreen__collectionimage">
					<motion.img
						variants={photoAnimation}
						src={macncheese}
						alt="mac n cheese"
					/>
				</div>
				<motion.div variants={fade} className="homescreen__collection-body">
					<div className="homescreen__collection-bodytext">
						<h3>An Extensive Collection</h3>
						<h5>Backgrounds, boards, tables and more</h5>
						<p>
							Simon has a large collection of backgrounds to hire including
							woods, metals, marble, stone tiles, wooden boards, tables and
							other miscellaneous surfaces.
						</p>
						<p>
							Frequent visits to boot fairs and markets ensure that the
							collection is constantly expanding.
						</p>
						<div className="homescreen__collection-bodycollage">
							<img src={collage} alt="background collage" />
							<div className="button-container">
								<Link to="/props">
									<div className="homescreen__collection-body-button">
										<p id="button-text">Explore the collection</p>
									</div>
								</Link>
								<img onClick={arrowHandler} src={arrow} alt="arrow down" />
							</div>
						</div>
					</div>
				</motion.div>
			</div>
			<div className="homescreen__seenin" ref={seenIn}>
				<div className="homescreen__seenintext">
					<h1>As seen in...</h1>
					<h4>
						Our backgrounds <span>in action</span>
					</h4>
					<p>
						Simon is a food and drink photographer with over 20 years’
						experience.
					</p>
					<p>The backgrounds feature regularly in his shoots.</p>
				</div>
				<img src={soup} alt="soup" />
				<img src={cheesecake} alt="cheesecake" />

				<img src={beans} alt="baked beans" />
				<img src={buns} alt="chelsea buns" />
				<img src={omelette} alt="omelette" />
			</div>
		</motion.div>
	);
};

export default HomeScreen;
