import React, { useState } from "react";
import $ from "./style.module.css";

export default (props) => {
  return (
    <div>
      <form>
        <div className={`form-group ${$.formGroup}`}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Video Title"
          />
        </div>
      </form>
    </div>
  );
};
