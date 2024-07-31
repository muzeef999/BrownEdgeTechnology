"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import one from "../asserts/carrer/1.jpg";
import two from "../asserts/carrer/2.jpg";
import three from "../asserts/carrer/3.jpg";
import four from "../asserts/carrer/4.jpg";
import five from "../asserts/carrer/5.jpg";
import six from "../asserts/carrer/6.jpg";
import seven from "../asserts/carrer/7.jpg";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Page = () => {
  const [activeTab, setActiveTab] = useState("company-culture");
  const [data, setdata] = useState([]);
  const [valid, setvalid] = useState(true);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    setloader(true);
    axios.get("https://node-bqys.onrender.com/postcarear/")
      .then((res) => {
        console.log(res.data, "dfasd");
        setdata(res.data);
        setloader(false); // Stop loader after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setloader(false); // Stop loader in case of error
      });
  }, []); // Dependency array added

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    appliedPosition: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://node-bqys.onrender.com/carear/create', formData);
      console.log('Form submitted successfully', response.data);
      setvalid(false);
      setFormData({
        name: '',
        email: '',
        number: '',
        appliedPosition: '',
        description: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <>
      {
        !loader ? <div className="loaderbox">
          <div className="loader"></div>
        </div> : <div>
          <div className="position-relative video-container">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/carrer.mp4"
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div
              className="position-absolute w-100 h-100"
              style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>
            <div className="container sec position-absolute top-50 start-50 translate-middle text-center">
              <h1
                style={{ color: "#FFF", fontWeight: "500" }}
                className="about-data"
              >
                carrer
              </h1>
            </div>
          </div>
          <br />

          <div className="container">
            <div className="d-flex justify-content-center align-items-center">
              <ul
                className="nav custom-btn-group justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "company-culture" ? "active1" : ""
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
                      activeTab === "diversity" ? "active1" : ""
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
                      activeTab === "job-opportunities" ? "active1" : ""
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
            </div>
            <br />
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "company-culture" ? "show active1" : ""
                }`}
                id="company-culture"
                role="tabpanel"
                aria-labelledby="company-culture-tab"
              >
                <h2 style={{ color: "#964B00" }}>What’s in it for you?</h2>
                <p>
                  Working at Brown Edge Technology is a journey in which our
                  employees can develop their strengths and advance their careers
                  while making a difference globally. If you’re looking for an
                  opportunity that will change the world and how we interact with
                  vehicles, join us. Brown Edge Technology is where the best
                  technical talent creates the future.
                </p>
                <br />

                <div className="row card-boxes">
                  {[one, two, three, four, five, six, seven].map((image, index) => (
                    <div className="col-sm-12 col-md-4" key={index}>
                      <div
                        className="card border-0"
                        style={{
                          boxShadow:
                            "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                          borderRadius: "6px",
                          height: "450px",
                        }}
                      >
                        <Image
                          src={image}
                          className="card-img-top"
                          style={{ width: "100%", height: "auto" }}
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Card Title</h5>
                          <p className="card-text">
                            Card description goes here.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "diversity" ? "show active1" : ""
                }`}
                id="diversity"
                role="tabpanel"
                aria-labelledby="diversity-tab"
              >
                <br />
                <h2 style={{ color: "#964B00" }}>
                  Diversity and Inclusion Statement
                </h2>
                <p>
                  For Brown Edge Technology, diversity represents an environment of
                  open communication where the contributions of all employees are
                  valued. As a multicultural organization, Brown Edge Technology
                  embraces human differences and harnesses the power of its
                  employees’ varied backgrounds, cultures and experiences to create
                  a competitive edge. Brown Edge Technology will continue to succeed
                  by fully engaging the diverse talents of all its employees.
                </p>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "job-opportunities" ? "show active1" : ""
                }`}
                id="job-opportunities"
                role="tabpanel"
                aria-labelledby="job-opportunities-tab"
              >
                <h1 style={{ textTransform: "capitalize" }}>Job opportunities</h1>
                <div className="container">
                  <div className="row d-flex ">
                    {
                      data && data.map((item, index) => (
                        <div className="col-md-4 boxes d-flex justify-content-between gap-3 mb-5" key={index}>
                          <div className="contentwrite">
                            <h3>{item.jobpost}</h3>
                            <div>
                              <span><FaLocationDot /></span>
                              <span className="ms-2">{item.location}</span>
                            </div>
                            <div className="my-3" style={{ fontWeight: "600" }}>
                              {item.jobdescription}
                            </div>
                            <button
                              className="btn btn-warning"
                              onClick={handleShow}
                            >
                              Apply Now
                            </button>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Image
                              src={item.img}
                              className="img-fluid"
                              alt={item.jobpost}
                            />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="appliedPosition" className="form-label">Applied Position</label>
              <input
                type="text"
                className="form-control"
                id="appliedPosition"
                name="appliedPosition"
                value={formData.appliedPosition}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Page;
