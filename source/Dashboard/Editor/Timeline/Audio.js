import React, { useState } from "react";
import $ from "./style.module.css";

export default props => {
	return (
		<div className={$.mediasContainer}>
			<div className={$.title}>Audio:</div>
			<div className={$.scenesContainer}>
				<div className={$.scenes}></div>
			</div>
		</div>
	);
};
