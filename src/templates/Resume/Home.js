import React from 'react'
import logo from './img/profile.png';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';

const Home = () => (
	<div id="home">
		<Container>
			<Row className="align-items-center">
				<Col className="col-12">
					<img src={logo} className="img-fluid" alt="" />
					<div class="intro-text">
						<span class="name">My React Resume</span>
						<hr class="star-light" />
						<span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)

export default Home
