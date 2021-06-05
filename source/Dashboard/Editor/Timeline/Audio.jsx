import React, { useState } from "react";
import { Zone, Element } from "$comp/DND";
import { api, useStore } from "../../store";
import secondsMs from "$s/utils/secondsMs";
import $ from "./style.module.css";

export default (props) => {
  const { audio, setAudioScenes, moveAudioScenes } = useStore();

  function updateScenes(e) {
    const name = e.element.src.slice(
      e.element.src.lastIndexOf("/") + 1,
      e.element.src.length - 4
    );

    e.element.name = name;

    if (e.element.source === "timeline") {
      moveAudioScenes(e.element, e.left, e.to);
    } else {
      setAudioScenes(e.element);
    }
  }

  function renderName(name = "", sceneLength) {
    const renders = Math.ceil(sceneLength / 100);

    const elements = [];

    for (let index = 0; index < renders * 2; index++) {
      elements.push(<span key={index}>{name}</span>);
    }

    return elements;
  }

  function renderMedia() {
    let secondsFrom = 0;
    let secondsTo = 0;
    return audio.map((scene, index) => {
      const lastScene = audio[index - 1];

      secondsFrom += (lastScene && Math.floor(lastScene.loop)) || 0;

      secondsTo = secondsFrom + Math.floor(scene.loop - 1);

      if (audio.length - 1 === parseInt(index)) {
        secondsTo = secondsFrom + Math.floor(scene.loop);
      }

      return (
        <div className={$.scene} key={scene.id}>
          <Zone
            component={`frame-${scene.id}`}
            droppableid={`audio-${scene.id}`}
            index={index}
            onDragEnd={(element) => updateScenes(element)}
          >
            <div>
              <div className={$.info}>
                <span>{secondsMs(secondsFrom)}</span>
                <span>{secondsMs(secondsTo)}</span>
              </div>
              <Element data={scene} source="timeline" index={index}>
                <div
                  className={`${$.mediaScene} ${$.audioScene}`}
                  style={{ minWidth: `${scene.loop * 15}px` }}
                >
                  {scene.name}
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
      <div className={$.title}>Audio:</div>
      <div className={$.scenesContainer}>
        <div className={$.scenes}>
          {renderMedia()}
          <Zone
            component={"frame"}
            droppableid={"audio"}
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
