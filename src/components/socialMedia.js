import React, { Component } from 'react';
import PropTypes from 'prop-types';

function mapIcon(socialMedia) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className={'icon-envelope'}/>
            );
        default:
            return (
                <i className={`icon-${media}`}/>
            );
    }
}

const SocialMedia = props => {
	return (
		<ul className="navbar-nav flex-row">
			{props.profiles.map(function (profile, index) {
				const icon = mapIcon(profile.network.toLowerCase());
				return (
					<li className="nav-item" key={index}>
						<a href={profile.url} className="nav-link p-2">
							 {icon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialMedia;
