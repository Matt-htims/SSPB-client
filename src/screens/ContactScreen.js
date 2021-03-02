import React from 'react';

import logo from '../public/logoGrey.svg';
import phone from '../public/phoneBlack.svg';
import mail from '../public/mailBlack.svg';
import location from '../public/locationBlack.svg';
import camera from '../public/camera.svg';

import Map from '../components/Map';

//	Components
import ScrollTop from '../components/ScrollTop';

//	Animations
import { motion } from 'framer-motion';

import { lineAnimation, pageAnimation, fade } from '../animation';

const ContactScreen = () => {
	return (
		<>
			<ScrollTop />
			<motion.div
				variants={pageAnimation}
				exit="exit"
				initial="hidden"
				animate="show"
				className="contactscreen"
			>
				<div className="contactscreen__container">
					<motion.div variants={fade} className="contactscreen__title">
						<img src={logo} alt="" />
						<h2>Contact us</h2>
					</motion.div>
					<motion.div variants={lineAnimation} className="line"></motion.div>
					<div className="contactscreen__main">
						<motion.div variants={fade} className="contactscreen__contact">
							<div className="contactscreen__phone">
								<a href="tel:02087495888">
									<img src={phone} alt="" />
									<p>0208 749 5888</p>
								</a>
							</div>
							<motion.div variants={fade} className="contactscreen__email">
								<a href="mailto:simon@simonsmithphotography.com">
									<img src={mail} alt="" />
									<p>simon@simonsmithphotography.com</p>
								</a>
							</motion.div>
							<motion.div variants={fade} className="contactscreen__website">
								<a href="https://www.simonsmithphotography.co.uk">
									<img src={camera} alt="" />
									<p>www.simonsmithphotography.co.uk</p>
								</a>
							</motion.div>
							<motion.div variants={fade} className="contactscreen__location">
								<a
									target="_blank"
									href="https://www.google.com/maps/place/Simon+Smith+Photography/@51.5048292,-0.2584012,17z/data=!3m1!4b1!4m5!3m4!1s0x48760e23278e6801:0xd69a7f094e189ec9!8m2!3d51.5048259!4d-0.2562072"
								>
									<img src={location} alt="" />
									<div className="footer__address">
										<p className="first-line">6 Sun Studios</p>
										<p>30 Warple Way</p>
										<p>Acton</p>
										<p>London</p>
										<p>W3 0RX</p>
									</div>
								</a>
							</motion.div>
						</motion.div>
						<motion.div variants={fade} className="contactscreen__map">
							<Map />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default ContactScreen;
