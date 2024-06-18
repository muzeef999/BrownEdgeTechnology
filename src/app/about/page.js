import React from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="carrer">
        <div className="container">
          <h1>About US</h1>
          <p className="d-flex justify-content-start align-items-center">
            <FaHome className="me-1" /> Home{" "}
            <span className="ms-1">
              <FaArrowRight />
              <b className="ms-1">About US</b>
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <br />
        <p style={{ color: "#964b00", fontWeight: 700, fontSize: "30px" }}>
          Our Story:
        </p>
        <p>
          Founded with a commitment to pioneering engineering solutions, Brown
          Edge Technology was established to tackle the most pressing challenges
          in the Smart Mobility space. Recognizing the potential of data and
          digital technologies to transform traditional engineering, we set out
          to create solutions that are both innovative and practical.
        </p>
        <p>
          Our journey began with a small team of passionate engineers and
          technologists dedicated to exploring the intersection of data and core
          engineering. Over the years, we've grown into a category-defining
          firm, known for our novel approaches and unwavering commitment to
          excellence. Our solutions are designed to meet the evolving needs of
          the mobility sector, ensuring safety, efficiency, and sustainability.
        </p>
        <p>
          Today, Brown Edge Technology stands at the forefront of engineering
          innovation, continuously pushing the boundaries of what's possible in
          Smart Mobility. Our story is one of relentless pursuit of excellence,
          driven by a vision of a smarter, more connected future.
        </p>
        <div className="row m-5">
          <div className="col-md-6">
            <p style={{ color: "#964b00", fontWeight: 700, fontSize: "30px" }}>
              Mission:
            </p>
            <p>
              At Brown Edge Technology, our mission is to redefine core
              engineering challenges in the Smart Mobility sector through
              innovative and data-driven solutions. We strive to bridge the gap
              between traditional engineering and digital technologies by
              leveraging data, embedded electronics, and cutting-edge
              advancements in core engineering.
            </p>

            <br />
            <p style={{ color: "#964b00", fontWeight: 700, fontSize: "30px" }}>
              Vision:
            </p>
            <p>
              Our vision is to lead the Smart Mobility revolution with
              next-generation smart systems that approach mobility problems with
              novelty and innovation. We aim to set new standards in engineering
              solutions, driving forward the integration of digital and core
              engineering for a smarter, more connected world.
            </p>
            <p style={{ color: "#964b00", fontWeight: 700, fontSize: "30px" }}>
              Values:
            </p>
            <ul>
              <li>
                <b>Innovation:</b> We are committed to continuous improvement
                and fostering a culture of creativity and out-of-the-box
                thinking.
              </li>
              <li>
                <b>Excellence:</b> We strive for the highest standards in
                everything we do, from our engineering solutions to our customer
                service.
              </li>
              <li>
                <b>Integrity:</b> We conduct our business with honesty and
                transparency, building trust with our clients and partners.
              </li>
              <li>
                <b>Collaboration:</b> We believe in the power of teamwork and
                collaborative efforts to achieve exceptional results.
              </li>
              <li>
                <b>Sustainability: </b>We are dedicated to creating solutions
                that are not only effective but also environmentally
                responsible.
              </li>
            </ul>
          </div>
          <div className="col-md-6"></div>
        </div>
        <br />
        <p style={{ color: "#964b00", fontWeight: 700, fontSize: "30px" }}>
          {" "}
          Core Components of Brown Edge Technology
        </p>
        <p>
          At Brown Edge Technology, our core components include leveraging
          data-driven engineering to optimize designs and improve performance,
          integrating state-of-the-art embedded electronics for real-time
          monitoring and control, utilizing advanced materials to enhance
          durability and efficiency, and developing intelligent smart systems
          that learn and adapt. We focus on a customer-centric approach,
          tailoring our solutions to meet specific needs, and prioritize
          sustainability by creating eco-friendly, energy-efficient products
          that contribute to a greener future.
        </p>
      </div>
      <br />
    </>
  );
};

export default page;
