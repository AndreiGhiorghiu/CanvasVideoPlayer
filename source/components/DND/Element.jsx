import React, { useState } from "react";
import PassProps from "./PassProps";
import $ from "./style.module.css";
import { api } from "./store";

export default (props) => {
  const [isCurrent, setIsCurrent] = useState(false);

  const img = new Image();
  if (props.data.type === "video") {
    img.src = `${PUBLICPATH}/assets/images/film.svg`;
  } else if (props.data.type === "audio") {
    img.src = `${PUBLICPATH}/assets/images/music.svg`;
  } else {
    img.src = `${PUBLICPATH}/assets/images/image.svg`;
  }

  function dragStart(ev) {
    ev.dataTransfer.setData(
      "data",
      JSON.stringify({
        id: props.id,
        source: props.source,
        index: props.index,
        data: props.data,
      })
    );
    var ua = navigator?.userAgent?.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        // Chrome
        img.width = "5";
        ev.dataTransfer.setDragImage(img, 5, 5);
      }
    }
    api.setState({ currentAttr: { ...props } });

    setIsCurrent(true);
  }

  function onDragEnd(ev) {
    setIsCurrent(false);
    api.setState({ currentAttr: null });
  }

  return (
    <PassProps
      draggable={true}
      onDragStart={dragStart}
      onDragEnd={onDragEnd}
      attr={props.attr}
    >
      {props.children}
    </PassProps>
  );
};
