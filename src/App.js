import React, { Component } from 'react';
import Resume from './templates/Resume/Resume'
import 'babel-polyfill'
import './App.scss';
import './App.css';
import './resources/icomoon/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<Resume />
		);
	}
}

export default App;