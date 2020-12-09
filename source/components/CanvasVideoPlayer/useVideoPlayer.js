import { useState, useEffect } from "react";
import Konva from "konva";
import $ from "./style.module.css";

let secondsClean = 0;

export default scenes => {
	const [stage, setStage] = useState(null);
	const [seconds, setSeconds] = useState(secondsClean);
	const [scenesTime, setScenesTime] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [animation, setAnimation] = useState(null);

	const onLoad = () => {
		const stage = new Konva.Stage({
			container: `.${$.stage}`,
			width: 500,
			height: 500,
		});

		const layer = new Konva.Layer({ name: "background" });

		stage.add(layer);

		const rect = new Konva.Rect({
			fill: "#000",
			width: 500,
			height: 500,
		});

		layer.add(rect);

		setStage(stage);
		stage.draw();
	};

	const addVideoScene = scene => {
		var video = document.createElement("video");
		video.src = scene.src;

		const image = new Konva.Image({
			image: video,
			name: "element",
			x: 0,
			y: 0,
			width: 500,
			height: 500,
		});

		return image;
	};

	const addImageScene = scene => {
		var img = document.createElement("img");
		img.src = scene.src;

		const image = new Konva.Image({
			image: img,
			name: "element",
			x: 0,
			y: 0,
			width: 500,
			height: 500,
		});

		return image;
	};

	useEffect(() => {
		onLoad();
	}, []);

	useEffect(() => {
		if (!stage && !scenes.length) return;

		const sceneTime = scenes.map((item, index) => {
			return scenes.reduce(
				(total, scene, key) => total + (key <= index && scene.loop) || 0,
				0
			);
		});

		setScenesTime(sceneTime);

		if (stage.find(".video-player")[0]) {
			stage.find(".video-player")[0].destroy();
		}

		const layer = new Konva.Layer({ name: "video-player" });
		stage.add(layer);

		for (const scene of scenes) {
			const group = new Konva.Group({ name: scene.id });
			layer.add(group);

			let image;
			if (scene.type === "image") {
				image = addImageScene(scene);
			} else {
				image = addVideoScene(scene);
			}

			group.add(image);

			layer.draw();
		}

		const groups = layer.find("Group");

		const anim = new Konva.Animation(frame => {
			if (!scenes.length) return;
			const secondsPass = frame.time / 1000;

			secondsClean += frame.timeDiff / 1000;
			setSeconds(secondsClean);

			const works = animateCanvas(sceneTime);

			if (!works) {
				const firstScene = stage.find(`.${scenes[0].id}`)[0];

				firstScene.zIndex(scenes.length - 1);

				if (scenes[0].type === "video") {
					const video = firstScene.find("Image")[0].attrs.image;

					video.currentTime = 0;
					video.pause();

					setTimeout(() => stage.draw(), 50);
				}

				anim.stop();
				setIsPlaying(false);
			}
		}, stage);

		setAnimation(anim);
	}, [scenes]);

	function togglePlaying() {
		if (!animation.isRunning()) {
			setIsPlaying(true);
			animation.start();
		} else {
			setIsPlaying(false);
			animation.stop();
		}
	}

	const animateCanvas = (scenesDelimitation, change = false) => {
		stage.find(".background")[0].zIndex(0);

		const sceneIndex = scenesDelimitation.findIndex(
			item => item >= secondsClean
		);

		const lastDuration = scenesDelimitation[sceneIndex - 1] || 0;

		if (sceneIndex === -1) {
			stage.find(".background")[0].zIndex(1);
			setSeconds(0);
			secondsClean = 0;

			return false;
		}

		const lastScene = scenes[sceneIndex - 1];
		const scene = scenes[sceneIndex];

		const group = stage.find(`.${scene.id}`)[0];

		group.zIndex(scenes.length - 1);

		if (lastScene && lastScene.type === "video") {
			const lastGroup = stage.find(`.${lastScene.id}`)[0];

			lastGroup.find("Image")[0].attrs.image.pause();
		}

		if (scene.type === "video") {
			const currentTime = secondsClean - lastDuration;
			const video = group.find("Image")[0].attrs.image;

			if (video.paused) {
				video.play();
			}
			if (change) {
				video.currentTime = currentTime;
			}
		}

		return true;
	};

	const onChange = value => {
		setSeconds(value);
		secondsClean = value;

		animateCanvas(scenesTime, true);

		stage.draw();
	};

	return [seconds, onChange, isPlaying, togglePlaying];
};
