import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
	Container,
	Row,
	Col
} from 'reactstrap';

class buttonModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			projectName: "",
			projectSummary: ""
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle(projectName, projectSummary) {
		this.setState({
			projectName: projectName,
			projectSummary: projectSummary,
			modal: !this.state.modal
		});
	}

	render() {

		function importAll(r) {
			let images = {};
			r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
			return images;
		}
		
		function getVal(obj) {
			if (obj != null && obj != '') {
				return JSON.stringify(obj).replace(/\"/g, "");
			}
		}

		return (
			<Row>
				{this.props.sections
					.filter(function (project, index) {
						return !project.hide
					})
					.map(function (project, index) {
					const images = importAll(require.context('../resources/img', false, /\.(png|jpe?g|svg)$/));
					return (
						<div class="col-sm-4 portfolio-item" key={index}>
							<a class="portfolio-link" onClick={this.toggle.bind(this, project.name, project.summary)} data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
										<h2 hidden>{project.name}</h2>
										<p hidden>{project.summary}</p>
									</div>
								</div>
								<img className="img-fluid" src={images['cabin.png']} alt="" />
							</a>
						</div>
					);
				}, this)}
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{getVal(this.state.projectName)}</ModalHeader>
					<ModalBody>{getVal(this.state.projectSummary)}</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Close</Button>
					</ModalFooter>
				</Modal>
			</Row>
		);
	}
}

export default buttonModal;
