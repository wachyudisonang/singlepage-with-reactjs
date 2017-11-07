import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StaticImage from '../resources/utils/staticImage'

class PortfolioModal extends React.Component {
	render() {
		return (
			<Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
				<ModalHeader toggle={this.props.toggle}>{this.props.project.name}</ModalHeader>
				<ModalBody>
					<img className='img-fluid' src={StaticImage.use(this.props.project.image)} alt="" />
					<small className='clearfix'>{this.props.project.summary}</small>
					<span className='categories'>
							<i className='fa fa-tag'/>
							{this.props.project.keywords.join(', ')}
					</span>
				</ModalBody>
				<ModalFooter>
					<a
						href={this.props.project.website}
						target='_blank'
						className='btn btn-secondary' 
						rel='noopener noreferrer'>
						Details
					</a>
					<a
						className='btn btn-secondary'
						onClick={this.props.toggle}>
						Close
					</a>
				</ModalFooter>
			</Modal>
		);
	}
}

export default PortfolioModal;
