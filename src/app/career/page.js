"use client";
import React, { useState } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";

const page = () => {
  const [activeTab, setActiveTab] = useState("company-culture");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
      <br />

      <div className="container mt-5">
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "company-culture" ? "active" : ""
              }`}
              id="company-culture-tab"
              onClick={() => handleTabClick("company-culture")}
              role="tab"
              aria-controls="company-culture"
              aria-selected={activeTab === "company-culture"}
            >
              COMPANY CULTURE
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "diversity" ? "active" : ""
              }`}
              id="diversity-tab"
              onClick={() => handleTabClick("diversity")}
              role="tab"
              aria-controls="diversity"
              aria-selected={activeTab === "diversity"}
            >
              DIVERSITY
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "job-opportunities" ? "active" : ""
              }`}
              id="job-opportunities-tab"
              onClick={() => handleTabClick("job-opportunities")}
              role="tab"
              aria-controls="job-opportunities"
              aria-selected={activeTab === "job-opportunities"}
            >
              JOB OPPORTUNITIES
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "company-culture" ? "show active" : ""
            }`}
            id="company-culture"
            role="tabpanel"
            aria-labelledby="company-culture-tab"
          >
            <p>Content for Company Culture</p>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "diversity" ? "show active" : ""
            }`}
            id="diversity"
            role="tabpanel"
            aria-labelledby="diversity-tab"
          >
            <p>Content for Diversity</p>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "job-opportunities" ? "show active" : ""
            }`}
            id="job-opportunities"
            role="tabpanel"
            aria-labelledby="job-opportunities-tab"
          >
            <p>Content for Job Opportunities</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default page;
