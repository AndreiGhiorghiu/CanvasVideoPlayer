import React, { useState } from "react";
import Timeline from "./Timeline";
import { useStore } from "../store";
import $ from "./style.module.css";

import CanvasVideoPlayer from "$comp/CanvasVideoPlayer";

export default () => {
  const { scenes, audio } = useStore();

  return (
    <div>
      <div className={$.videoContainer}>
        <CanvasVideoPlayer scenes={[...scenes]} audio={[...audio]} />
      </div>
      <Timeline />
    </div>
  );
};
