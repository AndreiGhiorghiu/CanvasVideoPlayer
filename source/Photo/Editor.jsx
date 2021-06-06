import React, { useEffect, useLayoutEffect } from "react";
import $ from "./style.module.css";
import Konva from "konva";
import { api } from "./store";

export default ({ scene }) => {
  useLayoutEffect(() => {
    if (!scene) return;

    api.getState().onLoad(scene.src);
  }, [scene]);

  if (!scene) return null;

  return <div id={$.photoEdit} />;
};
