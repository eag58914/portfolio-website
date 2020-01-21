import React from 'react';
import style from './NavBar.module.css';
import Link from 'gatsby-link';

const NavBar = () => {
	return (
		<div className={style.navBar}>
			<Link to="/about" className={style.navItem}>
				About
			</Link>
			<Link to="/resume" className={style.navItem}>
				Resume
			</Link>
			<Link to="/resume" className={style.navItem}>
				Contact
			</Link>
		</div>
	);
};

export default NavBar;
