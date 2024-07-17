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
    </div> :  <div>
    <div className="position-relative video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src="/cm.mp4"
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
            DMS - Algorithm / Computer Vision
          </h1>
        </div>
      </div>

      <div className="container my-3">
        <h2 className='text-center mb-3'>DMS - Algorithm / Computer Vision</h2>
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Overview</h2>
            <p className='p'>From the past decade, we witnessed exponential adaption of Electronics and software dominance in the domestic and commercial vehicles and it is expected to increase in coming years. One of the key reasons is primarily passenger safety, autonomous driving functionalities, and vehicle connectivity and government policies encouraging electric vehicle manufacturing. The Indian market on autonomous electronics likely to cross 18 billion USD by 2027 [1] Based on a report from National crime records bureau survey 2020, 37 out of 100 deaths are due to road accidents. The high probability for road accidents is due to attention deficiency of drivers. The risks associated with human error can be mitigated through in cabin driver monitoring system mostly termed as Driver Monitoring System (DMS)</p>

          
            </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div class="col-lg-6">
<div class="problem_overview_content" >
<h4 class="problem_overview_title">Feature Components</h4>
<div class="mt-2">
<table class="table table-bordered">
<thead>
<tr>
<th scope="col" colspan="2" class="text-center">Feature Components</th>
</tr>
</thead>
<tbody>
<tr>
<td>Driver Alertness/Drowsiness &amp; Fatigue Monitoring</td>
<td><ul>
<li>Eyes Detection</li>
<li>Eyelid Opening</li>
<li>Eyes Direction/ Gaze Direction</li>
<li>Heart rate measuring system</li>
<li>Face temp</li>
<li>Eye blink rate</li>
<li>Face Landmark localization (yawn, eye close &amp;on call)</li>
<li>Drowsiness detection</li>
</ul></td>
</tr>
<tr>
<td>Identity Recognition</td>
<td><ul>
<li>Face detection</li>
<li>Face Recognition</li>
<li>Driver Identification for personalized settings</li>
<li>Interior /Occupant Monitoring Systems</li>
</ul></td>
</tr>
<tr>
<td>Vigilance Monitoring</td>
<td><ul>
<li>Facial analysis</li>
<li>Posture Analysis</li>
<li>Cabin passenger detection</li>
</ul></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
        </div>
      </div>

      <div className="container">
      <h2 style={{color:" #964B00"}}>Overview</h2>
      <p className="p">
      The Driver Monitoring System is equipped with RGB and IR sensors to capture driver facial and in cabin passenger visual data to identify, analyze, and localize activities. Based on various detection, tracking and Localization components various Alert Systems are actuated. The surveillance settings can be personalized to identify custom events as well which adds a layer on security as well.
      </p>

      <p className="p">
      The DMS system models are built with low latency Image processing techniques along with Deep Learning approaches for accurate and fast decision making.
      </p>

      </div>
   </div>
  }
   
 </div>
  )
}

export default Page
