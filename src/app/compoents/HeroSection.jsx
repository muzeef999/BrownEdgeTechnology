"use client"
import Image from 'next/image';
import React from 'react';
import aiimage from "../asserts/Digitalidentity.png"
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../asserts/validation.png"

import { FaGears } from "react-icons/fa6";
import { TbArrowMergeAltLeft } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineDeveloperMode } from "react-icons/md";




const HeroSection = () => {
  return (
    <>
    
    <div className="video">
  <video src="/car.mp4" muted autoPlay loop className="videoplayer"></video>
  <div className="text-overlay">
    <p className="title">BROWN EDGE TECHNOLOGY PVT LTD</p>
    <p className="subtitle">Revolutionizing Smart Mobility with Cutting-Edge Engineering Solutions</p>
  </div>
</div>

<style jsx>{`
  .video {
    position: relative;
    width: 100%;
    height: auto;
  }

  .videoplayer {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for readability */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Shadow for the text container */
  }

  .title {
    color: #FFF;
    font-weight: 500;
    margin: 0; /* Remove default margin */
  }

  .subtitle {
    color: #FFF;
    font-weight: 700;
    font-size: 35px;
    margin: 10px 0 0 0; /* Adjust margin as needed */
  }
`}</style>
    


    </>
  );
};

export default HeroSection;
