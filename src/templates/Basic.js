import React from 'react'
import './style.css';
import './Resume/resume.css';
import logo from './logo.svg';
import Main from './Basic/Main'
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Container,
	Row,
	Col,
	Jumbotron
} from 'reactstrap';
import { Link } from 'react-router-dom'

const Resume = () => (
	<div className="App">
		<Navbar color="dark" dark expand>
			<NavbarToggler right onClick={this.toggle} />
			<NavbarBrand href="/">reactstrap <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
			<ul class="ml-auto navbar-nav">
				<li class="nav-item"><Link to='/' class="nav-link">Home</Link></li>
				<li class="nav-item"><Link to='/schedule' class="nav-link">Schedule</Link></li>
	    </ul>
		</Navbar>
		<Jumbotron>
			<Container>
				<Row>
					<Col>
						<Main />
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	</div>
)

export default Resume
