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
            src="/aboutvideo.mp4"
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
            Infotainment
          </h1>
        </div>
      </div>

    <h2 className='text-center mb-5 my-5'>Infotainment</h2>

    <div className="container">
      <div className="row">
      <h2 style={{color:" #964B00"}}>In-Vehicle Infotainment Software Development</h2>

        <div className="col-md-6 autocare">
    
        <p>We have demonstrated a unique competency in developing the key features of IVI systems on different platforms – Linux/Android.</p>
        <ul className='list-item'>
    <li>HMI development</li>
    <li>Application framework/ development</li>
    <li>Middleware software development</li>
    <li>BSP customization/ optimization</li>
    <li>
    Driver development</li>
    <li>Kernel customization/optimization</li>
    <li>Porting IVI software on different hardware & OS platforms.</li>
  </ul>
        </div>
        <div className="col-md-6">
          
        </div>
      </div>
    </div>



<div className="container my-5">
  <div className="row d-flex justify-content-center ">
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Media</h3>
    <li>Audio Streaming</li>
    <li>Media Browsing</li>
    <li>Metadata handling</li>
    <li>Video Streaming</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Tuner</h3>
    <li>FM, AM and DAB handling</li>
    <li>Station Seeking and scanning</li>
    <li>Station Metadata handling</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Bluetooth (5.1)</h3>
    <li>Connection Management</li>
    <li>HF and A2DP Profile Management</li>
    <li>BT Streaming</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Power Management</h3>
    <li>System Power Mode handling</li>
    <li>Power On/Off cycle Management</li>
    <li>Reset Handling</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Vehicle Interface</h3>
    <li>CAN Interface</li>
    <li>Signal Filtering</li>
    <li>Ignition Management</li>
    <li>Temperature control</li>
  </ul>
    </div>
  </div>
</div>


    </div>
    }
      
  </div>

  )
}

export default Page
