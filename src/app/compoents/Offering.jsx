import Image from 'next/image'
import React from 'react'
import Embedded  from "../asserts/EmbeddedProduct.png";

const Offering = () => {
  return (
    <div className='container'>
 
    <h1 className='text-center'>Our Offering</h1>
       
        <div className='grid-container-home'> 
            <div className='grid-items-home'>
              <div>
                <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
              <h5 className='text-center'>Embedded Product</h5>

              <ul>
  <li>Intelligence Algorithm development</li>
  <li>Embedded Software Development - AUTOSAR</li>
  <li>Embedded Software Development - Linux/Android</li>
  <li>HMI, Application framework development</li>
</ul>
<div class="d-flex justify-content-center">
  <button class="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
</div>

              </div>
              </div>



            <div className='grid-items-home'>
              <div>
              <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
              <h5 className='text-center'>Data Science and Analytics</h5>
              <ul>
  <li>Data Acquisition & Ingestion</li>
  <li>Data Modeling, Staging and Warehousing</li>
  <li>ETL</li>
  <li>Database Management Systems and Data Mining</li>
</ul>
<div class="d-flex justify-content-center">
  <button class="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
</div>

              </div>
              </div>
            <div className='grid-items-home'>
              <div>
              <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
              <h5 className='text-center'>AI and Computer Vision</h5>
              <ul>
  <li>Data Acquisition & Ingestion</li>
  <li>Data Modeling, Staging and Warehousing</li>
  <li>ETL</li>
  <li>Database Management Systems and Data Mining</li>
</ul>

<div class="d-flex justify-content-center">
  <button class="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
</div>

              </div>
              </div>
            <div className='grid-items-home'>
              <div>
              <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
              <h5 className='text-center'>Tools and Automation </h5>
              <ul>
  <li>Data Management Framework</li>
  <li>Real time data tagging and Annotation Framework</li>
  <li>Data Visualization web framework</li>
  <li>Validation Tools</li>
</ul>

<div class="d-flex justify-content-center">
  <button class="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
</div>

              </div>
              </div>
            <div className='grid-items-home'>
              <div>
              <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
              <h5 className='text-center'>Verification and validation</h5>
              <ul>
  <li>Test bench development</li>
  <li>Test Automation framework development</li>
  <li>Software testing (Unit, Integration & Functional)</li>
  <li>Model-based testing - MIL/SIL/HIL</li>
  <li>System testing</li>
</ul>

<div class="d-flex justify-content-center">
  <button class="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
</div>

              </div>
              </div>
            <div className='grid-items-home'> 
              <div>
              <Image className='mx-auto d-block' src={Embedded} style={{width:'30%', height:'auto'}}/>
              <h5 className='text-center'>mortgage / title insurance service</h5>

              <ul>
  <li>Home loan origination and processing</li>
  <li>Title search and examination</li>
  <li>Title insurance issuance</li>
  <li>Mortgage refinancing services</li>
</ul>

<div class="d-flex justify-content-center">
  <button class="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
</div>

              </div>
              </div>
        </div>
    </div>
  )
}






export default Offering