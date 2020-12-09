import React, { useState, useEffect } from "react";
import $ from "./style.module.css";
import Konva from "konva";

export default props => {
	useEffect(() => {
		const stage = new Konva.Stage({
			container: "stage",
			width: 500,
			height: 500,
		});

		const layer = new Konva.Layer();
		stage.add(layer);

		var video = document.createElement("video");
		video.src = "/assets/images/media-editor/video2.mp4";

		const image = new Konva.Image({
			image: video,
			draggable: true,
			x: 50,
			y: 20,
		});
		layer.add(image);

		var text = new Konva.Text({
			text: "Loading video...",
			width: stage.width(),
			height: stage.height(),
			align: "center",
			verticalAlign: "middle",
		});

		layer.add(text);

		video.addEventListener("loadedmetadata", function (e) {
			text.text("Press PLAY...");
			image.width(video.videoWidth);
			image.height(video.videoHeight);
		});

		var anim = new Konva.Animation(function (frame) {
			layer.draw();
		}, layer);

		document.getElementById("play").addEventListener("click", () => {
			text.destroy();
			video.play();

			var videoStream = stage.content.querySelector("canvas").captureStream();
			var mediaRecorder = new MediaRecorder(videoStream);

			var chunks = [];
			mediaRecorder.ondataavailable = function (e) {
				chunks.push(e.data);
			};

			mediaRecorder.onstop = function (e) {
				var blob = new Blob(chunks, { type: "video/mp4" });
				chunks = [];

				var videoURL = URL.createObjectURL(blob);
				console.log(videoURL);
				document.querySelector(`.${$.video}`).src = videoURL;
			};
			mediaRecorder.ondataavailable = function (e) {
				console.log("e.data", e.data);
				chunks.push(e.data);
			};

			mediaRecorder.start();

			anim.start();
			setTimeout(function () {
				console.log("mediaRecorde", stage.toCanvas().toDataURL());
				mediaRecorder.stop();
			}, 10000);
		});

		document.getElementById("pause").addEventListener("click", function () {
			video.pause();
			anim.stop();
		});

		layer.draw();
	}, []);

	return (
		<div className={$.videoPlayer}>
			<div id="play">Play</div>
			<div id="pause">pause</div>
			<div id="stage"></div>
			<video className={$.video} controls />
		</div>
	);
};
