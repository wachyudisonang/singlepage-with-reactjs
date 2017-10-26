import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
	Row
} from 'reactstrap';

class buttonModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			projectName: "",
			projectSummary: "",
			projectWebsite: ""
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle(projectName, projectSummary, projectWebsite) {
		this.setState({
			projectName: projectName,
			projectSummary: projectSummary,
			projectWebsite: projectWebsite,
			modal: !this.state.modal
		});
	}

	importAll(r) {
		let images = {};
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		return images;
	}
	
	getVal(obj) {
		if (obj !== null && obj !== '') {
			return JSON.stringify(obj).replace(/ /g, "");
		}
	}

	render() {

		return (
			<Row>
				{this.props.sections
					.filter(function (project, index) {
						return !project.hide
					})
					.map(function (project, index) {
					const images = this.importAll(require.context('../resources/img', false, /\.(png|jpe?g|svg)$/));
					return (
						<div className="col-sm-4 portfolio-item" key={index}>
							<a className="portfolio-link" onClick={this.toggle.bind(this, project.name, project.summary, project.website)} data-toggle="modal">
								<div className="caption">
									<div className="caption-content">
										<i className="icon-search-plus display-4"></i>
										<h2 hidden>{project.name}</h2>
										<p hidden>{project.summary}</p>
									</div>
								</div>
								<img className="img-fluid" src={images[project.thumb+'.png']} alt="" />
							</a>
						</div>
					);
				}, this)}
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{this.state.projectName}</ModalHeader>
					<ModalBody>{this.state.projectSummary}</ModalBody>
					<ModalFooter>
						<a
              href={this.state.projectWebsite}
              target='_blank'
              className='btn btn-secondary' 
              rel='noopener noreferrer'>
              Details
            </a>
            <a 
            	href='javascript:void(0)'
            	className='btn btn-secondary'
            	onClick={this.toggle}>
            	Close
            </a>

					</ModalFooter>
				</Modal>
			</Row>
		);
	}
}

export default buttonModal;
