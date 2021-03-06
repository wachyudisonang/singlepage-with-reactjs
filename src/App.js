import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Resume from './templates/Resume/Resume';
import 'babel-polyfill';
import './App.scss';
import './App.css';
import './resources/icomoon/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Resume />
			</BrowserRouter>
		);
	}
}

export default App