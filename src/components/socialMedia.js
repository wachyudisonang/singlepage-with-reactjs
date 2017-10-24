import React from 'react'

const SocialMedia = () => (
	<ul>
		{this.props.profiles.map(function (profile, index) {
			
			return (
				<li key={index}>
					<a href={profile.url}>
					   
					</a>
				</li>
			);
		})}
	</ul>
)

export default SocialMedia
