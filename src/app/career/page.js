"use client";
import Image from "next/image";
import React, { useEffect, useState} from "react";
import { FaLocationDot } from "react-icons/fa6";

import one from "../asserts/carrer/1.jpg";
import two from "../asserts/carrer/2.jpg";
import three from "../asserts/carrer/3.jpg";
import four from "../asserts/carrer/4.jpg";
import five from "../asserts/carrer/5.jpg";
import six from "../asserts/carrer/6.jpg";
import seven from "../asserts/carrer/7.jpg";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Page = () => {
  const [activeTab, setActiveTab] = useState("company-culture");
  const [data,setdata] = useState([])
  const [valid,setvalid] =useState(true)
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [loader,setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
  })
  useEffect(()=>{
    axios.get("https://node-bqys.onrender.com/postcarear/")
    .then((res)=>{
      console.log(res.data,"dfasd")
      setdata(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
      },[])


      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);




      // separate


      const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        appliedPosition: '',
        description: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://node-bqys.onrender.com/carear/create', formData);
          console.log('Form submitted successfully', response.data);
          setvalid(false)
          setFormData({
            name: '',
            email: '',
            number: '',
            appliedPosition: '',
            description: '',
          });
        } catch (error) {
          console.error('There was an error submitting the form!', error);
        }
      };
    
  return (
    <>
    {
        !loader? <div className="loaderbox">
        <div className="loader"></div>
      </div> : <div>
      <div className="position-relative video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src="/carrer.mp4"
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
            carrer
          </h1>
        </div>
      </div>
      <br />

      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <ul
            className="nav custom-btn-group justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "company-culture" ? "active1" : ""
                }`}
                id="company-culture-tab"
                onClick={() => handleTabClick("company-culture")}
                role="tab"
                aria-controls="company-culture"
                aria-selected={activeTab === "company-culture"}
              >
                COMPANY CULTURE
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "diversity" ? "active1" : ""
                }`}
                id="diversity-tab"
                onClick={() => handleTabClick("diversity")}
                role="tab"
                aria-controls="diversity"
                aria-selected={activeTab === "diversity"}
              >
                DIVERSITY
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "job-opportunities" ? "active1" : ""
                }`}
                id="job-opportunities-tab"
                onClick={() => handleTabClick("job-opportunities")}
                role="tab"
                aria-controls="job-opportunities"
                aria-selected={activeTab === "job-opportunities"}
              >
                JOB OPPORTUNITIES
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "company-culture" ? "show active1" : ""
            }`}
            id="company-culture"
            role="tabpanel"
            aria-labelledby="company-culture-tab"
          >
            <h2 style={{ color: "#964B00" }}>What’s in it for you?</h2>
            <p>
              Working at Brown Edge Technology is a journey in which our
              employees can develop their strengths and advance their careers
              while making a difference globally. If you’re looking for an
              opportunity that will change the world and how we interact with
              vehicles, join us. Brown Edge Technology is where the best
              technical talent creates the future.
            </p>
            <br />

            <div class="row card-boxes">
              <div class="col-sm-12 col-md-4">
                <div class="card border-0">
                  <Image
                    src={one}
                    class="card-img-top "
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Apply your passion for technology
                    </h5>
                    <p class="card-text">
                      Experience the excitement of working for an innovative
                      core technology company that is leading the digital
                      revolution in automotive cockpit electronics, delivering
                      key product platforms that are essential to the cockpit of
                      the future and autonomous mobility.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={two}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Amazing job content</h5>
                    <p class="card-text">
                      Do meaningful and rewarding work. Get recognized for doing
                      great things in a company with a business model that is
                      innovative, nimble, customer-focused, entrepreneurial and
                      global.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={three}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Work with the best</h5>
                    <p class="card-text">
                      Work with some of the best technical experts in the
                      industry in a fast-paced environment that is focused on
                      technology and innovation in one of the most exciting
                      areas of technology today.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={four}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Great exposure and learning</h5>
                    <p class="card-text">
                      Work on multiple projects and with the world’s leading
                      vehicle manufacturers, across various functional domains.
                      Develop your skills and gain experience in emerging areas
                      of technology such as artificial Intelligence,
                      sensor-based automation, and new silicon and software
                      technologies in a global setting.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={five}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Opportunity to make a difference</h5>
                    <p class="card-text">
                      Impact the future of society through a company that is
                      advancing safer, more automated mobility and a seamless
                      user experience. Work in a sector that is a significant
                      driver of research and development investment and a key
                      contributor to the GDP.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="card border-0">
                  <Image
                    src={six}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Well-being</h5>
                    <p class="card-text">
                      Work in an inclusive and supportive organizational culture
                      that values employee well-being.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={seven}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Be part of a global company poised for growth
                    </h5>
                    <p class="card-text">
                      Contribute to a global organization, interacting with
                      employees across 17 countries. Brown Edge Technology is
                      poised for growth, with large backlog of business and a
                      growing base of top-tier OEM customers. Build your career
                      in a growing company that has opportunities across
                      multiple sites globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "diversity" ? "show active1" : ""
            }`}
            id="diversity"
            role="tabpanel"
            aria-labelledby="diversity-tab"
          >
            <br />
            <h2 style={{ color: "#964B00" }}>
              Diversity and Inclusion Statement
            </h2>
            <p>
              For Brown Edge Technology, diversity represents an environment of
              open communication where the contributions of all employees are
              valued. As a multicultural organization, Brown Edge Technology
              embraces human differences and harnesses the power of its
              employees’ varied backgrounds, cultures and experiences to create
              a competitive edge. Brown Edge Technology will continue to succeed
              by fully engaging the diverse talents of all its employees.
            </p>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "job-opportunities" ? "show active1" : ""
            }`}
            id="job-opportunities"
            role="tabpanel"
            aria-labelledby="job-opportunities-tab"
          >
            <h1 style={{textTransform:"capitalize"}}>Job opportunities</h1>
      <div className="container">
<div className="row d-flex ">
{
          data && data.map((item)=>{
            return(
            <div className="col-md-4 boxes  d-flex justify-content-between gap-3  mb-5 ">
  <div className="contentwrite">
                   <h3>{item.jobpost}</h3>
                   <div>
                     <span ><FaLocationDot /></span>
                     <span className="ms-2">{item.location}</span>
                   </div>

                   <div className="my-2 ">
                     <span ><b>Exp : </b></span>
                     <span className="ms-2">{item.experience}</span>
                   </div>

                   <div className="my-4 over">
                    <h4>About this job</h4>
                     <p className="my-1 " >{item.description}</p>
                   </div>

                       <button className="navbtn" onClick={handleShow}>Apply</button>
                </div>
              </div>
            )
          })
        }
  </div>
      </div>
          </div>
        </div>
      </div>
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
             valid ?   <form onSubmit={handleSubmit}>
             <div>
               <label>Name:</label>
               <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
             </div>
             <div>
               <label>Email:</label>
               <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
             </div>
             <div>
               <label>Phone Number:</label>
               <input className="form-control" type="text" name="number" value={formData.number} onChange={handleChange} required />
             </div>
             <div>
               <label>Applied Position:</label>
               <input className="form-control" type="text" name="appliedPosition" value={formData.appliedPosition} onChange={handleChange} required />
             </div>
             <div>
               <label>Description:</label>
               <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required></textarea>
             </div>
             <button type="submit" className="btn btn-success">Submit</button>
           </form> : <div>
            <h1>Your Form Submited Successfully Our Team Will Get Back To You</h1>
           </div>
          }
      
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
 </div>
    }

    </>
  );
};

export default Page;
