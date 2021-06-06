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

  async setScenes(scene, add = true) {
    const { scenes, getVideoData } = store();

    if (scene.type === "video") {
      const data = await getVideoData(scene.src);
      scene.loop = data.duration;
    } else {
      scene.loop = 5;
    }

    scene.id = cuid();

    if (add) {
      scenes.push(scene);

      set({ scenes });
    }

    return scene;
  },

  async setAudioScenes(scene, add = true) {
    const { audio, getAudioData } = store();

    if (scene.type === "audio") {
      const data = await getAudioData(scene.src);
      scene.loop = data.duration;
    } else {
      scene.loop = 5;
    }

    scene.id = cuid();

    if (add) {
      audio.push(scene);

      set({ audio });
    }

    return scene;
  },

  async moveScenes(scene, left, to) {
    const { scenes, setScenes } = store();

    let oldScene = scenes[scene.index];

    if (scene.source === "sidebar") {
      oldScene = await setScenes(scene, false);
    } else {
      scenes.splice(scene.index, 1);
    }

    if (left) {
      scenes.splice(to.index, 0, oldScene);
    } else {
      scenes.splice(to.index + 1, 0, oldScene);
    }

    set({ scenes });
  },

  async moveAudioScenes(scene, left, to) {
    const { audio, setAudioScenes } = store();

    let oldScene = audio[scene.index];

    if (scene.source === "sidebar") {
      oldScene = await setAudioScenes(scene, false);
    } else {
      audio.splice(scene.index, 1);
    }

    console.log(oldScene);

    if (left) {
      audio.splice(to.index, 0, oldScene);
    } else {
      audio.splice(to.index + 1, 0, oldScene);
    }

    set({ audio });
  },

  updateScene(id, data) {
    const { scenes } = store();

    const updatedScenes = scenes.map((scene) => {
      if (scene.id === id) {
        return { ...scene, ...data };
      }
      return scene;
    });

    set({ scenes: updatedScenes });
  },
}));
