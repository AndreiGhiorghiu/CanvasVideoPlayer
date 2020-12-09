import React, { useState, useEffect } from "react";
import $ from "./style.module.css";
import Panel from "../Panel";

export default ({ view, children }) => {
	return (
		<div className={`main-content ${$.editor}`}>
			<Panel.Stack visible={view}>
				{children.map((child, index) => (
					<Panel.View key={index} name={child.props.name}>
						{child}
					</Panel.View>
				))}
			</Panel.Stack>
		</div>
	);
};
