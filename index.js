import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./source/index.js";

document.addEventListener("DOMContentLoaded", function () {
	const root = document.getElementById("root");
	ReactDOM.render(<App />, root);
});
