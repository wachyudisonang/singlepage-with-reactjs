import React, { Component } from 'react'
import {
	Row
} from 'reactstrap'
import PortfolioModal from './PortfolioModal'
import StaticImage from '../resources/utils/staticImage'
import Random from '../resources/utils/random'

class Entry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(projectName, projectSummary, projectWebsite) {
		this.setState({
			modal: !this.state.modal
		});
	}
	
	getVal(obj) {
		if (obj !== null && obj !== '') {
			return JSON.stringify(obj).replace(/ /g, "");
		}
	}

	render() {
		return (
			<div className="col-sm-4 portfolio-item">
				<a className="portfolio-link" onClick={this.toggle} data-toggle="modal">
					<div className="caption">
						<div className="caption-content">
							<i className="icon-search-plus display-4"></i>
							<h2 hidden>{this.props.project.name}</h2>
							<p hidden>{this.props.project.summary}</p>
						</div>
					</div>
					<img className="img-fluid" src={StaticImage.use(this.props.project.thumb)} alt="" />
				</a>
				<PortfolioModal project={this.props.project} isOpen={this.state.modal} toggle={this.toggle} />
			</div>
		);
	}
}

class PortfolioEntry extends Component {
	render() {
		const portfolio = Random.shuffleArray(this.props.sections).slice(0, 9);
		return (
			<Row>
				{portfolio
					.filter(function (project, index) {
						return !project.hide
					})
					.map(function (project, index) {
					return (
						<Entry key={index} index={index} project={project}/>
					);
				})}
			</Row>
		);
	}
}

export default PortfolioEntry;
