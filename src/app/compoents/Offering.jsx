import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Embedded from "../asserts/EmbeddedProduct.png";
import ai from "../asserts/aicomputer.png";
import verification from "../asserts/Verification.png";
import datascience from "../asserts/DataScience.png";
import title from "../asserts/title.png";
import tools from "../asserts/tools.png";

const offerings = [
  {
    image: Embedded,
    title: "Embedded Product",
    description: [
      "Intelligence Algorithm development",
      "Embedded Software Development - AUTOSAR",
      "Embedded Software Development - Linux/Android",
      "HMI, Application framework development"
    ],
    aos: "fade-right",
    delay: 0,
  },
  {
    image: datascience,
    title: "Data Science and Analytics",
    description: [
      "Data Acquisition & Ingestion",
      "Data Modeling, Staging and Warehousing",
      "ETL",
      "Database Management Systems and Data Mining"
    ],
    aos: "fade-right",
    delay: 200,
  },
  {
    image: ai,
    title: "AI and Computer Vision",
    description: [
      "Data Acquisition & Ingestion",
      "Data Modeling, Staging and Warehousing",
      "ETL",
      "Database Management Systems and Data Mining"
    ],
    aos: "fade-right",
    delay: 400,
  },
  {
    image: tools,
    title: "Tools and Automation",
    description: [
      "Data Management Framework",
      "Real-time data tagging and Annotation Framework",
      "Data Visualization web framework",
      "Validation Tools"
    ],
    aos: "fade-left",
    delay: 600,
  },
  {
    image: verification,
    title: "Verification and Validation",
    description: [
      "Test bench development",
      "Test Automation framework development",
      "Software testing (Unit, Integration & Functional)",
      "Model-based testing - MIL/SIL/HIL",
      "System testing"
    ],
    aos: "fade-left",
    delay: 800,
  },
  {
    image: title,
    title: "Title Insurance Service",
    description: [
      "Title Search and Examination Reports",
      "Commitment and Title Report Typing",
      "Policy Typing /  Data Entry",
      "Updates | Bring to Dates | Date Down",
      "Tax certification, along with legal typing and easement plotting"
    ],
    aos: "fade-left",
    delay: 1000,
  },
];

const Offering = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
      });
    }
  }, []);

  return (
    <div className='container'>
      <center>
        <h1 className='text-center' style={{ borderBottom: '3px solid #964B00', width: '300px' }}>
          Our Innovations
        </h1>
      </center>
      <br /><br />

      <div className='grid-container-home' data-aos="fade-up" data-aos-delay="200">
        {offerings.map(({ image, title, description, aos, delay }, index) => (
          <div className='grid-items-home' key={index} data-aos={aos} data-aos-delay={delay}>
            <br />
            <Image className='mx-auto d-block' src={image} style={{ width: '30%', height: 'auto' }} />
            <h5 className='text-center p-3'>{title}</h5>
            <ul>
              {description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="d-flex justify-content-center">
              <button className="navbtn" type="submit">&nbsp;Know More&nbsp;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offering;
