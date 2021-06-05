import React from "react";
import Player from "./Player";

export default (props) => {
  return <Player scenes={props.scenes} audio={props.audio} />;
};
