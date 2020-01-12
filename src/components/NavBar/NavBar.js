import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={style.navBar}>
			<h2 className={style.navItem}>About</h2>
			<h2 className={style.navItem}>Resume</h2>
			<h2 className={style.navItem}>Contact</h2>
		</div>
	);
};

export default NavBar;
