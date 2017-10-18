// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';
import Header from './Header'
import Main from './Main'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

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
				<Navbar color="dark" dark expand>
				<NavbarToggler right onClick={this.toggle} />
				<NavbarBrand href="/">reactstrap <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
				<Collapse isOpen={this.state.isOpen} navbar>
				<Nav className="ml-auto" navbar>
				  <NavItem>
					<NavLink href="/components/">Components</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
				  </NavItem>
				</Nav>
				</Collapse>
				</Navbar>
				<Jumbotron>
				<Container>
				<Row>
				  <Col>
					<p>
						<Header />
						<Main />
					</p>
				  </Col>
				</Row>
				</Container>
				</Jumbotron>
			</div>
		);
	}
}

export default App;