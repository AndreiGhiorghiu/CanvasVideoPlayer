import React, { useState, useLayoutEffect, useRef } from "react";
import $ from "./style.module.css";

function View(attrs) {
	return (
		<div
			className={`mvc_sb-view ${attrs.className} ${$.view}`}
			style={attrs.style}
		>
			{attrs.children}
		</div>
	);
}

function Stack(attrs) {
	const views = [];

	React.Children.forEach(attrs.children, node => {
		if (!node || !node.type || !node.type.prototype) return;
		if (node.type.prototype.constructor === View) views.push(node);
	});

	const size = views.length;
	const names = views.map(node => node.props.name);

	const viewIndex = names.indexOf(attrs.visible);
	const current = viewIndex >= 0 ? viewIndex : 0;

	const style = {
		width: `${size * 100}%`,

		marginLeft: `-${current * 100}%`,
	};

	return (
		<div className={`mvc_sb-stack mvc_sb-stack-${attrs.visible} ${$.stack}`}>
			<div className={`mvc_sb-stack-container ${$.stack_views}`} style={style}>
				{views.map((node, index) => {
					const style = {
						width: `${100 / size}%`,
						height: current === index ? "auto" : "0px",
					};
					const active =
						current === index
							? "active mvc_sb-view-active"
							: "inactive mvc_sb-view-inactive";
					return React.cloneElement(node, {
						style,
						key: index,
						className: active,
					});
				})}
			</div>
		</div>
	);
}

Panel.Stack = Stack;
Panel.View = View;

export default function Panel(attrs) {
	return (
		<div className={`mvc_sb-panel ${$.panel} ${attrs.className}`}>
			{attrs.children}
		</div>
	);
}
