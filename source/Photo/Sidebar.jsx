import React, { Fragment, useEffect } from "react";

export default ({ scene }) => {
  if (!scene) return null;

  return (
    <Fragment>
      <div className="collapse navbar-collapse" id="navbarVertical"></div>
    </Fragment>
  );
};
