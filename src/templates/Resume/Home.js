import React from 'react'
import logo from '../../resources/img/profile.png';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import {basics} from '../../resources/resume.json'

const Home = () => (
	<div id="home">
		<Container>
			<Row className="align-items-center">
				<Col className="col-12">
					<img src={logo} className="img-fluid" alt="" />
					<div className="intro-text">
						<span className="name">My React Resume</span>
						<hr className="star-light" />
						<span className="skills">{basics.label}</span>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)

export default Home
