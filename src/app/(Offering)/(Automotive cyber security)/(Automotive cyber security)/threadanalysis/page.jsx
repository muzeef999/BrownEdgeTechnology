"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";

const Page = () => {
  const [loader, setloader] = useState(false)
  useEffect(() => {
    setloader(true)
  }, [])

  return (
    <div>
      {
        !loader ? <div className="loaderbox">
          <div className="loader"></div>
        </div> : <div>
          <div className="position-relative video-container">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/about.mp4"
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
              <h1 style={{ color: "#FFF", fontWeight: "500" }} className="about-data">
                Threat Analysis and Risk Assessment (TARA)
              </h1>
            </div>
          </div>

          <div className="container my-3">
            <h2 className='text-center mb-3'></h2>
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ color: "#964B00" }}>
                  Threat Analysis and Risk Assessment at BrownEdge Technology
                </h2>
                <p className='p'>
                  At BrownEdge Technology, the Threat Analysis and Risk Assessment (TARA) method is a crucial part of our cybersecurity framework. This method helps us identify, analyze, and mitigate potential threats and vulnerabilities in our automotive systems, ensuring they are secure and reliable.
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <h4>Key Activities in the TARA Method</h4>
              <ol type='1'>
                <li> <h6 style={{ color: "#964B00" }}>Threat Identification</h6></li>
                <ul type="disc">
                  <li><p>Identifying potential threats that could impact the automotive systems.</p></li>
                  <li><p>Utilizing threat intelligence, historical data, and expert analysis to recognize possible security risks.</p></li>
                  <li><p>Ensures all relevant threats are considered and documented.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Vulnerability Analysis</h6></li>
                <ul type="disc">
                  <li><p>Assessing system components to identify vulnerabilities that could be exploited by threats.</p></li>
                  <li><p>Conducting detailed security assessments, including penetration testing and code reviews.</p></li>
                  <li><p>Helps to understand weaknesses and potential points of failure.</p></li>
                </ul> 
                <li> <h6 style={{ color: "#964B00" }}>Risk Assessment</h6></li>
                <ul type="disc">
                  <li><p>Evaluating the risks associated with identified threats and vulnerabilities.</p></li>
                  <li><p>Using risk matrices and scoring models to quantify the likelihood and impact of potential risks.</p></li>
                  <li><p>Prioritizes risks to focus mitigation efforts on the most critical areas.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Mitigation Planning</h6></li>
                <ul type="disc">
                  <li><p>Developing strategies to mitigate identified risks and reduce vulnerabilities.</p></li>
                  <li><p>Implementing security controls, protocols, and countermeasures to address risks.</p></li>
                  <li><p>Ensures the system is protected against potential threats and vulnerabilities.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Continuous Monitoring</h6></li>
                <ul type="disc">
                  <li><p>Ongoing monitoring of the system to detect new threats and vulnerabilities.</p></li>
                  <li><p>Regularly updating risk assessments and mitigation strategies based on new information.</p></li>
                  <li><p>Maintains a proactive security posture to address evolving threats.</p></li>
                </ul>
              </ol>
            </div>

            <h4>Key Outputs of the TARA Method</h4>
            <ul className='tara'>
              <li>
                <b>Threat Models:</b><span> Detailed models that identify potential threats and vulnerabilities in the system.</span>
              </li>
              <li>
                <b>Risk Assessment Reports:</b><span> Comprehensive reports that evaluate the likelihood and impact of risks.</span>
              </li>
              <li>
                <b>Mitigation Plans:</b><span> Strategies and actions to reduce or eliminate risks.</span>
              </li>
              <li>
                <b>Security Controls Documentation:</b><span> Detailed documentation of the security measures implemented.</span>
              </li>
              <li>
                <b>Continuous Monitoring Plans:</b><span> Plans for ongoing system monitoring and risk reassessment.</span>
              </li>
            </ul>

            <p>At BrownEdge Technology, the TARA method is an essential part of our commitment to cybersecurity. By systematically identifying and addressing threats and vulnerabilities, we ensure our automotive systems are secure, reliable, and resilient against potential attacks.</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Page
