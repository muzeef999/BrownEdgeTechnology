import React from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="carrer">
        <div className="container">
          <h1>carrer</h1>
          <p className="d-flex justify-content-start align-items-center">
            <FaHome className="me-1" /> Home{" "}
            <span className="ms-1">
              <FaArrowRight />
              <b className="ms-1">carrer</b>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
