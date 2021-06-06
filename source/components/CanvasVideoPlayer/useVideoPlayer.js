import { useState, useEffect, useRef, useCallback } from "react";
import Konva from "konva";
import $ from "./style.module.css";

let secondsClean = 0;
let isPlay = false;
let currentAudio = [];
export default (scenes, audio) => {
  const [stage, setStage] = useState(null);
  const [seconds, setSeconds] = useState(secondsClean);
  const [scenesTime, setScenesTime] = useState([]);
  const [audioTime, setAudioTime] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animation, setAnimation] = useState(null);

  useEffect(() => onLoad(), []);
  useEffect(() => renderScenes(), [scenes, stage]);
  useEffect(() => setIsPlaying(isPlay), [isPlay]);

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

  const addVideoScene = (scene) => {
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

    image.attrs.image.muted = true;

    return image;
  };

  const addAudioScene = (scene) => {
    const audio = document.createElement("audio");
    audio.src = scene.src;

    return audio;
  };

  const addImageScene = (scene) => {
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

  function renderScenes() {
    if (!stage) return;

    const sceneTime = scenes.map((item, index) => {
      return scenes.reduce(
        (total, scene, key) => total + (key <= index && scene.loop) || 0,
        0
      );
    });

    const audiosTime = audio.map((item, index) => {
      return audio.reduce(
        (total, scene, key) => total + (key <= index && scene.loop) || 0,
        0
      );
    });

    setAudioTime(audiosTime);
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

    currentAudio = [];
    for (const song of audio) {
      const element = addAudioScene(song);

      currentAudio.push({ element, id: song.id });
    }

    const anim = new Konva.Animation((frame) => {
      if (!scenes.length) return;

      secondsClean += frame.timeDiff / 1000;

      setSeconds(secondsClean);

      const works = animateCanvas(sceneTime, audiosTime);

      if (!isPlay) {
        if (currentAudio.length) {
          currentAudio.forEach(({ element }) => element.pause());
        }
        const firstScene = stage.find(`.${scenes[0].id}`)[0];
        firstScene.zIndex(scenes.length - 1);
        if (scenes[0].type === "video") {
          const video = firstScene.find("Image")[0].attrs.image;

          if (!works) {
            video.currentTime = 0;
          }
          video.pause();
          setTimeout(() => stage.draw(), 50);
        }

        anim.stop();

        isPlay = false;
      }
    }, stage);

    setAnimation(anim);
  }

  function togglePlaying() {
    if (!animation.isRunning()) {
      isPlay = true;
      animation.start();
    } else {
      isPlay = false;
      setTimeout(() => animation.stop(), 100);
    }
  }

  function animateCanvas(
    scenesDelimitation,
    audioDelimitation,
    change = false
  ) {
    stage.find(".background")[0].zIndex(0);

    const sceneIndex = scenesDelimitation.findIndex(
      (item) => item >= secondsClean
    );
    const audioIndex = audioDelimitation.findIndex(
      (item) => item >= secondsClean
    );

    const lastDuration = scenesDelimitation[sceneIndex - 1] || 0;

    const lastScene = scenes[sceneIndex - 1] || scenes[scenes.length - 1];

    const scene = scenes[sceneIndex];

    if (sceneIndex === -1) {
      stage.find(".background")[0].zIndex(1);
      setSeconds(0);
      secondsClean = 0;

      if (lastScene && lastScene.type === "video") {
        const lastGroup = stage.find(`.${lastScene.id}`)[0];

        lastGroup.find("Image")[0].attrs.image.pause();
      }

      return false;
    }

    const group = stage.find(`.${scene.id}`)[0];

    group.zIndex(scenes.length - 1);

    if (lastScene && lastScene.type === "video") {
      const lastGroup = stage.find(`.${lastScene.id}`)[0];

      lastGroup.find("Image")[0].attrs.image.pause();
    }

    if (currentAudio.length && audioIndex !== -1) {
      const lastAudioDuration = audioDelimitation[audioIndex - 1] || 0;
      const currentTime = secondsClean - lastAudioDuration;
      const playingSong = currentAudio[audioIndex];
      const audioElement = playingSong.element;

      if (audioElement.paused && !change) {
        currentAudio.forEach((song) => song.element.pause());
        audioElement.play();
      }

      if (change) {
        audioElement.currentTime = currentTime;
      }

      const lastAudioSong = currentAudio[audioIndex - 1];
      if (lastAudioSong) {
        lastAudioSong.element.pause();
      }
    }

    if (scene.type === "video") {
      const currentTime = secondsClean - lastDuration;
      const video = group.find("Image")[0].attrs.image;

      if (video.paused && !change) {
        video.play();
      }
      if (change) {
        video.currentTime = currentTime;
      }
    }

    return true;
  }

  function onChange(value) {
    setSeconds(value);
    secondsClean = value;

    animateCanvas(scenesTime, audioTime, true);

    stage.draw();
  }

  return { seconds, onChange, isPlaying, togglePlaying };
};
