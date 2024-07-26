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
        <div className="container sec position-absolute top-50 start-50 translate-middle text-center">
          <h1
            style={{ color: "#FFF", fontWeight: "500" }}
            className="about-data"
          >
            BOOTLOADER
          </h1>
        </div>
      </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'>BOOTLOADER ON CAN</h2>
        <div className="row">
          <div className="col-md-6"> 
            <p className="p">
            Our CAN Bootloader stack supports flashing ECUs through UDS protocol over the CAN bus.The stack is built keeping security in mind, and various encryption algorithms are integrated into stack to support secure boot. Secure bootloader verifies the authenticity and integrity of user application code before every execution.
            </p>
            <p className="p">
            The stack can be customized to use protocol other than CAN such as TCP/IP and LIN.  
            </p>
            <h2 style={{color:" #964B00"}}>Below are the main features of our solution</h2>
            <ul className='list-item'>
<li>Low Memory Footprint</li>
<li>Flashing via UDS Protocol</li>
<li>Secure Boot</li>
<li>Dual Bank approach to support rollover during flash interruption</li>
<li>Configurable to incorporate HW specific Security features</li>
<li>Compliant with MISRA Standards</li>
            </ul>
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
