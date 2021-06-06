import React, { useState } from "react";
import Views from "./Views";
import $ from "./style.module.css";

export default (props) => {
  return (
    <div className={$.dashboardSidebar}>
      <Views />
      <div className="btn-group btn-group-sm mr-2 mb-3">
        <button type="button" className="btn btn-light">
          Save
        </button>
        {/* <button type="button" className="btn btn-light">
					Preview
				</button> */}
      </div>
    </div>
  );
};
