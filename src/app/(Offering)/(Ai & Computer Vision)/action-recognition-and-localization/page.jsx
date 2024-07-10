"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";
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
   </div> : <div>
   <div className="video">
      <video src='/ais.mp4' muted autoPlay loop className='videoplayer about-video'></video>
      
         <div className='container sec'>
          <br/>
          <br/>
          <div className='row  '>

           
          
             <h1 style={{color:'#FFF', fontWeight:'500'}} className="about-data">Action-Recognition-And-Localization</h1>
             {/* <p style={{color:'#FFF', fontWeight:'700', fontSize:'35px'}}>Revolutionizing Smart Mobility with Cutting-Edge Engineering Solutions</p> */}
       
       
    
          </div>
          </div>
   
    </div>

      <div className="container my-5">
        <h2 className='text-center mb-3'>Action Recognition and Localization in a Weakly Supervised Manner</h2>
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Problem Overview</h2>
            <p className='p'>One of the biggest challenges in Video Content Analysis is the annotation requirements at scale.</p>

            <p className='p'>The increase in visual data and the necessity to make meaningful sense out of it requires sophisticated Models. These models are data heavy and require annotations at a granular level to learn patterns in the data</p>


            <p className='p'>To reduce dependency on data annotation we need more algorithms with less dependency on annotation.</p>

            <p className='p'>To bring forth the idea we have benchmarked the performance of a novel weakly supervised method for action recognition and classification.</p>

            <p className='p'>In this method we localize an action in a video without bounding box information, but, with class labels only.</p>
            </div>
            <div className="col-md-6"></div>
        </div>

        <h2 style={{color:" #964B00"}}>Problem Overview</h2>

        <p className="p">Deep learning has been successfully applied to action recognition and localization tasks because of its ability to learn discriminative features automatically from images/videos. Since the success of these methods depends on the availability of accurate spatiotemporal annotations, they cannot leverage the benefit of rapid growth in unstructured video data having only clip-level annotations. Also, most of the existing deep learning methods treat each frame independently and thus ignore temporal continuity (i.e., motion information) in a video clip which is crucial for action recognition and localization.</p>


        <h2 style={{color:" #964B00"}}>Approach</h2>

<p className="p">We approach the problem by identifying key descriptor points in videos along with their mutual interactions for a particular action. The mutual relationships amplify the presence of a particular action in a video. The background and the irrelevant feature points are filtered by thresholding the mutual relationship index w.r.t to the key descriptors.</p>

<p className="p">The steps followed are as follows:</p>

<ul className='list-item'>
    <li>Extract local features + Global Features through</li>
    <li>Capture mutual relationships among local descriptors</li>
    <li>Remove noisy points by thresholding action-specific mutual relationship score</li>
    <li>Create a relationship tube/graph for each action point</li>
    <li>Learn to classify the graph into certain action buckets</li>
  </ul>

  <h2 style={{color:" #964B00"}}>Impact</h2>
  <p className="p">The method has shown a state-of-the-art performance on benchmark datasets compared to fully supervised methods as well as other weakly supervised methods.</p>


      </div>
   </div>
  }

</div>
  )
}

export default page

import React from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";
const page = () => {
  return (
   <div>
   <div className="video">
      <video src='/ais.mp4' muted autoPlay loop className='videoplayer about-video'></video>
      
         <div className='container sec'>
          <br/>
          <br/>
          <div className='row  '>

           
          
             <h1 style={{color:'#FFF', fontWeight:'500'}} className="about-data">Action-Recognition-And-Localization</h1>
             {/* <p style={{color:'#FFF', fontWeight:'700', fontSize:'35px'}}>Revolutionizing Smart Mobility with Cutting-Edge Engineering Solutions</p> */}
       
       
    
          </div>
          </div>
   
    </div>

      <div className="container my-5">
        <h2 className='text-center mb-3'>Action Recognition and Localization in a Weakly Supervised Manner</h2>
        <div className="row">
            <div className="col-md-6">
            <h2 style={{color:" #964B00"}}>Problem Overview</h2>
            <p className='p'>One of the biggest challenges in Video Content Analysis is the annotation requirements at scale.</p>

            <p className='p'>The increase in visual data and the necessity to make meaningful sense out of it requires sophisticated Models. These models are data heavy and require annotations at a granular level to learn patterns in the data</p>


            <p className='p'>To reduce dependency on data annotation we need more algorithms with less dependency on annotation.</p>

            <p className='p'>To bring forth the idea we have benchmarked the performance of a novel weakly supervised method for action recognition and classification.</p>

            <p className='p'>In this method we localize an action in a video without bounding box information, but, with class labels only.</p>
            </div>
            <div className="col-md-6"></div>
        </div>

        <h2 style={{color:" #964B00"}}>Problem Overview</h2>

        <p className="p">Deep learning has been successfully applied to action recognition and localization tasks because of its ability to learn discriminative features automatically from images/videos. Since the success of these methods depends on the availability of accurate spatiotemporal annotations, they cannot leverage the benefit of rapid growth in unstructured video data having only clip-level annotations. Also, most of the existing deep learning methods treat each frame independently and thus ignore temporal continuity (i.e., motion information) in a video clip which is crucial for action recognition and localization.</p>


        <h2 style={{color:" #964B00"}}>Approach</h2>

<p className="p">We approach the problem by identifying key descriptor points in videos along with their mutual interactions for a particular action. The mutual relationships amplify the presence of a particular action in a video. The background and the irrelevant feature points are filtered by thresholding the mutual relationship index w.r.t to the key descriptors.</p>

<p className="p">The steps followed are as follows:</p>

<ul className='list-item'>
    <li>Extract local features + Global Features through</li>
    <li>Capture mutual relationships among local descriptors</li>
    <li>Remove noisy points by thresholding action-specific mutual relationship score</li>
    <li>Create a relationship tube/graph for each action point</li>
    <li>Learn to classify the graph into certain action buckets</li>
  </ul>

  <h2 style={{color:" #964B00"}}>Impact</h2>
  <p className="p">The method has shown a state-of-the-art performance on benchmark datasets compared to fully supervised methods as well as other weakly supervised methods.</p>


      </div>
   </div>
  )
}

export default page
