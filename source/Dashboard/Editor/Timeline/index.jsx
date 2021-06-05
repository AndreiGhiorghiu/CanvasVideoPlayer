import React, { useState } from "react";
import Media from "./Media";
import Audio from "./Audio";
import $ from "./style.module.css";

export default (props) => {
  return (
    <div className={$.videoTimeline}>
      <Media />
      <Audio />
    </div>
  );
};
