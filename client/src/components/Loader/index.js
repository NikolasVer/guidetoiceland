import React from "react";
import "./index.scss";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </div>
  );
};

export default Loader;
