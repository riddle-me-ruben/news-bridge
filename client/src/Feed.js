import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
import { BACKEND_URL } from "./vars";
import store from "./store";

function Feed({ translations }) {
	// Function to show an alert when the icon is clicked
	const handleIconClick = async () => {
		console.log("Speaker icon clicked!");

		const audio_blob = await fetch(`${BACKEND_URL}/get-audio/${store.getState().user.token}`);
    const audioUrl = URL.createObjectURL(await audio_blob.blob());
    const audio = new Audio(audioUrl);
    audio.play();
	};

	return (
		<div className="feed-container">
			{/* Home button at the top center */}
			<div className="home-button-container">
				<Link to="/">
					<button className="home-button">{translations ? translations.homeTitle : "Home"}</button>
				</Link>
			</div>

			{/* Feed page content */}
			<h1 className="feed-title">{translations ? translations.feedButton : "Feed Page"}</h1>

			{/* Use the translations prop for the paragraph content */}
			<div className="feed-subtitle-container">
				<p className="feed-subtitle">
					{translations ? translations.feedContent : "Here is what is happening today:"}
				</p>
				{/* Insert the speaker icon next to the text */}
				<img
					src="/speaker.png" // Corrected path for the public folder
					alt="Speaker Icon"
					className="speaker-icon"
					onClick={handleIconClick} // Trigger alert on click
				/>
			</div>
		</div>
	);
}

export default Feed;
