import React from 'react'
import './style.css';
import './Resume/resume.css';
import logo from './logo.svg';
import Main from './Resume/Main'
import Home from './Resume/Home'
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

const Resume = () => (
	<div>
		<Navbar fixed="top" light expand id="mainNav">
			<div class="container">
				<Link to='/' class="navbar-brand">React Resume <img src={logo} className="App-logo" alt="logo" /></Link>
				<NavbarToggler right onClick={this.toggle} />
				<div id="navbarResponsive" class="collapse navbar-collapse">
					<ul class="ml-auto navbar-nav">
						<li class="nav-item"><Link to='/portfolio' class="nav-link">Portfolio</Link></li>
						<li class="nav-item"><Link to='/about' class="nav-link">About</Link></li>
						<li class="nav-item"><Link to='/contact' class="nav-link">Contact</Link></li>
					</ul>
				</div>
			</div>
		</Navbar>
		<Main />
	</div>
)

export default Resume
