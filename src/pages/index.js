import React, { Component } from 'react';
import TitlePage from '../components/TitlePage/TitlePage';
import PortfolioPage from '../components/Portfolio/PortfolioPage';
import About from '../components/About/AboutPage';
import Nav from '../components/Nav/Nav';
import(`../styles/main.scss`);

class IndexPage extends Component {
	render() {
		return (
			<body>
				<section>
					<TitlePage />
				</section>
				<Nav />
				<section>
					<About />
				</section>
				<section>
					<PortfolioPage />
				</section>
			</body>
		);
	}
}

export default IndexPage;
