import React, { useState } from "react";
import Tabs from "$comp/Tabs";
import Advanced from "./Advanced.js";
import Settings from "./Settings.js";
import Media from "./Media.js";

import config from "~/config/videoGenerator.yaml";

export default props => {
	return (
		<div>
			<Tabs>
				<Media media={config.media} title="Media" />
				<Settings title="Settings" />
				<Advanced title="Advanced" />
			</Tabs>
		</div>
	);
};
