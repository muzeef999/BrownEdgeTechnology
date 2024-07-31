"use client";
import React, { useEffect, useState } from "react";
import bgcontact from "../asserts/aboutus.jpg";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";
import gallery from "../asserts/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const [activeTab, setActiveTab] = useState("about-us");

  useEffect(() => {
    setLoader(true);
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of animation
  }, []);

  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{overflow:"hidden"}}>
      {!loader ? (
        <div className="loaderbox">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="position-relative video-container" data-aos="fade-in">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/about.mp4"
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
                About Us
              </h1>
            </div>
          </div>
          <br />
          <div className="container" data-aos="fade-up">
            <div className="d-flex justify-content-center align-items-center">
              <ul
                className="nav custom-btn-group justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "about-us" ? "active1" : ""
                    }`}
                    id="about-us-tab"
                    onClick={() => handleTabClick("about-us")}
                    role="tab"
                    aria-controls="about-us"
                    aria-selected={activeTab === "about-us"}
                  >
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "policies&compliance" ? "active1" : ""
                    }`}
                    id="policies&compliance-tab"
                    onClick={() => handleTabClick("policies&compliance")}
                    role="tab"
                    aria-controls="policies&compliance"
                    aria-selected={activeTab === "policies&compliance"}
                  >
                    POLICIES & COMPLIANCE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "suppliers" ? "active1" : ""
                    }`}
                    id="suppliers-tab"
                    onClick={() => handleTabClick("suppliers")}
                    role="tab"
                    aria-controls="suppliers"
                    aria-selected={activeTab === "suppliers"}
                  >
                    SUPPLIERS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "job-opportunities" ? "active1" : ""
                    }`}
                    id="job-opportunities-tab"
                    onClick={() => router.push("/contact")}
                    role="tab"
                    aria-controls="job-opportunities"
                    aria-selected={activeTab === "job-opportunities"}
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "about-us" ? "show active1" : ""
                }`}
                id="about-us"
                role="tabpanel"
                aria-labelledby="about-us-tab"
                data-aos="fade-right"
              >
                <div className="container">
                  <br />
                  <p
                    style={{ color: "#964b00", fontWeight: 600, fontSize: "30px" }}
                  >
                    Our Story:
                  </p>
                  <p>
                    Founded with a commitment to pioneering engineering solutions,
                    Brown Edge Technology was established to tackle the most
                    pressing challenges in the Smart Mobility space. Recognizing the
                    potential of data and digital technologies to transform
                    traditional engineering, we set out to create solutions that are
                    both innovative and practical.
                  </p>
                  <p>
                    Our journey began with a small team of passionate engineers and
                    technologists dedicated to exploring the intersection of data
                    and core engineering. Over the years, we've grown into a
                    category-defining firm, known for our novel approaches and
                    unwavering commitment to excellence. Our solutions are designed
                    to meet the evolving needs of the mobility sector, ensuring
                    safety, efficiency, and sustainability.
                  </p>
                  <p>
                    Today, Brown Edge Technology stands at the forefront of
                    engineering innovation, continuously pushing the boundaries of
                    what's possible in Smart Mobility. Our story is one of
                    relentless pursuit of excellence, driven by a vision of a
                    smarter, more connected future.
                  </p>
                  <div className="row m-5 row-d" data-aos="fade-left">
                    <div className="col-md-6">
                      <p
                        style={{
                          color: "#964b00",
                          fontWeight: 600,
                          fontSize: "30px",
                        }}
                      >
                        Mission:
                      </p>
                      <p>
                        At Brown Edge Technology, our mission is to redefine core
                        engineering challenges in the Smart Mobility sector through
                        innovative and data-driven solutions. We strive to bridge
                        the gap between traditional engineering and digital
                        technologies by leveraging data, embedded electronics, and
                        cutting-edge advancements in core engineering.
                      </p>
                      <br />
                      <p
                        style={{
                          color: "#964b00",
                          fontWeight: 600,
                          fontSize: "30px",
                        }}
                      >
                        Vision:
                      </p>
                      <p>
                        Our vision is to lead the Smart Mobility revolution with
                        next-generation smart systems that approach mobility
                        problems with novelty and innovation. We aim to set new
                        standards in engineering solutions, driving forward the
                        integration of digital and core engineering for a smarter,
                        more connected world.
                      </p>
                    </div>
                    <div
                      className="col-md-6 d-flex justify-content-center align-items-center"
                      style={{ objectFit: "cover" }}
                    >
                      <Image
                        src={gallery}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#964b00",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    Values:
                  </p>
                  <ul>
                    <li>
                      <b>Innovation:</b> We are committed to continuous
                      improvement and fostering a culture of creativity and
                      out-of-the-box thinking.
                    </li>
                    <li>
                      <b>Excellence:</b> We strive for the highest standards in
                      everything we do, from our engineering solutions to our
                      customer service.
                    </li>
                    <li>
                      <b>Integrity:</b> We conduct our business with honesty and
                      transparency, building trust with our clients and
                      partners.
                    </li>
                    <li>
                      <b>Collaboration:</b> We believe in the power of teamwork
                      and collaborative efforts to achieve exceptional results.
                    </li>
                    <li>
                      <b>Sustainability: </b>We are dedicated to creating
                      solutions that are not only effective but also
                      environmentally responsible.
                    </li>
                  </ul>
                  <br />
                  <p
                    style={{ color: "#964b00", fontWeight: 600, fontSize: "30px" }}
                  >
                    Core Components of Brown Edge Technology
                  </p>
                  <p>
                    At Brown Edge Technology, our core components include leveraging
                    data-driven engineering to optimize designs and improve
                    performance, integrating state-of-the-art embedded electronics
                    for real-time monitoring and control, utilizing advanced
                    materials to enhance durability and efficiency, and developing
                    intelligent smart systems that learn and adapt. We focus on a
                    customer-centric approach, tailoring our solutions to meet
                    specific needs and ensuring the highest quality and reliability
                    standards in the industry.
                  </p>
                  <div className="row m-5 row-d" data-aos="fade-right">
                    <div
                      className="col-md-6 d-flex justify-content-center align-items-center"
                      style={{ objectFit: "cover" }}
                    >
                      <Image
                        src={gallery}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <p
                        style={{
                          color: "#964b00",
                          fontWeight: 600,
                          fontSize: "30px",
                        }}
                      >
                        Journey:
                      </p>
                      <p>
                        Our journey at Brown Edge Technology has been marked by a
                        relentless pursuit of engineering excellence and
                        innovation. From our humble beginnings to becoming a
                        category-defining firm, we have remained committed to
                        addressing the most pressing challenges in the Smart
                        Mobility space. Through our unwavering dedication to
                        pioneering solutions and our focus on integrating digital
                        technologies with traditional engineering, we have achieved
                        remarkable milestones. Our journey continues as we push the
                        boundaries of what's possible in Smart Mobility and strive
                        to create a smarter, more connected future.
                      </p>
                      <br />
                      <p
                        style={{
                          color: "#964b00",
                          fontWeight: 600,
                          fontSize: "30px",
                        }}
                      >
                        Expertise:
                      </p>
                      <p>
                        At Brown Edge Technology, we pride ourselves on our
                        extensive expertise in the Smart Mobility sector. Our team
                        comprises experienced engineers, technologists, and
                        innovators who bring a wealth of knowledge and skills to
                        every project. With a deep understanding of core
                        engineering principles and cutting-edge digital
                        technologies, we deliver solutions that are both innovative
                        and practical. Our expertise spans data-driven engineering,
                        embedded electronics, advanced materials, and intelligent
                        smart systems, enabling us to tackle complex challenges and
                        drive forward the Smart Mobility revolution.
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#964b00",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    Future:
                  </p>
                  <p>
                    Looking ahead, Brown Edge Technology is poised to continue
                    leading the Smart Mobility revolution. We are committed to
                    staying at the forefront of engineering innovation, continuously
                    pushing the boundaries of what's possible. Our focus remains on
                    creating next-generation smart systems that address the evolving
                    needs of the mobility sector. With a vision of a smarter, more
                    connected future, we will continue to redefine core engineering
                    challenges and drive forward the integration of digital
                    technologies with traditional engineering. Our journey is one
                    of relentless pursuit of excellence, and we look forward to
                    shaping the future of Smart Mobility with innovative and
                    data-driven solutions.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "policies&compliance" ? "show active1" : ""
                }`}
                id="policies&compliance"
                role="tabpanel"
                aria-labelledby="policies&compliance-tab"
                data-aos="fade-left"
              >
                <p>
                  Brown Edge Technology operates with a steadfast commitment to
                  compliance and integrity, upholding the highest standards in all
                  aspects of our business. Our policies are designed to ensure
                  ethical conduct, regulatory compliance, and the protection of our
                  clients, employees, and stakeholders. We prioritize transparency
                  and accountability, fostering a culture of trust and respect. Our
                  compliance programs are continuously updated to align with
                  evolving regulations and industry best practices, ensuring that we
                  maintain the highest level of integrity in everything we do. We
                  believe that adherence to these principles is essential to
                  achieving sustainable success and building lasting relationships
                  with our clients and partners.
                </p>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "suppliers" ? "show active1" : ""
                }`}
                id="suppliers"
                role="tabpanel"
                aria-labelledby="suppliers-tab"
                data-aos="fade-right"
              >
                <p>
                  At Brown Edge Technology, we recognize the critical role that our
                  suppliers play in our success. We are committed to fostering
                  strong, collaborative partnerships with suppliers who share our
                  commitment to quality, innovation, and sustainability. Our
                  supplier relationships are built on a foundation of mutual trust,
                  transparency, and respect. We work closely with our suppliers to
                  ensure that our products and services meet the highest standards
                  of excellence. We value the contributions of our suppliers and
                  are dedicated to maintaining long-term, mutually beneficial
                  relationships that drive success for all parties involved.
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
                <p>
                  Welcome to our job opportunities page! We are excited that you are
                  considering joining our team. At Brown Edge Technology, we are
                  always on the lookout for talented and passionate individuals who
                  are eager to make a difference in the Smart Mobility sector. Our
                  dynamic and innovative work environment provides numerous
                  opportunities for professional growth and development. If you are
                  interested in pursuing a career with us, please explore the
                  current job openings listed below. We look forward to receiving
                  your application and potentially welcoming you to our team!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
