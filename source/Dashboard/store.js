import create from "zustand";
import cuid from "cuid";
import config from "$config/videoGenerator.json";

export const [useStore, api] = create((set, store) => ({
  scenes: config.scenes || [],
  audio: config.audio || [],

  getVideoData(src) {
    return new Promise((resolve, reject) => {
      const node = document.createElement("video");
      node.src = src;

      node.ondurationchange = (element) => {
        return resolve({ duration: element.path[0].duration });
      };
    });
  },

  getAudioData(src) {
    return new Promise((resolve, reject) => {
      const node = document.createElement("audio");
      node.src = src;

      node.ondurationchange = (element) => {
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

  async setAudioScenes(scene) {
    const { audio, getAudioData } = store();

    if (scene.type === "audio") {
      const data = await getAudioData(scene.src);
      scene.loop = data.duration;
    } else {
      scene.loop = 5;
    }

    scene.id = cuid();

    audio.push(scene);

    set({ audio });
  },

  moveScenes(scene, left, to) {
    const { scenes } = store();

    const oldScene = scenes[scene.index];

    scenes.splice(scene.index, 1);

    scenes.splice(to.index, 0, oldScene);

    set({ scenes });
  },

  moveAudioScenes(scene, left, to) {
    const { audio } = store();

    const oldScene = audio[scene.index];

    audio.splice(scene.index, 1);

    audio.splice(to.index, 0, oldScene);

    set({ audio });
  },
}));
