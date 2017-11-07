import React from 'react';
import { basics, skills } from '../../resources/resume.json';
import Skills from './Skills';

// const paragraph = (content) => (
// 	<p>{content}</p>
// )

const About = () => (
	<div>
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
		<section className="" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 ml-auto">
						<Skills content={skills} />
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default About
