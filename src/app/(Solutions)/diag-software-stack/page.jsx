"use client"; // Ensures the component is rendered on the client-side

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div style={{overflow:"hidden"}}>
      {
        !loader ? (
          <div className="loaderbox">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <div className="position-relative video-container" data-aos="fade-in">
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item"
                  src="/bootloader.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div
                className="position-absolute w-100 h-100"
                style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              ></div>
              <div className="container sec position-absolute top-50 start-50 translate-middle text-center" data-aos="zoom-in">
                <h1
                  style={{ color: "#FFF", fontWeight: "500" }}
                  className="about-data"
                >
                  DIAG SOFTWARE STACK
                </h1>
              </div>
            </div>

            <div className="container my-3">
              <h2 className='text-center mb-3' data-aos="fade-up">DIAG SOFTWARE STACK</h2>

              <p className="p" data-aos="fade-right">
                Our UDS Protocol stack is designed to run on tiny microcontrollers with a low memory footprint supporting mandatory limited set of UDS services.
              </p>
              <p className="p" data-aos="fade-left">
                Fully customizable to add new services according to customer requirements.
              </p>
              <p className="p" data-aos="fade-right">
                It is compliant with ISO14229 standard and easily integrated with our CAN Stack.
              </p>

              <div className="row">
                <div className="col-md-6" data-aos="fade-up">
                  <h2 style={{ color: " #964B00" }}>Below are the main features of UDS Stack,</h2>
                  <ul className='list-item'>
                    <li>Low Memory Footprint</li>
                    <li>Support of ECU Reprogramming</li>
                    <li>Remote vehicle diagnostics</li>
                    <li>Fault Detection</li>
                    <li>Platform Independent</li>
                    <li>Compliant with MISRA Standards</li>
                    <li>Use with or without RTOS</li>
                    <li>Contains UDS Client and UDS Server</li>
                  </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center" data-aos="fade-up">
                  <img src="/ecu.jpg" style={{ width: '100%', borderRadius: '20px' }} />
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
