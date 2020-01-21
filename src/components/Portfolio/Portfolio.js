import React from 'react';
import styles from './Portfolio.module.css';
import Geo from '../../images/Geo.jpg';
import Fitness from '../../images/Fitness.jpg';
import eCommerce from '../../images/e-commerce.jpg';
import Blog from '../../images/Blog.jpg';

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<img src={Geo} className={styles.projectThumbnails} />
			<img src={Fitness} className={styles.projectThumbnails} />
			<img src={eCommerce} className={styles.projectThumbnails} />
			<img src={Blog} className={styles.projectThumbnails} />
		</div>
	);
};

export default Portfolio;
