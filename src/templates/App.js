// src/components/App.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Resume from './Resume'
import Basic from './Basic'

class App extends Component {
	
	render() {
		const { className, ...props } = this.props;
		return (
			<div className={classnames('App', className)} {...props}>
				<Resume />
			</div>
		);
	}
}

export default App;