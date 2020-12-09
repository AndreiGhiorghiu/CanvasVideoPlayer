import React, { useState } from "react";
import { Zone } from "$comp/DND";
import { api, useStore } from "../../store.js";
import secondsMs from "$s/utils/secondsMs.js";
import $ from "./style.module.css";

export default props => {
	const { scenes, setScenes } = useStore();

	function updateScenes(e) {
		setScenes(e.element);
	}

	function renderMedia() {
		let secondsFrom = 0;
		let secondsTo = 0;
		return scenes.map((scene, index) => {
			const lastScene = scenes[index - 1];

			secondsFrom += (lastScene && Math.floor(lastScene.loop)) || 0;

			secondsTo = secondsFrom + Math.floor(scene.loop - 1);

			if (scenes.length - 1 === parseInt(index)) {
				secondsTo = secondsFrom + Math.floor(scene.loop);
			}

			return (
				<div className={$.scene}>
					<div className={$.info}>
						<span>{secondsMs(secondsFrom)}</span>
						<span>{secondsMs(secondsTo)}</span>
					</div>
					<div
						key={scene.id}
						className={$.mediaScene}
						style={{
							backgroundImage: `url(${
								(scene.type === "video" && scene.poster) || scene.src
							})`,
							minWidth: `${scene.loop * 15}px`,
						}}
					></div>
				</div>
			);
		});
	}

	return (
		<div className={$.mediasContainer}>
			<div className={$.title}>Media:</div>
			<div className={$.scenesContainer}>
				<div className={$.scenes}>
					{renderMedia()}
					<Zone
						component={"frame"}
						droppableid={"video"}
						index={null}
						onDragEnd={e => updateScenes(e)}
					>
						<div></div>
					</Zone>
				</div>
			</div>
		</div>
	);
};
