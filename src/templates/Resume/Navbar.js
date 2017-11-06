import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../resources/img/logo.svg';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav
} from 'reactstrap';

const menus = ['portfolio', 'about', 'contact'];

const menuList = menus.map((menu, i) =>
	<li key={'menu_' + i} className="nav-item"><Link to={'/' + menu} className="nav-link">{menu}</Link></li>
);

class NavBar extends Component {
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
		return (
			<Navbar id="mainNav" tag="header" fixed="top" expand="lg" dark>
				<div className="container">
					<Link to='/' className="navbar-brand">React Resume <img src={logo} className="App-logo" alt="logo" /></Link>
					<NavbarToggler right onClick={this.toggle} />
					<Collapse id="navbarResponsive" isOpen={this.state.collapsed} navbar>
						<Nav className="ml-auto" navbar>
							{menuList}
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		);
	}
}

export default NavBar;
