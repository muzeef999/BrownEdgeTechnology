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
          <h1
            style={{ color: "#FFF", fontWeight: "500" }}
            className="about-data"
          >
          Sub Cyber Security Concept Phase
          </h1>
        </div>
      </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'></h2>
        <div className="row">
            <div className="col-md-12">
            <h2 style={{color:" #964B00"}}>
Cybersecurity Concept Phase at BrownEdge Technology
</h2>
            <p className='p'>At BrownEdge Technology, the cybersecurity concept phase is integral to ensuring that our automotive systems are designed with security in mind from the very beginning. This phase focuses on identifying potential threats, defining security requirements, and establishing a robust security architecture to protect our systems throughout their lifecycle.</p>

            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <h4>Threat Analysis and Risk Assessment (TARA)</h4>
             <ol type='1'>
              <li> <h6 style={{color:" #964B00"}}>Threat Analysis and Risk Assessment (TARA)</h6></li>
              <ul type="disc">
                <li><p>Identifying potential threats and vulnerabilities that could impact our automotive systems.</p></li>
                <li><p>Conducting detailed risk assessments, including threat modeling and attack surface analysis.</p></li>
                <li>Helps prioritize security measures based on the likelihood and impact of potential threats</li>
              
              </ul>
              <li> <h6 style={{color:" #964B00"}}>Security Requirements Definition</h6></li>
              <ul type="disc">
              <li><p>Defining clear and comprehensive security requirements to guide the design and development process.</p></li>

<li><p>Collaborating with stakeholders to gather security needs and expectations, and documenting these requirements.</p></li>

<li><p>Ensures that all security aspects are considered and addressed early in the development process.</p></li>
              </ul> 
              <li> <h6 style={{color:" #964B00"}}>Security Architecture Design</h6></li>
              <ul type="disc">
                <li><p>Establishing a robust security architecture that provides a strong foundation for protecting automotive systems.</p></li>

                <li><p>Designing security controls, protocols, and mechanisms that will be implemented in the system.</p></li>

                <li><p>Provides a clear blueprint for implementing security measures and ensures a cohesive approach to cybersecurity.</p></li>
              
               
              </ul>

            
             
             

            

             </ol>

          
        </div>

<h4>Key Outputs of the Cybersecurity Concept Phase</h4>

<ul className='cyber'>
  <li>
    <b>Threat Models:</b><span> Detailed models that identify potential threats and vulnerabilities in the system.</span>
  </li>

  <li>
    <b>Security Requirements Document:</b><span> A comprehensive document outlining all security requirements for the project.</span>
  </li>

  <li>
    <b>Security Architecture Blueprint : </b><span> A detailed design of the security architecture, including controls, protocols, and mechanisms.</span>
  </li>

  <li>
    <b>Security Policies and Procedures:</b><span> Formalized policies and procedures that guide the implementation and management of security measures.</span>
  </li>

  <li>
    <b>Training and Awareness Materials:</b><span> Resources and materials to educate and inform stakeholders about security practices.</span>
  </li>
</ul>

        <p>At BrownEdge Technology, we are committed to providing secure, reliable automotive solutions. Our cybersecurity concept phase ensures that security is built into the foundation of our systems, protecting our customers and their data from potential threats.</p>
      </div>
    
   </div>
    }
     
  </div>
  )
}

export default Page
