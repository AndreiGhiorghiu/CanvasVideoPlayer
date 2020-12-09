import create from "zustand";
import cuid from "cuid";

export const [useStore, api] = create((set, store) => ({
	scenes: [],

	getVideoData(src) {
		return new Promise((resolve, reject) => {
			const node = document.createElement("video");
			node.src = src;

			node.ondurationchange = element => {
				console.log([node]);

				return resolve({ duration: element.path[0].duration });
			};
		});
	},

	async setScenes(scene) {
		const { scenes, getVideoData } = store();

		if (scene.type === "video") {
			const data = await getVideoData(scene.src);
			scene.loop = data.duration;
		} else {
			scene.loop = 5;
		}

		scene.id = cuid();

		scenes.push(scene);

		set({ scenes });
	},

	moveScenes(scene, left, to) {
		const { scenes } = store();

		const oldScene = scenes[scene.index];

		scenes.splice(scene.index, 1);

		scenes.splice(to.index, 0, oldScene);

		set({ scenes });
	},
}));
