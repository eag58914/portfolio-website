import React, { Component } from 'react';
import TitlePage from '../components/TitlePage/TitlePage';
import PortfolioPage from '../components/Potfolio/PortfolioPage';
import(`../styles/main.scss`);

class IndexPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<TitlePage />
				<PortfolioPage />
			</div>
		);
	}
}

export default IndexPage;
