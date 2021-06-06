import React, { useState } from "react";
import Tabs from "$comp/Tabs";
import Advanced from "./Advanced";
import Settings from "./Settings";
import Media from "./Media";

import config from "$config/videoGenerator.json";

export default (props) => {
  return (
    <div>
      <Tabs>
        <Media media={config.media} title="Media" />
        <Settings title="Settings" />
        {/* <Advanced title="Advanced" /> */}
      </Tabs>
    </div>
  );
};
