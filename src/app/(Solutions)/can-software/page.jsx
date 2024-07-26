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
</div> : <div>

<div className="position-relative video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src="/canstack.mp4"
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
            CAN SOFTWARE STACK
          </h1>
        </div>
      </div>

  <div className="container my-3">
    <br/>
    <h2 className='text-center mb-3'>CAN SOFTWARE STACK</h2>
    <br/>
    <div className="row">
      <div className="row">
        <p className="p">
        Our CAN Stack Solution will be an ideal solution for communication with ECU in Automotive CAN Network for products running on a tiny microcontroller.
        </p>
        <p className="p">
        Efficient Memory Utilization is of great Importance because of the necessity to run a complex application on a smaller device, our solution will be a right fit in such a memory-constrained environment as low memory footprint is the core objective of our solution.
        </p>
        <p className="p">
        Fully Customizable according to customer specific requirements with long-term support in Stack integration.
        </p>
        <h2 style={{color:" #964B00"}}>The stack is built around below key objectives to satisfy different use cases</h2>
        <ul style={{padding:'30px'}} className='list-item'>
<li>Low Memory Footprint</li>
<li>Reliability</li>
<li>Easy Portability</li>
<li>Scalability</li>
<li>Maintainability</li>
        </ul>
      </div>
        
    </div>
  </div>

  

  <div className="container">
  <p className="p">
  Complete software is designed as different layers to isolate HW-specific logic from application-specific logic, such an abstraction helps greatly in porting the stack to other platforms with very less development effort.
  </p>
  <p className="p">
  Best Practices are adopted from standard AUTOSAR architecture which in combination with our software design expertise promises a fail proof CAN Stack solution compliant to ISO11898 standards.
  </p>
 <p className="p">
 Fully Customizable according to customer specific requirements with long-term support in Stack integration.
 </p>

 <h2 style={{color:" #964B00"}}>Below are the notable features of our solution</h2>
 <ul className='list-item'>
<li>Support for CAN Message with payload greater than 8 bytes</li>
<li>Bus Off Handling and Auto recovery</li>
<li>Flow control</li>
<li>Remote sleep</li>
<li>Cyclic Message transmission</li>
<li>Receive Message Timeout Monitoring</li>
<li>Compatible with RTOS and Bare Metal Programming environment</li>
<li>Compliant with MISRA Standards</li>
 </ul>

  </div>
</div>
  }


</div>
  )
}

export default Page
