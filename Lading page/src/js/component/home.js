import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Cards";
import header from "./Navbar";
import footer from "./footer";
//include images into your bundle

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<header />
				<Jumbotron
					jum_tile="A Warm Welcome!"
					jum_body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
				ipsam, eligendi, in quo sunt possimus non incidunt odit vero 
				aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
				numquam repellat."
					jum_button="Call to action!"
				/>
				<Card
					link="http://placehold.it/500x325"
					card_title="Card title"
					card_body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					card_footer="Find Out More!"
				/>
				<Card
					link="http://placehold.it/500x325"
					card_title="Card title 2"
					card_body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					card_footer="Find Out More!"
				/>
				<Card
					link="http://placehold.it/500x325"
					card_title="Card title 3"
					card_body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					card_footer="Find Out More!"
				/>
				<Card
					link="http://placehold.it/500x325"
					card_title="Card title 4"
					card_body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					card_footer="Find Out More!"
				/>

				<footer />
			</div>
		);
	}
}
