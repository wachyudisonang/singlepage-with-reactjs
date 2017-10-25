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

const socialMedia = props => {
	return (
		<ul className="navbar-nav flex-row">
			{props.profiles
				.filter(function (profile, index) {
					return !profile.hide
				})
				.map(function (profile, index) {
				const getIcon = mapIcon(profile.icon.toLowerCase());
				return (
					<li className="nav-item" key={index}>
						<a href={profile.url} className="nav-link p-2" target="_blank">
							 {getIcon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default socialMedia;
