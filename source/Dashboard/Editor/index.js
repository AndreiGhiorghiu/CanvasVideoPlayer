import React, { useState } from "react";
import loadable from "@loadable/component";
import Timeline from "./Timeline";
import { useStore } from "../store.js";
import $ from "./style.module.css";

const VideoPlayer = loadable(() => import("./VideoPlayer.js"));
const CanvasVideoPlayer = loadable(() => import("$comp/CanvasVideoPlayer"));

export default props => {
	const { scenes } = useStore();

	return (
		<div>
			<div className={$.videoContainer}>
				<CanvasVideoPlayer scenes={[...scenes]} />
			</div>
			<Timeline />
		</div>
	);
};
