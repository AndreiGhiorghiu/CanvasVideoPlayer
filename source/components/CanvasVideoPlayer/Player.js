import React, { useState } from "react";
import useVideoPlayer from "./useVideoPlayer.js";
import secondsMs from "$s/utils/secondsMs.js";
import $ from "./style.module.css";

export default props => {
	const [seconds, onChange, isPlaying, togglePlaying] = useVideoPlayer(
		props.scenes
	);

	const totalSeconds = props.scenes.reduce(
		(total, item) => total + item.loop,
		0
	);

	return (
		<div>
			<div className={$.videoPlayer}>
				<div className={$.stage}></div>
				<div className={$.actions}>
					<div className={$.buttons}>
						<div
							id={$.play}
							className="cvs-action cvs-play"
							onClick={togglePlaying}
						>
							<img
								className={$.playPause}
								src={`video-player/${(!isPlaying && "play") || "pause"}.svg`}
							/>
						</div>
					</div>
					<div className={$.timeBar}>
						<div className={$.seconds}>
							<span>{secondsMs(seconds)}</span>
							<span>{secondsMs(totalSeconds)}</span>
						</div>
						<input
							className={$.secondsRange}
							type="range"
							value={seconds}
							onChange={e => {
								onChange(parseFloat(e.target.value));
							}}
							min={0}
							step={0.01}
							max={totalSeconds}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
