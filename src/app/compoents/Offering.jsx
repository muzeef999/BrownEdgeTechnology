import React, { useEffect } from 'react';
import Image from 'next/image';
import Embedded from "../asserts/EmbeddedProduct.png";
import ai from "../asserts/aicomputer.png";
import verification from "../asserts/Verification.png";
import datascience from "../asserts/DataScience.png";
import title from "../asserts/title.png";
import tools from "../asserts/tools.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offering = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <div className='container'>
      <center>
        <h1 className='text-center' style={{borderBottom:'3px solid #964B00', width:'300px'}}>Our Innovations</h1>
      </center>
      <br/>
      <br/>
       
      <div className='grid-container-home'>
        <div className='grid-items-home' data-aos="fade-up" data-aos-delay="0">
          <div>
            <br/>
            <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
            <h5 className='text-center p-3'>Embedded Product</h5>
            <ul>
              <li>Intelligence Algorithm development</li>
              <li>Embedded Software Development - AUTOSAR</li>
              <li>Embedded Software Development - Linux/Android</li>
              <li>HMI, Application framework development</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        </div>

        <div className='grid-items-home' data-aos="fade-up" data-aos-delay="100">
          <div>
            <br/>
            <Image className='mx-auto d-block' src={datascience} style={{width:'30%', height:'auto'}}/>
            <h5 className='text-center p-3'>Data Science and Analytics</h5>
            <ul>
              <li>Data Acquisition & Ingestion</li>
              <li>Data Modeling, Staging and Warehousing</li>
              <li>ETL</li>
              <li>Database Management Systems and Data Mining</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        </div>

        <div className='grid-items-home' data-aos="fade-up" data-aos-delay="200">
          <div>
            <br/>
            <Image className='mx-auto d-block' src={ai} style={{width:'30%', height:'auto'}}/>
            <h5 className='text-center p-3'>AI and Computer Vision</h5>
            <ul>
              <li>Data Acquisition & Ingestion</li>
              <li>Data Modeling, Staging and Warehousing</li>
              <li>ETL</li>
              <li>Database Management Systems and Data Mining</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        </div>

        <div className='grid-items-home' data-aos="fade-up" data-aos-delay="300">
          <div>
            <br/>
            <Image className='mx-auto d-block p-3' src={tools} style={{width:'30%', height:'auto'}}/>
            <h5 className='text-center'>Tools and Automation</h5>
            <ul>
              <li>Data Management Framework</li>
              <li>Real time data tagging and Annotation Framework</li>
              <li>Data Visualization web framework</li>
              <li>Validation Tools</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        </div>

        <div className='grid-items-home' data-aos="fade-up" data-aos-delay="400">
          <div>
            <br/>
            <Image className='mx-auto d-block p-3' src={verification} style={{width:'30%', height:'auto'}}/>
            <h5 className='text-center'>Verification and validation</h5>
            <ul>
              <li>Test bench development</li>
              <li>Test Automation framework development</li>
              <li>Software testing (Unit, Integration & Functional)</li>
              <li>Model-based testing - MIL/SIL/HIL</li>
              <li>System testing</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        </div>

        <div className='grid-items-home' data-aos="fade-up" data-aos-delay="500">
          <div>
            <br/>
            <Image className='mx-auto d-block' src={title} style={{width:'30%', height:'auto'}}/>
            <h5 className='text-center p-3'>Mortgage / Title Insurance Service</h5>
            <ul>
              <li>Home loan origination and processing</li>
              <li>Title search and examination</li>
              <li>Title insurance issuance</li>
              <li>Mortgage refinancing services</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
