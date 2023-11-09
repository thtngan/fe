import React from "react";
import "./ProfileCard.css";
import avatar from "../images/profile.png";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text"></span>
			</h1>
			<h2 className="normal-text">{props.age}</h2>
			<h2 className="normal-text">{props.status}</h2>
			<h2 className="normal-text">{props.job}</h2>
			<h2 className="normal-text">{props.phone}</h2>
			<h2 className="normal-text">{props.email}</h2>
			<h2 className="normal-text">{props.city}</h2>
			<h2 className="normal-text">{props.hobby}</h2>
		</div>
	);
}

export default ProfileCard;