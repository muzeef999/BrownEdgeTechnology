'use client';

import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaComment,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaTag,
  FaUser,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  IoCall,
  IoChatbubbleEllipsesOutline,
  IoLocationOutline,
} from "react-icons/io5";
import contactus from "../asserts/contactus.png";
import bgcontact from "../asserts/bgcontact.jpg";
import "../Styles/contact.css";
import Image from "next/image";

const Page = () => {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
  };

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // Set loader to true only once when the component mounts
    setLoader(true);
  }, []); // Added empty dependency array to avoid infinite loop

  return (
    <>
      {!loader ? (
        <div className="loaderbox">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="position-relative video-container">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/contact.mp4"
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
                Contact Us
              </h1>
            </div>
          </div>

          <br />
          <div
            className="container"
            style={{
              borderRadius: "10px",
              backgroundColor: "#FFF",
              boxShadow:
                "0 4px 8px rgba(0, 0, 0, 0.2),  0 6px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="row p-2">
              <div
                className="col-md-4 card"
                style={{
                  backgroundColor: "#974c01",
                  color: "#FFF",
                  padding: "0px",
                }}
              >
                <div className="p-5">
                  <h2>Contact Information:</h2>
                  <p>
                    We will create high-quality, linkable content and build at least
                    40 high-authority backlinks for your website.
                  </p>
                  <p>
                    <IoLocationOutline />
                    &nbsp; H.No.16-2-741/A/18/1, Flat No.4, Adithyasai Apartments,
                    Asmangadh, SBH Colony Road No.1, Malakpet, Hyderabad-500036.
                  </p>
                  <p>
                    <IoChatbubbleEllipsesOutline />
                    &nbsp; Chat with an Expert
                  </p>
                  <p>
                    <IoCall /> +91 8884851128
                  </p>
                  <p>
                    <IoMdMail /> info@brownedgetechnology.com
                  </p>
                </div>
                <div>
                  <Image
                    src={contactus}
                    alt="Contact Us"
                    style={{
                      width: "60%",
                      height: "auto",
                      marginTop: "-160px",
                      float: "right",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-8 p-5">
                <Form className="d-flex flex-column justify-content-between h-100">
                  <Row>
                    <Col md={6}>
                      <Form.Group
                        controlId="formName"
                        className={`form-group ${focus.name ? "focused" : ""}`}
                      >
                        <Form.Label className="custom-label">
                          <FaUser /> Your Name
                        </Form.Label>
                        <Form.Control
                          className="custom-input"
                          type="text"
                          placeholder="John Trangely"
                          onFocus={() => handleFocus("name")}
                          onBlur={(e) => handleBlur("name")}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="formEmail"
                        className={`form-group ${focus.email ? "focused" : ""}`}
                      >
                        <Form.Label className="custom-label">
                          <FaEnvelope /> Your Email
                        </Form.Label>
                        <Form.Control
                          className="custom-input"
                          type="email"
                          placeholder="hello@nuracy.com"
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlur("email")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group
                    controlId="formSubject"
                    className={`form-group mb-3 ${focus.subject ? "focused" : ""}`}
                  >
                    <Form.Label className="custom-label">
                      <FaTag /> Your Subject
                    </Form.Label>
                    <Form.Control
                      className="custom-input"
                      type="text"
                      placeholder="I want to hire you quickly"
                      onFocus={() => handleFocus("subject")}
                      onBlur={() => handleBlur("subject")}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formMessage"
                    className={`form-group mb-3 ${focus.message ? "focused" : ""}`}
                  >
                    <Form.Label className="custom-label">
                      <FaComment /> Message
                    </Form.Label>
                    <Form.Control
                      className="custom-input"
                      as="textarea"
                      rows={3}
                      placeholder="Write here your message"
                      onFocus={() => handleFocus("message")}
                      onBlur={() => handleBlur("message")}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="custom-button">
                    Send Message
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default Page;
