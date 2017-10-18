// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';
import Header from './Header'
import Main from './Main'

class App extends Component {
	// static propTypes = {}
	// static defaultProps = {}
	// state = {}

	render() {
		const { className, ...props } = this.props;
		return (
			<div className={classnames('App', className)} {...props}>
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<Header />
					<Main />
				</div>
			</div>
		);
	}
}

export default App;