import React from 'react'
import {basics} from '../../resume.json'

const paragraph = (content) => (
	<p>{content}</p>
)

const About = () => (
	<section class="success" id="about">
		<div class="container">
			<h2 class="text-center">About</h2>
			<hr class="star-light" />
			<div class="row">
				<div class="col-lg-12 ml-auto">
					{basics.summary.map(paragraph)}
				</div>
			</div>
		</div>
	</section>
)

export default About
