import React from 'react'
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
			<section id="portfolio">
				<Container>
					<h2 class="text-center">Portfolio</h2>
					<hr class="star-primary" />
					<Row>
						<div class="col-sm-4 portfolio-item">
							<a class="portfolio-link" onClick={this.toggle} data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
									</div>
								</div>
								<img className="img-fluid" src={images['cabin.png']} alt="" />
							</a>
						</div>
						<div class="col-sm-4 portfolio-item">
							<a class="portfolio-link" href="#portfolioModal2" data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
									</div>
								</div>
								<img className="img-fluid" src={images['cake.png']} alt="" />
							</a>
						</div>
						<div class="col-sm-4 portfolio-item">
							<a class="portfolio-link" href="#portfolioModal3" data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
									</div>
								</div>
								<img className="img-fluid" src={images['circus.png']} alt="" />
							</a>
						</div>
						<div class="col-sm-4 portfolio-item">
							<a class="portfolio-link" href="#portfolioModal4" data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
									</div>
								</div>
								<img className="img-fluid" src={images['game.png']} alt="" />
							</a>
						</div>
						<div class="col-sm-4 portfolio-item">
							<a class="portfolio-link" href="#portfolioModal5" data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
									</div>
								</div>
								<img className="img-fluid" src={images['safe.png']} alt="" />
							</a>
						</div>
						<div class="col-sm-4 portfolio-item">
							<a class="portfolio-link" href="#portfolioModal6" data-toggle="modal">
								<div class="caption">
									<div class="caption-content">
										<i class="icon-search-plus display-4"></i>
									</div>
								</div>
								<img className="img-fluid" src={images['submarine.png']} alt="" />
							</a>
						</div>
					</Row>
				</Container>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
	        <ModalBody>
	          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	        </ModalBody>
	        <ModalFooter>
	          <Button color="primary" onClick={this.toggle}>Close</Button>
	        </ModalFooter>
	      </Modal>
				
			</section>
    );
  }
}

export default Portfolio;