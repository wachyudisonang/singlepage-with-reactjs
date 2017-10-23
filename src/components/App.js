// src/components/App.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Resume from './Resume'
import Basic from './Basic'

class App extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
		isOpen: !this.state.isOpen
		});
	}
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