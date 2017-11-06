import React from 'react';

function mapIcon(socialMedia) {
	let media = socialMedia.replace(/ /g, '-');
	return (
		<i className={'icon-'+media}/>
	);
}

function printClass(string) {
	switch (string) {
		case 'inline':
			return 'navbar-nav flex-row';
		default:
			return '';
	}
}

const socialMedia = (props) => {
	return (
		<ul className={printClass(props.listType)}>
			{props.profiles
				.filter(function (profile, index) {
					return !profile.hide
				})
				.map(function (profile, index) {
				const getIcon = mapIcon(profile.icon.toLowerCase());
				return (
					<li key={index}>
						<a href={profile.url} target="_blank">
							 {getIcon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default socialMedia;
