"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="video">
        <video src="/car.mp4" muted autoPlay loop className="videoplayer"></video>
        <div className="text-overlay">
          <p className="title" data-aos="fade-up" data-aos-duration="1000">BROWN EDGE TECHNOLOGY PVT LTD</p>
          <p className="subtitle" data-aos="fade-up" data-aos-duration="1200">Revolutionizing Smart Mobility with Cutting-Edge Engineering Solutions</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
