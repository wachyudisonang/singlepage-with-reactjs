import React from 'react'
import {
	Container
} from 'reactstrap';
import {projects} from '../../resources/resume.json'
import PortfolioEntry from "../../components/PortfolioEntry"

class Portfolio extends React.Component {
  render() {
    return (
			<section id="portfolio">
				<Container>
					<h2 className="text-center">Portfolio</h2>
					<hr className="star-primary" />
						<PortfolioEntry sections={projects} />
				</Container>
			</section>
    );
  }
}

export default Portfolio;