import React, { Component } from 'react';
import Title from '../components/Title/Title';
import NavBar from '../components/NavBar/NavBar';
import Portfolio from '../components/Porfolio/Portfolio';
import(`../styles/main.scss`);

class IndexPage extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Title />
				<Portfolio />
			</div>
		);
	}
}

export default IndexPage;
