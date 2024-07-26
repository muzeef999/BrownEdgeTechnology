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
            src="/TestcaseAuthoringTool.mp4"
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
            Testcase Authoring Tool

          </h1>
        </div>
      </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'>Testcase Authoring Tool</h2>
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Problem Overview</h2>
            <p className='p'>Testing in automotive applications is equally critical and challenging due to various SW and HW components interacting with each other in a complex graph. This complexity of interactions is increasing exponentially over time. For production, a proper and a fault-proof system needs a robust and faster testing mechanism. The existing tools are independently capable of handling various steps of testing.</p>

            <p className='p'>However, the input, output, and complexity of test cases need more modularization, ease of execution, test management,and report generation.</p>
            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Approach</h2>
            <p className="p">This Tool developed by BrownEdge Technology is used for Test case Authoring</p>
            <ul className="list-item">
                <li>Step1: Test case creation and parameter update (like ID, State, Priority, etc).</li>
                <li>
                Step2: Test case and Requirement linkage (Bi-direction Traceability).
                </li>
                <li>
                Step3: Signal Mapping (DBC, CDD, PDX files).
                </li>
                <li>
                Step4: Test Script generation.
                </li>
                <li>
                Step5. Trigger dSPACE Automation Desk tool to begin the Test Automation.
                </li>
            </ul>
            <p className="p">
            The tool provides interfaces to interact with the Requirement Management (RM) tool (like IBM Doors, PTC Integrity, etc.). The Test cases are flushed to the RM tool for storage and baseline. Similarly, Test cases can also be resynced back from the RM tool as individual or Test suite(group).
            </p>
            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>
   </div>
    }
     
  </div>
  )
}

export default Page
