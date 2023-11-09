import React from "react";
import "./Profile.css";
import ProfileCard from "./ProfileCard";

const Profile = () => {

    return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Charlie Puth"
				age="32 years old"
                status="Single"
                job="Singer"
                phone="+21 213 838 12"
                email="charlieputh12@gmail.com"
				city="5A Ohio street, Ohio, USA"
			></ProfileCard>

		</div>
	);
};

export default Profile;

