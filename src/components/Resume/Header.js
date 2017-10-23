import React from 'react'
import logo from './img/profile.png';
import {
	Container
} from 'reactstrap';

const Home = () => (
	<header class="masthead">
		<Container>
			<img src={logo} className="img-fluid" alt="" />
			<div class="intro-text">
				<span class="name">My React Resume</span>
				<hr class="star-light" />
				<span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
			</div>
		</Container>
	</header>
)

export default Home
