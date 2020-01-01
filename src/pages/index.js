import React, { Component } from 'react';
import TitlePage from '../components/TitlePage/TitlePage';
import PortfolioPage from '../components/Portfolio/PortfolioPage';
import About from '../components/About/AboutPage';
import Nav from '../components/Nav/Nav';
import(`../styles/main.scss`);

class IndexPage extends Component {
	render() {
		return (
			<div>
				<section>
					<TitlePage />
					<Nav />
				</section>

				<section>
					<About />
				</section>
				<section>
					<PortfolioPage />
				</section>
			</div>
		);
	}
}

export default IndexPage;
