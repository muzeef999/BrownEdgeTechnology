"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaHome } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setLoader(true);
  }, []);

  return (
    <div style={{overflow:"hidden"}} >
      {
        !loader ? (
          <div className="loaderbox">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <div className="position-relative video-container">
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item"
                  src="/softwaretestingorg.mp4"
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
                  data-aos="fade-up"
                >
                  Software Testing
                </h1>
              </div>
            </div>

            <div className="container my-3" data-aos="fade-up">
              <h2 className='text-center mb-3'>Software Testing</h2>
              <div className="row">

                <h2 style={{ color: "#964B00" }}>Problem Overview</h2>
                <p className='p'>At BrownEdgeTechnology, we ensure the highest quality and reliability in automotive software through rigorous testing processes. Our focus is on Advanced Driver Assistance Systems (ADAS) and other embedded systems, ensuring they meet stringent industry standards.</p>

                <h2 style={{ color: "#964B00" }}>Key Testing Approaches</h2>
                <ul type='disc'>
                  <li type="disc" className='d-flex' data-aos="fade-right"><b>Flashing:</b><p> Validate the correct programming sequence and secure software updates for ECUs.</p></li>
                  <li type="disc" className='d-flex' data-aos="fade-right"><b>Diagnostics:</b><p>Ensure communication and functionality between tester tools and ECUs.</p></li>
                  <li type="disc" className='d-flex' data-aos="fade-right"><b>Vehicle Communication:</b><p> Test reliability, security, and data transfer speed using automotive Ethernet and CAN protocols.</p></li>
                  <li type="disc" className='d-flex' data-aos="fade-right"><b>Performance Testing:</b><p> Assess software performance under various conditions.</p></li>
                  <li type="disc" className='d-flex' data-aos="fade-right"><b>Safety Testing:</b><p> Ensure the software operates safely under all conditions.</p></li>
                  <li type="disc" className='d-flex' data-aos="fade-right"><b>Security Testing:</b><p> Identify and address software vulnerabilities.</p></li>
                </ul>

                <div className="col-md-6">
                  <h4>Testing Process</h4>
                  <ol type='1'>
                    <li data-aos="fade-left">
                      <h6 style={{ color: "#964B00" }}>Customer Requirements</h6>
                      <ul type="disc">
                        <li><p>Gather and document customer expectations.</p></li>
                      </ul>
                    </li>
                    <li data-aos="fade-left">
                      <h6 style={{ color: "#964B00" }}>System Requirement Document</h6>
                      <ul type="disc">
                        <li><p>Detail software specifications and functionalities.</p></li>
                      </ul>
                    </li>
                    <li data-aos="fade-left">
                      <h6 style={{ color: "#964B00" }}>Requirement Review</h6>
                      <ul type="disc">
                        <li><p>Analyze and review for clarity and testability.</p></li>
                      </ul>
                    </li>
                    <li data-aos="fade-left">
                      <h6 style={{ color: "#964B00" }}>Test Case Planning</h6>
                      <ul type="disc">
                        <li><p>Develop a comprehensive test plan.</p></li>
                      </ul>
                    </li>
                    <li data-aos="fade-left">
                      <h6 style={{ color: "#964B00" }}>Test Case Design</h6>
                      <ul type="disc">
                        <li><p>Create detailed test cases for all scenarios.</p></li>
                      </ul>
                    </li>
                    <li data-aos="fade-left">
                      <h6 style={{ color: "#964B00" }}>Test Automation</h6>
                      <ul type="disc">
                        <li><p>Automate repetitive and regression tests.</p></li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img
                    src="/softte.webp"
                    className="h-0"
                    style={{ width: "100%", borderRadius: "20px", height: "400px", objectFit: "cover" }}
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Page;
