import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="loadingindicator" role="status">
        <span className="spinner">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;