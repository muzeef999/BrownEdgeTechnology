"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";

const Page = () => {
  const [loader, setloader] = useState(false)
  useEffect(() => {
    setloader(true)
  }, [])

  return (
    <div>
      {
        !loader ? <div className="loaderbox">
          <div className="loader"></div>
        </div> : <div>
          <div className="position-relative video-container">
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
              <h1 style={{ color: "#FFF", fontWeight: "500" }} className="about-data">
                Product Development Phase
              </h1>
            </div>
          </div>

          <div className="container my-3">
            <h2 className='text-center mb-3'></h2>
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ color: "#964B00" }}>
                  Product Development Phase at BrownEdge Technology
                </h2>
                <p className='p'>
                  At BrownEdge Technology, the product development phase is where innovative ideas are transformed into high-quality, market-ready automotive solutions. This phase is critical for ensuring that our products meet stringent quality standards, performance requirements, and security protocols. Our comprehensive approach to product development encompasses design, implementation, testing, and validation to deliver exceptional products that exceed customer expectations.
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <h4>Key Activities in the Product Development Phase</h4>
              <ol type='1'>
                <li> <h6 style={{ color: "#964B00" }}>Detailed Design and Planning</h6></li>
                <ul type="disc">
                  <li><p>Translating high-level concepts and requirements into detailed designs and actionable plans.</p></li>
                  <li><p>Creating detailed design documents, architectural blueprints, and project plans.</p></li>
                  <li><p>Ensures that all aspects of the product are thoroughly planned and designed before implementation begins.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Prototyping and Proof of Concept</h6></li>
                <ul type="disc">
                  <li><p>Developing prototypes to validate designs and test key functionalities.</p></li>
                  <li><p>Building and testing prototypes, conducting feasibility studies, and refining designs based on feedback.</p></li>
                  <li><p>Identifies potential issues early and allows for adjustments before full-scale development.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Implementation and Coding</h6></li>
                <ul type="disc">
                  <li><p>Writing and integrating the code to build the product according to the detailed designs.</p></li>
                  <li><p>Coding, module integration, and continuous integration/continuous deployment (CI/CD) practices.</p></li>
                  <li><p>Ensures that the product is built efficiently and aligns with the design specifications.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>System Integration</h6></li>
                <ul type="disc">
                  <li><p>Integrating various components and subsystems into a cohesive, fully functioning product.</p></li>
                  <li><p>System-level integration testing, resolving integration issues, and ensuring interoperability.</p></li>
                  <li><p>Confirms that all components work together seamlessly to deliver the desired functionality.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Testing and Quality Assurance</h6></li>
                <ul type="disc">
                  <li><p>Rigorous testing to ensure the product meets quality, performance, and security standards.</p></li>
                  <li><p>Functional testing, performance testing, security testing, and user acceptance testing (UAT).</p></li>
                  <li><p>Identifies and resolves defects, ensuring the product is reliable, secure, and ready for deployment.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Validation and Verification</h6></li>
                <ul type="disc">
                  <li><p>Verifying that the product meets all specified requirements and validating that it performs as expected in real-world conditions.</p></li>
                  <li><p>Conducting validation tests, reviewing requirements, and performing end-to-end testing.</p></li>
                  <li><p>Ensures that the product meets customer expectations and performs reliably under various conditions.</p></li>
                </ul>
                <li> <h6 style={{ color: "#964B00" }}>Documentation and Training</h6></li>
                <ul type="disc">
                  <li><p>Creating comprehensive documentation and training materials to support product use and maintenance.</p></li>
                  <li><p>Developing user manuals, technical documentation, and training programs.</p></li>
                  <li><p>Provides users and support teams with the information they need to effectively use and maintain the product.</p></li>
                </ul>
              </ol>
            </div>

            <h4>Key Outputs of the Product Development Phase</h4>
            <ul className='product-development'>
              <li>
                <b>Detailed Design Documents:</b><span> Comprehensive blueprints and plans for the product.</span>
              </li>
              <li>
                <b>Prototypes:</b><span> Functional models used to validate and refine designs.</span>
              </li>
              <li>
                <b>Source Code:</b><span> The complete codebase for the product, following best practices and coding standards.</span>
              </li>
              <li>
                <b>Integrated System:</b><span> A fully integrated and functional product ready for testing.</span>
              </li>
              <li>
                <b>Test Reports:</b><span> Detailed reports documenting the results of all testing activities.</span>
              </li>
              <li>
                <b>Validation Results:</b><span> Evidence that the product meets all requirements and performs as expected.</span>
              </li>
              <li>
                <b>Documentation:</b><span> User manuals, technical guides, and training materials.</span>
              </li>
            </ul>

            <p>At BrownEdge Technology, the product development phase is a critical part of our commitment to delivering exceptional automotive solutions. Our thorough and systematic approach ensures that every product we develop is of the highest quality, meets all requirements, and exceeds customer expectations.</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Page
