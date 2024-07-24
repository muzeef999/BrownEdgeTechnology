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
          System Requirements
          </h1>
        </div>
      </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'></h2>
        <div className="row">
            <div className="col-md-12">
            <h2 style={{color:" #964B00"}}>System Requirements at BrownEdge Technology</h2>
            <p className='p'>At BrownEdge Technology, defining clear and comprehensive system requirements is the cornerstone of developing reliable and high-performance automotive solutions. Our meticulous process ensures that all requirements are thoroughly documented, reviewed, and aligned with customer expectations, forming the foundation for successful software development and validation.</p>

            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <h4>System Requirements Process</h4>
             <ol type='1'>
              <li> <h6 style={{color:" #964B00"}}>Customer Requirements Gathering</h6></li>
              <ul type="disc">
                <li><p> Collect detailed requirements from customers to understand their needs and expectations.</p></li>
                <li><p>Conduct interviews, workshops, and surveys to gather input from stakeholders.</p></li>
                <li>Ensures that the final product aligns with customer goals and provides the desired functionality.</li>
              
              </ul>
              <li> <h6 style={{color:" #964B00"}}>Requirements Documentation</h6></li>
              <ul type="disc">
              <li><p>Develop a comprehensive System Requirements Document (SRD) that outlines all specifications and functionalities.</p></li>

<li><p>Functional requirements, non-functional requirements, system interfaces, performance criteria, and security specifications.</p></li>

<li><p>Provides a clear and detailed blueprint for the development and validation teams.</p></li>
              
             
              </ul> 
              <li> <h6 style={{color:" #964B00"}}>Requirement Review and Analysis</h6></li>
              <ul type="disc">
                <li><p>Conduct thorough reviews and analysis of the documented requirements to ensure clarity, completeness, and feasibility.</p></li>

                <li><p>Peer reviews, stakeholder feedback sessions, and feasibility studies.</p></li>

                <li><p>Identifies and resolves ambiguities or inconsistencies early in the process.</p></li>
              
               
              </ul>

            
             
             

            

             </ol>

             <h4>Types of System Requirements</h4>
             <ol type='1'>
              <li> <h6 style={{color:" #964B00"}}>Functional Requirements</h6></li>
              <ul type="disc">
                <li><p>Define the specific behaviors, functions, and interactions of the system.</p></li>
                <li><p>User authentication, data processing, and system outputs.</p></li>
                {/* <li>Ensures that the final product aligns with customer goals and provides the desired functionality.</li> */}
              
              </ul>
              <li> <h6 style={{color:" #964B00"}}>Non-Functional Requirements</h6></li>
              <ul type="disc">
              <li><p>Specify the criteria that judge the operation of a system, rather than specific behaviors.</p></li>

<li><p>Performance, reliability, scalability, and security.</p></li>

              
             
              </ul> 
              <li> <h6 style={{color:" #964B00"}}>Interface Requirements</h6></li>
              <ul type="disc">
                <li><p>Detail how the system interacts with other systems or components.</p></li>

                <li><p>APIs, communication protocols, and user interfaces.</p></li>

              
               
              </ul>


              <li> <h6 style={{color:" #964B00"}}>Performance Requirements</h6></li>
              <ul type="disc">
                <li><p>Define the performance criteria the system must meet.</p></li>

                <li><p> Response time, throughput, and resource utilization.</p></li>

              
               
              </ul>

            
             
             

            

             </ol>
        </div>
        <p>At BrownEdge Technology, we understand that clear and comprehensive system requirements are essential for the success of any automotive project. Our systematic approach to requirement gathering, documentation, and validation ensures that we deliver solutions that meet our customers' expectations and industry standards.</p>
      </div>
    
   </div>
    }
     
  </div>
  )
}

export default Page
