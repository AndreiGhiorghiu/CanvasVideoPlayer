import React, { useState } from "react";
import Sidebar from "$comp/Sidebar";
import Editor from "$comp/Editor";
import Dashboard from "./Dashboard";
import Photo from "./Photo";
import Video from "./Video";

import { api, useStore } from "./store";

export default (props) => {
  const { view } = useStore();

  return (
    <div>
      <Sidebar view={view}>
        <Dashboard.Sidebar title="Dashboard" name="dashboard" />
        <Photo.Sidebar
          title="Photo"
          name="photo"
          back={() => {
            api.setState({ view: (view === "photo" && "video") || "photo" });
          }}
        />
        <Video.Sidebar
          title="Video"
          name="video"
          back={() => {
            api.setState({ view: (view === "photo" && "video") || "photo" });
          }}
        />
      </Sidebar>
      <Editor view={api.getState().view}>
        <Dashboard.Editor name="dashboard" />
        <Photo.Editor name="photo" />
        <Video.Editor name="video" />
      </Editor>
    </div>
  );
};
