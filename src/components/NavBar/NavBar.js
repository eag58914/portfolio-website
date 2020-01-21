import React from 'react';
import style from './NavBar.module.css';
import Link from 'gatsby-link';

const NavBar = () => {
	return (
		<div className={style.navBar}>
			<Link to="/about" className={style.navItem}>
				About
			</Link>
			<h2 className={style.navItem}>Resume</h2>
			<h2 className={style.navItem}>Contact</h2>
		</div>
	);
};

export default NavBar;
