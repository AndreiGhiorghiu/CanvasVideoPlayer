import React, { useState } from "react";
import Panel from "../Panel";
import $ from "./style.module.css";

export default ({ view, children }) => {
	const backButton = back => {
		if (back) {
			return (
				<div className="col-auto">
					<button className="btn btn-sm btn-white" onClick={() => back()}>
						Back
					</button>
				</div>
			);
		}
		return null;
	};

	return (
		<nav
			className={`navbar navbar-vertical fixed-left navbar-expand-md navbar-light ${$.sidebar}`}
		>
			<Panel.Stack visible={view}>
				{children.map((child, index) => (
					<Panel.View key={index} name={child.props.name}>
						<div>
							<div className="header-body">
								<div className="row align-items-center">
									<div className="col">
										<h6 className="header-pretitle">Media Editor</h6>

										<h1 className="header-title">{child.props.title}</h1>
									</div>
									{backButton(child.props.back)}
								</div>
							</div>
						</div>
						{child}
					</Panel.View>
				))}
			</Panel.Stack>
		</nav>
	);
};
