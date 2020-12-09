import React, { useState } from "react";
import { Element } from "$comp/DND";
import $ from "./style.module.css";

export default ({ media }) => {
	const [mediaType, setMediaType] = useState("images");
	const render = {};

	const renderEmptyCards = nrCards => {
		const cards = [];
		for (let i = nrCards % 3; i <= 3; i++) {
			cards.push(
				<div key={`fake${i}`} className={`avatar avatar-lg avatar-4by3`} />
			);
		}

		return cards;
	};

	render.images = () => {
		const mediaImages = media.images.map((image, index) => (
			<div
				key={index}
				className={`${$.singleMedia} avatar avatar-lg avatar-4by3`}
			>
				<Element
					data={{
						type: "image",
						src: image.src,
					}}
					source="sidebar"
					index={index}
				>
					<img src={image.thumb} className="avatar-img rounded" />
				</Element>
			</div>
		));

		mediaImages.push(
			<div
				key={"add-image"}
				className={`${$.singleMedia} ${$.addButton} avatar avatar-lg avatar-4by3`}
			>
				<img
					style={{ objectFit: "contain" }}
					src={`${PUBLICPATH}/assets/images/plus-solid.svg`}
					className="avatar-img rounded"
				/>
			</div>
		);

		const emptyCards = renderEmptyCards(media.images.length + 1);

		mediaImages.push(...emptyCards);

		return mediaImages;
	};

	render.videos = () => {
		const mediaVideos = media.videos.map((video, index) => (
			<div
				key={index}
				className={`${$.singleMedia} avatar avatar-lg avatar-4by3`}
			>
				<Element
					data={{
						type: "video",
						src: video.src,
						poster: video.poster,
					}}
					source="sidebar"
					index={index}
				>
					<video
						controls
						src={video.src}
						poster={video.poster}
						className="avatar-img rounded"
					></video>
				</Element>
			</div>
		));

		mediaVideos.push(
			<div
				key={"add-video"}
				className={`${$.singleMedia} ${$.addButton} avatar avatar-lg avatar-4by3`}
			>
				<img
					style={{ objectFit: "contain" }}
					src={`${PUBLICPATH}/assets/images/plus-solid.svg`}
					className="avatar-img rounded"
				/>
			</div>
		);

		const emptyCards = renderEmptyCards(media.videos.length + 1);

		mediaVideos.push(...emptyCards);

		return mediaVideos;
	};

	render.audios = () => {
		const mediaAudios = media.audios.map((audio, index) => (
			<div key={index} className={`${$.singleMedia}`}>
				<audio controls src={audio.src}></audio>
			</div>
		));

		mediaAudios.push(
			<div key="add-audio" className={`${$.addAudio} ${$.addButton}`}>
				<img
					style={{ objectFit: "contain" }}
					src={`${PUBLICPATH}/assets/images/plus-solid.svg`}
					className="avatar-img rounded"
				/>
			</div>
		);

		return mediaAudios;
	};

	const selectMedia = () => {
		return (
			<div className="form-group">
				<label htmlFor="selectMediaType">Select media type</label>
				<select
					className="custom-select"
					id="selectMediaType"
					value={mediaType}
					onChange={e => setMediaType(e.target.value)}
				>
					<option value="images">Photo</option>
					<option value="videos">Video</option>
					<option value="audios">Audio</option>
				</select>
			</div>
		);
	};

	return (
		<div>
			{selectMedia()}

			<div className={$.mediaContainer}>{render[mediaType]()}</div>
		</div>
	);
};
