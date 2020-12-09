import React, { useState } from "react";
import Media from "./Media.js";
import Audio from "./Audio.js";
import $ from "./style.module.css";

export default props => {
	return (
		<div className={$.videoTimeline}>
			<Media />
			<Audio />
		</div>
	);
};
