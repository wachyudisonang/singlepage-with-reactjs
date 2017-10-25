import React from 'react'
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import {projects} from '../../resume.json'
import ButtonModal from "../../components/buttonModal"

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

class Portfolio extends React.Component {
  render() {
    return (
			<section id="portfolio">
				<Container>
					<h2 class="text-center">Portfolio</h2>
					<hr class="star-primary" />
						<ButtonModal sections={projects} />
						
								
				</Container>
			</section>
    );
  }
}

export default Portfolio;