import React from 'react'
import {
	Container
} from 'reactstrap';
import {projects} from '../../resume.json'
import ButtonModal from "../../components/buttonModal"

class Portfolio extends React.Component {
  render() {
    return (
			<section id="portfolio">
				<Container>
					<h2 className="text-center">Portfolio</h2>
					<hr className="star-primary" />
						<ButtonModal sections={projects} />
				</Container>
			</section>
    );
  }
}

export default Portfolio;