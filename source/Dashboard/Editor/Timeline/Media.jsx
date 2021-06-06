import React from "react";
import { Zone, Element } from "$comp/DND";
import { useStore } from "../../store";
import secondsMs from "$s/utils/secondsMs";
import $ from "./style.module.css";
import { api as viewApi } from "$s/store.js";

export default () => {
  const { scenes, setScenes, moveScenes, updateScene } = useStore();

  function updateScenes(e) {
    if (e.to.component === "frame") {
      setScenes(e.element);
    } else {
      moveScenes(e.element, e.left, e.to);
    }
  }

  function onDrag(event, sceneId) {
    const newX = event.clientX;

    const element = document.querySelector(`[scene-ref=${sceneId}]`);
    const elementDefaultWidth = parseInt(element.style.minWidth.replace("px"));

    const elementWidth =
      element.getBoundingClientRect().x + elementDefaultWidth;

    element.style.minWidth = `${elementDefaultWidth + newX - elementWidth}px`;
  }

  function onDragEnd(_event, sceneId) {
    const element = document.querySelector(`[scene-ref=${sceneId}]`);
    const elementWidth = parseInt(element.style.minWidth.replace("px"));
    const loop = elementWidth / 15;

    updateScene(sceneId, { loop });
  }

  function expand(sceneId) {
    return (
      <div
        className={$.expand}
        draggable={true}
        onDrag={(e) => onDrag(e, sceneId)}
        onDragEnd={(e) => onDragEnd(e, sceneId)}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <img src={`${PUBLICPATH}/video-player/arrows-alt-h.svg`} />
      </div>
    );
  }

  function onClickPhoto(scene) {
    viewApi.getState().setView("photo");
    viewApi.getState().setEditScene(scene);
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
            onDragEnd={(element) => updateScenes(element)}
          >
            <div className={$.mediaSceneContainer}>
              <div className={$.info}>
                <span>{secondsMs(secondsFrom)}</span>
                <span>{secondsMs(secondsTo)}</span>
              </div>
              <Element data={scene} source="timeline" index={index}>
                <div
                  className={$.mediaScene}
                  scene-ref={scene.id}
                  onClick={(e) => {
                    if (scene.type !== "video") onClickPhoto(scene);
                  }}
                  style={{
                    backgroundImage: `url(${
                      (scene.type === "video" && scene.poster) || scene.src
                    })`,
                    minWidth: `${scene.loop * 15}px`,
                  }}
                ></div>
              </Element>
              {scene.type !== "video" && expand(scene.id)}
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
            onDragEnd={(e) => updateScenes(e)}
          >
            <div />
          </Zone>
        </div>
      </div>
    </div>
  );
};
