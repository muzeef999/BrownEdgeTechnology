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
            src="/validation1.mp4"
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
           Validation
          </h1>
        </div>
      </div>

      <div className="container my-3">
        <br/>
        
        <div className="row">
            <div className="col-md-12">
            <h2 style={{color:" #964B00"}}>System Validation at BrownEdge Technology</h2>
            <p className='p'>At BrownEdge Technology, ensuring the reliability and performance of our automotive systems is paramount. Our comprehensive validation process is designed to verify that our software and systems meet the highest standards of quality and functionality. This process mitigates the risk of errors and ensures a safe and efficient driving experience for our customers.</p>

            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <h4>System Validation Process</h4>
             <ol type='1'>
              <li> <h6 style={{color:" #964B00"}}>Customer Requirements</h6></li>
              <ul type="disc">
                <li><p>Collect and document detailed requirements from customers to ensure alignment with their needs and expectations.</p></li>
              
              </ul>
              <li> <h6 style={{color:" #964B00"}}>System Requirement Document</h6></li>
              <ul type="disc">
                <li><p>Develop a detailed system requirement document outlining specifications, functionalities, and performance criteria.</p></li>
              
             
              </ul> 
              <li> <h6 style={{color:" #964B00"}}>Requirement Review</h6></li>
              <ul type="disc">
                <li><p>Conduct thorough reviews of requirements to ensure clarity, completeness, and testability.</p></li>
              
               
              </ul>

              <li> <h6 style={{color:" #964B00"}}>Test Case Planning</h6></li>
              <ul type="disc">
                <li><p>Create a comprehensive test plan that includes strategies, objectives, scope, resources, schedule, and deliverables.</p></li>
               
              </ul>
             
              <li> <h6 style={{color:" #964B00"}}>Safety Testing</h6></li>
              <ul type="disc">
                <li><p>Test the software's ability to operate safely under all conditions, including fail-safe mechanisms.</p></li>

                <li><p> Ensures the safety of the vehicle and its occupants.</p></li>
               
              </ul>

            

             </ol>
        </div>
        <p>At BrownEdge Technology, we are committed to delivering automotive solutions that are thoroughly validated and meet the highest standards of quality and performance. Our robust validation process ensures that our customers can trust the reliability and safety of their vehicles.</p>
      </div>
    
   </div>
    }
     
  </div>
  )
}

export default Page
