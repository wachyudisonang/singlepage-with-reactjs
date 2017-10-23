import React from 'react'
import {
	Container,
	Row,
	Col
} from 'reactstrap';

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


const Portfolio = () => (
	<section id="portfolio">
			<Container>
				<h2 class="text-center">Portfolio</h2>
				<hr class="star-primary" />
				<Row>
					<div class="col-sm-4 portfolio-item">
						<a class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
							<div class="caption">
								<div class="caption-content">
									<i class="fa fa-search-plus fa-3x"></i>
								</div>
							</div>
							<img className="img-fluid" src={images['cabin.png']} alt="" />
						</a>
					</div>
					<div class="col-sm-4 portfolio-item">
						<a class="portfolio-link" href="#portfolioModal2" data-toggle="modal">
							<div class="caption">
								<div class="caption-content">
									<i class="fa fa-search-plus fa-3x"></i>
								</div>
							</div>
							<img className="img-fluid" src={images['cake.png']} alt="" />
						</a>
					</div>
					<div class="col-sm-4 portfolio-item">
						<a class="portfolio-link" href="#portfolioModal3" data-toggle="modal">
							<div class="caption">
								<div class="caption-content">
									<i class="fa fa-search-plus fa-3x"></i>
								</div>
							</div>
							<img className="img-fluid" src={images['circus.png']} alt="" />
						</a>
					</div>
					<div class="col-sm-4 portfolio-item">
						<a class="portfolio-link" href="#portfolioModal4" data-toggle="modal">
							<div class="caption">
								<div class="caption-content">
									<i class="fa fa-search-plus fa-3x"></i>
								</div>
							</div>
							<img className="img-fluid" src={images['game.png']} alt="" />
						</a>
					</div>
					<div class="col-sm-4 portfolio-item">
						<a class="portfolio-link" href="#portfolioModal5" data-toggle="modal">
							<div class="caption">
								<div class="caption-content">
									<i class="fa fa-search-plus fa-3x"></i>
								</div>
							</div>
							<img className="img-fluid" src={images['safe.png']} alt="" />
						</a>
					</div>
					<div class="col-sm-4 portfolio-item">
						<a class="portfolio-link" href="#portfolioModal6" data-toggle="modal">
							<div class="caption">
								<div class="caption-content">
									<i class="fa fa-search-plus fa-3x"></i>
								</div>
							</div>
							<img className="img-fluid" src={images['submarine.png']} alt="" />
						</a>
					</div>
				</Row>
			</Container>
		</section>
)

export default Portfolio
