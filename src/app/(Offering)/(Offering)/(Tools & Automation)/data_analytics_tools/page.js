"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaHome } from "react-icons/fa";

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      {!loader ? (
        <div className="loaderbox">
          <div className="loader"></div>
        </div>
      ) : (
        <div style={{overflow:"hidden"}}>
          <div className="position-relative video-container" data-aos="fade-in">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/datatool.mp4"
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div
              className="position-absolute w-100 h-100"
              style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>
            <div className="container sec position-absolute top-50 start-50 translate-middle text-center" data-aos="fade-up">
              <h1 style={{ color: "#FFF", fontWeight: "500" }} className="about-data">
                Data Analytics Tools
              </h1>
            </div>
          </div>

          <div className="container my-3" data-aos="fade-up">
            <h2 className='text-center mb-3'>Data Analytics Tools</h2>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <h2 style={{ color: "#964B00" }}>Problem Overview</h2>
                <p className='p'>Welcome to BrownEdge Technology, where innovation meets excellence in the automotive industry. Our commitment to quality and performance is powered by cutting-edge data analytics tools and methodologies. These tools help us enhance vehicle functionality, improve customer experiences, and optimize operations.</p>
                <p className='p'>However, the input, output, and complexity of test cases need more modularization, ease of execution, test management, and report generation.</p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center" data-aos="fade-left">
                <img src="/dataanaly.webp" style={{ width: "100%", borderRadius: "20px",height:"300px",objectFit:"cover" }} />
              </div>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <h4 style={{ color: "#964B00" }}>Benefits of Data Analytics at BrownEdge Technology</h4>
                <ul type='disc' className='ul'>
                  <li className='d-flex'>
                    <b>Enhanced Decision-Making:</b>
                    <p> Our data-driven approach ensures that decisions are informed by accurate and comprehensive data, improving vehicle performance and customer satisfaction.</p>
                  </li>
                  <li className='d-flex'>
                    <b>Predictive Maintenance:</b>
                    <p>By predicting vehicle maintenance needs, we reduce downtime and extend product lifespan.</p>
                  </li>
                  <li className='d-flex'>
                    <b>Customer Experience:</b>
                    <p>Analytics allows us to understand customer preferences and driving patterns, enabling us to tailor our offerings.</p>
                  </li>
                  <li className='d-flex'>
                    <b>Operational Efficiency:</b>
                    <p>We optimize manufacturing processes, reduce costs, and improve overall efficiency through data insights.</p>
                  </li>
                  <li className='d-flex'>
                    <b>Innovation and Development:</b>
                    <p>Data analytics fuels our innovation, helping us develop new features and technologies to meet market demands.</p>
                  </li>
                </ul>
                <p className="p">
                  At BrownEdge Technology, we are dedicated to leveraging the power of data analytics to drive excellence in the automotive industry. Our advanced tools and methodologies ensure that our products are reliable, efficient, and perfectly aligned with our customers' needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
