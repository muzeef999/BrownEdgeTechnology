import Image from 'next/image';
import React from 'react';
import aiimage from "../asserts/Digitalidentity.png"
import "bootstrap/dist/css/bootstrap.min.css";
const HeroSection = () => {
  return (
    <>
        <div className="position-relative video-container">
      <video
        className="video-bg"
        muted
        loop
        autoPlay
      >
        <source src="/carvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="black-overlay"></div>
      <div className="overlay-text">
        <h1 className="text-overlay">Emphasizes the innovative and transformative approach to automation using advanced technology.</h1>
      </div>
    </div>

    <div className='home-card container'>
      <div className="container tt">
        <div className="row bor">
          <div className="col-md-8">
          <div className='home'>
        <h1>Digital Transformation Control</h1>
        <p>Seamless integration of engineering and digital technologies for smart mobility solutions. Enhance efficiency with 
        a single tap.</p>
        <div>
          <button className='btn btn-success'>Discover innovation
          </button>
        </div>
        </div>
       
          </div>
          <div className="col-md-4">
          <div>
           <Image src={aiimage} alt="transform ai" style={{width:'40%', height:'auto'}}/>

        </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-md-5 bor">
           <h2>Automated System integration</h2>
           <p>Effortlessly automate recurring engineering processes. Simplify your 
workflow for greater productivity.</p>
          </div>
          <div className="col-md-5 bor " style={{backgroundColor:"	 #d9d9d9"}}>
          <h2>Collaborative Engineering Teams</h2>
           <p>Empower your team with collaborative tools. Enhance transparencyin engineering operations.</p>
          </div>
        </div>
      </div>
     
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-8">
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6 box"></div>
                <div className="col-md-6 box"></div>
                <div className="col-md-6 box"></div>
                <div className="col-md-6 box"></div>
              </div>
            </div>
        </div>
        <div className="col-md-4 my-5">
        <div className="box2">

        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;