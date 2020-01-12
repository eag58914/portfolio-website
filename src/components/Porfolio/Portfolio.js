import React from 'react';
import style from './Portfolio.module.css';
const Portfolio = () => {
	return (
		<div className={style.container}>
			<h3 className={style.projectThumbnails}>GeoGuesser</h3>
			<h3 className={style.projectThumbnails}>Fitness App</h3>
			<h3 className={style.projectThumbnails}>E-Commerce Website</h3>
			<h3 className={style.projectThumbnails}>Social Media App</h3>
		</div>
	);
};

export default Portfolio;
