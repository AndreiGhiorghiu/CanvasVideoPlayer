import React, { useState } from "react";
import { Zone, Element } from "$comp/DND";
import { api, useStore } from "../../store.js";
import secondsMs from "$s/utils/secondsMs.js";
import $ from "./style.module.css";

export default props => {
	const { scenes, setScenes, moveScenes } = useStore();

	function updateScenes(e) {
		if (e.element.source === "timeline") {
			moveScenes(e.element, e.left, e.to);
		} else {
			setScenes(e.element);
		}
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
				<div className={$.scene} key={scene.id}>
					<Zone
						component={`frame-${scene.id}`}
						droppableid={`video-${scene.id}`}
						index={index}
						onDragEnd={element => updateScenes(element)}
					>
						<div>
							<div className={$.info}>
								<span>{secondsMs(secondsFrom)}</span>
								<span>{secondsMs(secondsTo)}</span>
							</div>
							<Element data={scene} source="timeline" index={index}>
								<div
									className={$.mediaScene}
									style={{
										backgroundImage: `url(${
											(scene.type === "video" && scene.poster) || scene.src
										})`,
										minWidth: `${scene.loop * 15}px`,
									}}
								>
									<div
										className={$.expand}
										onClick={e => {
											e.preventDefault();
											e.stopPropagation();
										}}
									>
										<img src={`${PUBLICPATH}/video-player/arrows-alt-h.svg`} />
									</div>
								</div>
							</Element>
						</div>
					</Zone>
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
						<div />
					</Zone>
				</div>
			</div>
		</div>
	);
};
