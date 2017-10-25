import React, { Component } from 'react';
import classnames from 'classnames';
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
import '../resources/icomoon/style.css';

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
			<div className={classnames('App', className)} {...props}>
				<Navbar tag="header" fixed="top" expand="lg" dark id="mainNav">
					<div className="container">
						<Link to='/' className="navbar-brand">React Resume <img src={logo} className="App-logo" alt="logo" /></Link>
						<NavbarToggler right onClick={this.toggle} />
						<Collapse id="navbarResponsive" isOpen={this.state.collapsed} navbar>
							<Nav className="ml-auto" navbar>
								<li className="nav-item"><Link to='/portfolio' className="nav-link">Portfolio</Link></li>
								<li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
								<li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Main />
				<Footer />
			</div>
		);
	}
}

export default Resume
