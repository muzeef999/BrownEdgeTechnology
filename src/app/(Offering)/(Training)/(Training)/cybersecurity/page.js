"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";

const Page = () => {
  const [loader,setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
  })
  return (
  <div>
    {
      !loader? <div className="loaderbox">
      <div className="loader"></div>
    </div> :<div>
    <div className="position-relative video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src="/cybersecurity.mp4"
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
           Cyber Security
          </h1>
        </div>
      </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'>  Cyber Security</h2>
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Cybersecurity at BrownEdge Technology</h2>
            <p className='p'>At BrownEdge Technology, we prioritize the security and integrity of our automotive software and systems. As the automotive industry increasingly relies on digital technologies, ensuring robust cybersecurity measures is critical to protect our vehicles, data, and customers.</p>

            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <h4>Our Cybersecurity Approach</h4>
             <ol type='1'>
              <li> <h6 style={{color:" #964B00"}}>Comprehensive Security Framework</h6></li>
              <ul type="disc">
                <li><p>We implement a multi-layered security framework that encompasses all aspects of our automotive systems.</p></li>
                <li><p>Network security, application security, data protection, and endpoint security.</p></li>
                <li><p>Protects against a wide range of threats and ensures the integrity of our systems.</p></li>
              </ul>
              <li> <h6 style={{color:" #964B00"}}>Threat Detection and Prevention</h6></li>
              <ul type="disc">
                <li><p> Advanced tools and methodologies for detecting and preventing cyber threats in real-time.</p></li>
                <li><p>  Intrusion detection systems (IDS), intrusion prevention systems (IPS), and anomaly detection algorithms.</p></li>
                <li><p>Early detection and mitigation of potential security threats.</p></li>
              </ul> 
              <li> <h6 style={{color:" #964B00"}}>Secure Software Development</h6></li>
              <ul type="disc">
                <li><p>Integrating security practices into every stage of the software development lifecycle.</p></li>
                <li><p>Code reviews, vulnerability assessments, and security testing.</p></li>
                <li><p>Ensures that our software is secure from inception to deployment.</p></li>
              </ul>

              <li> <h6 style={{color:" #964B00"}}>Data Encryption and Privacy</h6></li>
              <ul type="disc">
                <li><p>Protecting sensitive data through encryption and robust privacy policies.</p></li>
                <li><p>Advanced encryption standards (AES), secure socket layer (SSL), and data masking.</p></li>
                <li><p> Ensures the confidentiality and integrity of customer and vehicle data.</p></li>
              </ul>
             

            

             </ol>
        </div>
        <p>At BrownEdge Technology, we are committed to providing secure, reliable automotive solutions that protect our customers and their data. Our comprehensive cybersecurity measures ensure that our vehicles are not only technologically advanced but also secure from potential threats.</p>
      </div>
    
   </div>
    }
     
  </div>
  )
}

export default Page
