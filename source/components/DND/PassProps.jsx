import React, { Children, cloneElement } from "react";
import ReactDOM from "react-dom";

function removeProps(obj, propsToRemove) {
	let newObj = {};
	Object.keys(obj).forEach(key => {
		if (propsToRemove.indexOf(key) === -1) newObj[key] = obj[key];
	});
	return newObj;
}

export default props => {
	const newProps = { ...props };
	delete newProps.children;

	return Children.map(props.children, child => {
		newProps.className += " " + child.props.className || "";

		return cloneElement(child, { ...newProps });
	});
};
