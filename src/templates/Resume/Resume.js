import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import BodyAttribute from '../../components/BodyAttribute';
import './Resume.scss';
import './Resume.css';

const Resume = () => (
	<BodyAttribute classAttr="resume">
		<Navbar />
		<Main />
		<Footer />
	</BodyAttribute>
);

export default Resume;
