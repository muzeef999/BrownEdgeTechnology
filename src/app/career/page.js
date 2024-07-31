"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import validation from "../asserts/validation.png";
import { FaLocationDot } from "react-icons/fa6";
import bgcontact from "../asserts/bgcontact.jpg";

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
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const Page = () => {
  const [activeTab, setActiveTab] = useState("company-culture");
  const [data, setdata] = useState([]);
  const [valid, setvalid] = useState(true);
  const [loader, setloader] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  useEffect(() => {
    setloader(true);
    axios.get("https://node-bqys.onrender.com/postcarear/")
      .then((res) => {
        console.log(res.data, "dfasd");
        setdata(res.data);
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
                data-aos="fade-up"
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
                  <div className="col-sm-12 col-md-4" data-aos="fade-right">
                    <div className="card border-0">
                      <Image
                        src={one}
                        className="card-img-top "
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Apply your passion for technology
                        </h5>
                        <p className="card-text">
                          Experience the excitement of working for an innovative
                          core technology company that is leading the digital
                          revolution in automotive cockpit electronics, delivering
                          key product platforms that are essential to the cockpit of
                          the future and autonomous mobility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4" data-aos="fade-up">
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
                        src={two}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Amazing job content</h5>
                        <p className="card-text">
                          Do meaningful and rewarding work. Get recognized for doing
                          great things in a company with a business model that is
                          innovative, nimble, customer-focused, entrepreneurial and
                          global.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4" data-aos="fade-left">
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
                        src={three}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Flexible and versatile environment
                        </h5>
                        <p className="card-text">
                          Working at Brown Edge Technology is a journey in which our
                          employees can develop their strengths and advance their
                          careers while making a difference globally. If you’re
                          looking for an opportunity that will change the world and
                          how we interact with vehicles, join us. Brown Edge
                          Technology is where the best technical talent creates the
                          future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane fade ${
                  activeTab === "diversity" ? "show active1" : ""
                }`}
                id="diversity"
                role="tabpanel"
                aria-labelledby="diversity-tab"
                data-aos="fade-up"
              >
                <h2 style={{ color: "#964B00" }}>Diversity and Inclusion</h2>
                <p>
                  Our team’s diverse backgrounds help us build the best technology
                  for our customers. We seek the most talented individuals from all
                  walks of life to contribute to our innovative products and services.
                  We are committed to fostering an inclusive workplace where all voices
                  are heard and respected.
                </p>
                <br />
                <div className="row card-boxes">
                  <div className="col-sm-12 col-md-4" data-aos="fade-left">
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
                        src={four}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Embracing Different Perspectives
                        </h5>
                        <p className="card-text">
                          We value different perspectives and experiences as they help
                          us create better solutions for our customers. Join us and be
                          part of a diverse and inclusive environment where you can
                          thrive and succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4" data-aos="fade-up">
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
                        src={five}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Building a Supportive Community
                        </h5>
                        <p className="card-text">
                          We are dedicated to building a supportive community where
                          everyone feels included and valued. Our programs and
                          initiatives are designed to promote diversity and foster a
                          sense of belonging.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4" data-aos="fade-right">
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
                        src={six}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Equal Opportunities for All
                        </h5>
                        <p className="card-text">
                          At Brown Edge Technology, we are committed to providing
                          equal opportunities to all employees. We believe in fairness
                          and are dedicated to ensuring that everyone has the chance
                          to succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane fade ${
                  activeTab === "job-opportunities" ? "show active1" : ""
                }`}
                id="job-opportunities"
                role="tabpanel"
                aria-labelledby="job-opportunities-tab"
                data-aos="fade-up"
              >
                <h2 style={{ color: "#964B00" }}>Job Opportunities</h2>
                <p>
                  Explore exciting career opportunities and join our team of
                  passionate individuals. We are always looking for talented and
                  motivated people to help us achieve our mission and make an
                  impact in the world.
                </p>
                <br />
                <div className="row card-boxes">
                  <div className="col-sm-12 col-md-4" data-aos="fade-left">
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
                        src={seven}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Software Engineer</h5>
                        <p className="card-text">
                          Join our team as a Software Engineer and work on cutting-edge
                          technologies to build innovative solutions. Apply your skills
                          and experience to make a real impact.
                        </p>
                        <Button variant="primary" onClick={handleShow}>
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Apply for Position</Modal.Title>
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
                    type="text"
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
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      }
    </>
  );
};

export default Page;
