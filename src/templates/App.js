// src/components/App.js
import React, { Component } from 'react';
import 'babel-polyfill'
import Resume from './Resume'
import Basic from './Basic'

class App extends Component {
	
	render() {
		return (
			<Resume />
		);
	}
}

export default App;