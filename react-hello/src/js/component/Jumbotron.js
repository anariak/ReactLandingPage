import React from "react";
import PropTypes from "prop-types";
const Jumbotron = props => {
	return (
		<div className="container">
			<div className="row">
				<header className="jumbotron my-4">
					<h1 className="display-3">{props.jum_tile}</h1>
					<p className="lead">{props.jum_body}</p>
					<a href="#" className="btn btn-primary btn-lg">
						{props.jum_button}
					</a>
				</header>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	jum_tile: PropTypes.string,
	jum_body: PropTypes.string,
	jum_button: PropTypes.string
};

export default Jumbotron;
