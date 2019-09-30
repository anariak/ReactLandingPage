import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6 mb-4">
					<div className="card h-100">
						<img className="card-img-top" src={props.link} alt="" />
						<div className="card-body">
							<h4 className="card-title">{props.card_title}</h4>
							<p className="card-text">{props.card_body}</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								{props.card_footer}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	link: PropTypes.string,
	card_title: PropTypes.string,
	card_body: PropTypes.string,
	card_footer: PropTypes.string
};

export default Card;
