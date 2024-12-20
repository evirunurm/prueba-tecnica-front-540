import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {

	return (
		<nav className='nav'>
			<Link
				className='nav__link'
				to='/'
			>
				&lt; Back
			</Link>
		</nav>
	);
};

export default Nav;