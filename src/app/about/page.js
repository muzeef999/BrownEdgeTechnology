"use client";
import React, { useState } from "react";
import bgcontact from "../asserts/aboutus.jpg";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const Page = () => {
  const [activeTab, setActiveTab] = useState("about-us");

  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
            backgroundColor: "#974c01",
            width: "80%",
            height: "350px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "#FFF",
          }}
        >
          {" "}
          <h1>About us</h1>
        </div>
        <Image
          src={bgcontact}
          alt="image"
          style={{
            width: "auto",
            height: "350px",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -999,
          }}
        />
      </div>

      <br />
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
                className={`nav-link ${activeTab === "" ? "active1" : ""}`}
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
              <div className="row m-5">
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
                </div>
                <div className="col-md-6"></div>
              </div>
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
                specific needs, and prioritize sustainability by creating
                eco-friendly, energy-efficient products that contribute to a
                greener future.
              </p>
            </div>
            <br />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "suppliers" ? "show active1" : ""
            }`}
            id="suppliers"
            role="tabpanel"
            aria-labelledby="suppliers-tab"
          >
            <br />
            <h2 style={{ color: "#964B00" }}>
              policies&compliance and Inclusion Statement
            </h2>
            <p>
              For Visteon, policies&compliance represents an environment of open
              communication where the contributions of all employees are valued.
              As a multicultural organization, Visteon embraces human
              differences and harnesses the power of its employees’ varied
              backgrounds, cultures and experiences to create a competitive
              edge. Visteon will continue to succeed by fully engaging the
              diverse talents of all its employees.
            </p>
          </div>
          {/* <div
            className={`tab-pane fade ${
              activeTab === "job-opportunities" ? "show active1" : ""
            }`}
            id="job-opportunities"
            role="tabpanel"
            aria-labelledby="job-opportunities-tab"
          >
            
          </div> */}
        </div>
      </div>

      <br />
    </>
  );
};

export default Page;
