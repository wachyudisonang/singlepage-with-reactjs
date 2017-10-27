// src/components/App.js
import React, { Component } from 'react';
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './resources/icomoon/style.css';
import Resume from './templates/Resume/Resume'
import Basic from './templates/Basic/Basic'

class App extends Component {
	render() {
		return (
			<Resume />
		);
	}
}

export default App;