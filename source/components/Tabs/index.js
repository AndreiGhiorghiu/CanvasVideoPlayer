import React, { useState } from "react";
import Panel from "../Panel";
import $ from "./style.module.css";

function Buttons({ view, setView, children }) {
	return children.map((child, index) => {
		return (
			<button
				key={index}
				type="button"
				className={`btn btn-sm ${
					(view === index && "btn-dark") || "btn-light"
				}`}
				onClick={() => setView(index)}
			>
				{child.props.title}
			</button>
		);
	});
}

function Content({ view, children }) {
	return (
		<Panel.Stack visible={view}>
			{children.map((child, index) => (
				<Panel.View key={index} name={index}>
					{child}
				</Panel.View>
			))}
		</Panel.Stack>
	);
}

export default ({ children }) => {
	const [view, setView] = useState(0);

	return (
		<div>
			<div
				className={`btn-group mr-2 mb-3 ${$.tabs}`}
				role="group"
				aria-label="First group"
			>
				<Buttons view={view} setView={setView}>
					{children}
				</Buttons>
			</div>
			<Content view={view}>{children}</Content>
		</div>
	);
};
