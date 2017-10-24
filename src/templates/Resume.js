import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import './Resume/resume.css';
import logo from './logo.svg';
import Main from './Resume/Main'
import Home from './Resume/Home'
import Footer from './Resume/Footer'
import Portfolio from './Resume/Portfolio'
import About from './Resume/About'
import Contact from './Resume/Contact'
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
import Icon from '../components/Icon';
import '../resources/fonts/style.css';

class Resume extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

	render() {
		const { className, ...props } = this.props;
		return (
			<div>
				<Navbar fixed="top" dark expand="lg" id="mainNav">
					<div class="container">
						<Link to='/' class="navbar-brand">React Resume <img src={logo} className="App-logo" alt="logo" /></Link>
						<NavbarToggler right onClick={this.toggle} />
						<Collapse id="navbarResponsive" isOpen={this.state.collapsed} navbar>
							<Nav className="ml-auto" navbar>
								<li class="nav-item"><Link to='/portfolio' class="nav-link">Portfolio</Link></li>
								<li class="nav-item"><Link to='/about' class="nav-link">About</Link></li>
								<li class="nav-item"><Link to='/contact' class="nav-link">Contact</Link></li>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Main />
			</div>
		);
	}
}

export default Resume
