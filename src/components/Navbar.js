import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../public/Logo.svg';
import cart from '../public/cart.svg';

const Navbar = ({ click, show, close }) => {
	const { props } = useSelector(state => state.request);
	return (
		<nav className={`navbar sticky ${show ? 'open' : ''}`}>
			<div className="navbar__logo">
				<Link to="/" onClick={close}>
					<img src={logo} alt="" />
					<p>HOME</p>
				</Link>
			</div>
			<ul className="navbar__links ">
				<li>
					<NavLink onClick={close} activeClassName="active" to="/props">
						PROPS
					</NavLink>
				</li>
				<li>
					<NavLink onClick={close} activeClassName="active" to="/contact">
						CONTACT
					</NavLink>
				</li>
				<li className="cart">
					<NavLink onClick={close} activeClassName="cartActive" className="cartLink" to="/request">
						<img src={cart} alt="" />
						<p>{props.length ? props.length : 0}</p>
					</NavLink>
				</li>
			</ul>
			<li className="cart-mobile">
				<NavLink onClick={close} activeClassName="cartActive" className="cartLink" to="/request">
					<img src={cart} alt="" />
					<p>{props.length ? props.length : 0}</p>
				</NavLink>
			</li>

			<div onClick={click} className={`navbar__toggle`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
