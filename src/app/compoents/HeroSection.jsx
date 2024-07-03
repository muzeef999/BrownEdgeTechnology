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
      <video src='/car.mp4' muted autoPlay loop className='videoplayer'></video>
      
         <div className='container sec'>
          <br/>
          <br/>
          <div className='row  d-flex justify-content-start align-items-start'>

            <div className='col-md-6 d-flex justify-content-end align-items-start'>
              <div>
             <p style={{color:'#FFF', fontWeight:'500'}}>BROWN EDGE TECHNOLOGY PVT LTD</p>
             <p style={{color:'#FFF', fontWeight:'700', fontSize:'35px'}}>Revolutionizing Smart Mobility with Cutting-Edge Engineering Solutions</p>
             </div>
            </div>
         <div className='col-md-6'>
{/* svg comes */}
         </div>
          </div>
          </div>
   
    </div>


    <br/>
    <br/>
    


    </>
  );
};

export default HeroSection;
