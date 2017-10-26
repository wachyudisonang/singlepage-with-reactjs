import React from 'react'
import {basics} from '../../resources/resume.json'
import SocialMedia from "../../components/socialMedia"

const Footer = () => (
	<footer>
		<div className='container'>
				<div className='socials'>
						<SocialMedia profiles={basics.profiles}/>
				</div>
				<div id='go-top'>
						<a className='smoothscroll' title='Back to Top' href='#home'>
								<i className='icon-up-open'/>
						</a>
				</div>
		</div>
	</footer>
)

export default Footer
