"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
const page = () => {
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
        <div className="video">
      <video src='/validation.mp4' muted autoPlay loop className='videoplayer about-video'></video>
      
         <div className='container sec'>
          <br/>
          <br/>
          <div className='row  '>

           
          
             <h1 style={{color:'#FFF', fontWeight:'500'}} className="about-data">System Validataion</h1>
             {/* <p style={{color:'#FFF', fontWeight:'700', fontSize:'35px'}}>Revolutionizing Smart Mobility with Cutting-Edge Engineering Solutions</p> */}
       
       
    
          </div>
          </div>
   
    </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'>System validation – ADAS</h2>
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Problem Overview</h2>
            <p className='p'>In today’s automotive world ADAS feature plays a prominent role in facilitating driving activities for a safe and comfortable ride. One too many ADAS functions are equipped in vehicles depending upon model and cost of production without compromising quality.</p>

            <p className='p'>Most of the OEMs exploit the potential of their own embedded systems and aim to deliver upgraded and bug-free software for Robust functionality.</p>


            <p className='p'>Verification and validation mitigate the fatal errors in the vehicle on road.</p>

            <p className="p">
            Verification is the process of checking that a software achieves its goal without any bugs.
            </p>
            <p className="p">Validation is the process of checking whether the software product is up to the mark or in other words product has high-level requirements.</p>
             
             <h5 style={{color:" #964B00"}}>System validation Process flow</h5>
             <p className="p ">
             Customer Requirements <span ><MdArrowRightAlt className='my-2'/></span>  System Requirement Document <span><MdArrowRightAlt /></span>  Requirement Review <span><MdArrowRightAlt /></span> Test case planning <span><MdArrowRightAlt /></span>  Testcase Design <span><MdArrowRightAlt /></span>  Test implementation & Execution <span><MdArrowRightAlt /></span> Test Automation <span><MdArrowRightAlt /></span>  Consolidate testing experience <span><MdArrowRightAlt /></span>  Test artifacts delivery
             </p>

           

            </div>
            <div className="col-md-6">

            </div>
        </div>

    

        <h2 style={{color:" #964B00"}}>Challenges</h2>

        <ul className='list-item'>
           <li>Automation of all use cases is limited.</li>
           <li>TestSetup should be handled with awareness.</li>
           <li>Delivery of effective test product in target timeline.</li>
        </ul>


        <h2 style={{color:" #964B00"}}>Approach</h2>
        <h5 style={{color:" #964B00"}}>Flashing</h5>
<p className="p">
The flashing test involves validating the correct programming sequence,and upgrading /downgrading the protection process of the latest software released for the ECU through customer-provided tool conforming to the security standards.
</p>


  <h5 style={{color:" #964B00"}}>Vehicle diagnostics</h5>
  <p className="p">The testing goal is to verify that the communication between the tester tool and ECU is possible that diagnostic functions can be accessed and that the diagnostic functions are performing as required by the OEM.</p>
  <h5 style={{color:" #964B00"}}>Vehicle Communication</h5>
  <p className="p">
  The vehicle communication testing ensures reliability, security,and seamless data transfer between the tester and ECU. To validate the speed of Data Transmission. The automotive ethernet and CAN protocols are tested at each layer starting from the physical layer to the Application layer with the conformance to the various protocols used in the ECU.
  </p>


      </div>
   </div>
  }

</div>
  )
}

export default page
