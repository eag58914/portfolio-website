import React from 'react';
import styles from './Portfolio.module.css';
import Geo from '../../images/Geo.jpg';

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<div className={styles.projectThumbnails} img src={Geo} />
			<h3 className={styles.projectThumbnails}>Fitness App</h3>
			<h3 className={styles.projectThumbnails}>E-Commerce Website</h3>
			<h3 className={styles.projectThumbnails}>Social Media App</h3>
		</div>
	);
};

export default Portfolio;
