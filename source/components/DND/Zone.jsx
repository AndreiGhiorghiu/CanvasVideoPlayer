import React, { useState, useCallback } from "react";
import { useStore, api } from "./store";
import PassProps from "./PassProps";
import $ from "./style.module.css";

let interval = null;

export default (props) => {
  const { currentHover, placeholderPosition } = useStore();
  const [forFrame, setForFrame] = useState(false);

  function canDrp(type1, type2) {
    const currentAddr = api.getState().currentAttr;

    if (
      currentAddr.data.type.includes(type1) &&
      props.droppableid.includes(type2)
    ) {
      return false;
    }

    return true;
  }

  function canDrop() {
    const currentAddr = api.getState().currentAttr;

    if (!currentAddr) return false;

    if (!canDrp("image", "audio")) {
      setForFrame(false);
      return false;
    }

    if (!canDrp("video", "audio")) {
      setForFrame(false);
      return false;
    }

    if (!canDrp("audio", "video")) {
      setForFrame(false);
      return false;
    }

    return true;
  }

  let isHover = currentHover === props.component;

  function onDragEnter(event) {
    if (interval) {
      clearTimeout(interval);
    }

    if (!canDrop()) {
      return false;
    }

    api.setState({ currentHover: props.component });

    event.persist();
  }

  function onDragLeave(event) {
    if (interval) {
      clearTimeout(interval);
    }

    interval = setTimeout(() => {
      api.setState({ currentHover: null });
    }, 800);
  }

  const onDragOver = useCallback(() => {
    event.preventDefault();

    if (!canDrop()) {
      return false;
    }
    const isEmpty = props.component.split("-")[0] === "null";

    if (!isEmpty) {
      const hoverElementPos = event.target.getBoundingClientRect().x;
      const hoverElemHeight = parseInt(event.target.clientWidth / 2);
      const mousePos = event.clientX;

      const isLeft = mousePos < hoverElementPos + hoverElemHeight;

      if (isLeft) {
        api.setState({ placeholderPosition: true });
      } else {
        api.setState({ placeholderPosition: false });
      }
    }

    if (interval) {
      clearTimeout(interval);
    }

    if (!isHover) {
      api.setState({ currentHover: props.component });
    }
  }, [event]);

  function onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    api.setState({ currentHover: null });

    if (!canDrop()) return false;

    const { data, source, index } = JSON.parse(
      event.dataTransfer.getData("data")
    );

    if (props.onDragEnd) {
      props.onDragEnd({
        element: { ...data, source, index },
        to: props,
        left: placeholderPosition,
      });
    }
  }

  return (
    <PassProps
      className={`${$.zone} ${
        (isHover &&
          (placeholderPosition ? $.leftPlaceholder : $.rightPlaceholder)) ||
        ""
      } ${forFrame ? $.frame : ""}`}
      onDragEnter={(e) => onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
    >
      {props.children}
    </PassProps>
  );
};
