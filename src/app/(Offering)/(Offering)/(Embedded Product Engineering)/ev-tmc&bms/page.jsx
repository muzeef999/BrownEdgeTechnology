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
        <div>
          <div className="position-relative video-container" data-aos="fade-in">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/ev.mp4"
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
                EV – Traction Motor & BMS Software development
              </h1>
            </div>
          </div>

          <h2 className='text-center mb-5 my-5' data-aos="fade-up">EV – Traction Motor & BMS Software development</h2>

          <div className="container" data-aos="fade-up">
            <h2 style={{ color: "#964B00" }}>Problem Overview</h2>
            <p className='p'>BrownEdge Technology has developed a Traction Motor Control and Battery Management System solution for 2W/3W Electric Vehicle requirements. The platform is designed to support easy customization and quick implementation for all EV needs.</p>
            <div className="row">
              <div className="col-md-6 autocare">
                <h2 style={{ color: "#964B00" }}>Additional Features</h2>
                <ul className='list-item'>
                  <li>Automotive CAN, LIN support with In-house ready stack.</li>
                  <li>Bootloader for easy SW update.</li>
                  <li>UDS for Calibration, Fault recording and analysis.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-center">Traction Motor Control (TMC)</h5>
                <div>
                  <table className="table table-bordered">
                    <thead className="table-primary">
                      <tr>
                        <th scope="col" colspan="2" className="text-center">Key Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Target Application</td>
                        <td>2W &amp; 3W EV</td>
                      </tr>
                      <tr>
                        <td>Rated Power</td>
                        <td>500W</td>
                      </tr>
                      <tr>
                        <td>Rated Voltage</td>
                        <td>36/48 /60V</td>
                      </tr>
                      <tr>
                        <td>Current</td>
                        <td>16A Continuous</td>
                      </tr>
                      <tr>
                        <td>General Features</td>
                        <td>
                          <ul>
                            <li>FoC</li>
                            <li>Hall Sensor/BEMF position feedback</li>
                            <li>Motor current feedback</li>
                            <li>Motor &amp; Board Temperature feedback</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Safety Features</td>
                        <td>
                          <ul>
                            <li>Over-Current protection</li>
                            <li>Short Circuit protection</li>
                            <li>Over-Voltage protection</li>
                            <li>Reverse Polarity</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Communication</td>
                        <td>CAN &amp; RS485</td>
                      </tr>
                      <tr>
                        <td>Grade</td>
                        <td>Automotive</td>
                      </tr>
                      <tr>
                        <td>PCB Dimension</td>
                        <td>130 x 150 x 18mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <h5 className="text-center">Battery Management System (BMS)</h5>
                <div>
                  <table className="table table-bordered">
                    <thead className="table-primary">
                      <tr>
                        <th scope="col" colspan="2" className="text-center">Key Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Target Application</td>
                        <td>2W &amp; 3W EV</td>
                      </tr>
                      <tr>
                        <td>Battery Capacity</td>
                        <td>1.5 kWh</td>
                      </tr>
                      <tr>
                        <td>Rated Voltage</td>
                        <td>36/48 /60V</td>
                      </tr>
                      <tr>
                        <td>Current</td>
                        <td>30A Continuous</td>
                      </tr>
                      <tr>
                        <td>Cell Chemistry</td>
                        <td>Lithium-ion</td>
                      </tr>
                      <tr>
                        <td>Cell Configuration</td>
                        <td>13S X 12P</td>
                      </tr>
                      <tr>
                        <td>General Features</td>
                        <td>
                          <ul>
                            <li>Cell Balancing</li>
                            <li>Cell Monitoring</li>
                            <li>Temperature Monitoring</li>
                            <li>SoC &amp; SoH</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Safety Features</td>
                        <td>
                          <ul>
                            <li>Over-Current protection</li>
                            <li>Short Circuit protection</li>
                            <li>Over-Charge protection</li>
                            <li>Over-Discharge protection</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Communication</td>
                        <td>CAN &amp; RS485</td>
                      </tr>
                      <tr>
                        <td>Grade</td>
                        <td>Industrial</td>
                      </tr>
                      <tr>
                        <td>Enclosure Dimension</td>
                        <td>320 x 290 x 125 mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
