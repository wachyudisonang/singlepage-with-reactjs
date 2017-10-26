import React from 'react'
import {basics} from '../../resources/resume.json'

// const paragraph = (content) => (
// 	<p>{content}</p>
// )

const About = () => (
	<section className="success" id="about">
		<div className="container">
			<h2 className="text-center">About</h2>
			<hr className="star-light" />
			<div className="row">
				<div className="col-lg-12 ml-auto">
					{basics.summary.map(par => <p>{par}</p> )}
				</div>
			</div>
		</div>
	</section>
)

export default About
