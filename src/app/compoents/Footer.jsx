import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


import logo from "../asserts/logo.jpg";



export const Footer = () => {
  return (
    <footer
      className="footer text-white py-5"
      style={{ backgroundColor: "#964B00" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
          <Image src={logo} alt="Logo" style={{ width: 'auto', height: '100px' }} />
            <p>
              BROWNEDGE TECHNOLOGY, a category-defining engineering solutions
              firm redefining core engineering problems in the Smart
              Infrastructure space.
            </p>
            <div>
              <MdOutlineFacebook
                className="m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#3b5998", padding: "8px" }}
              />
              <FaInstagram
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#DD2A7B", padding: "8px" }}
              />
              <FaYoutube
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#FF0000", padding: "8px" }}
              />
              <FaLinkedin
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#0072b1", padding: "8px" }}
              />
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>offering</h5>
            <ul className="list-unstyled">
              <li >
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />
                  Autosar
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Attention maps
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Adas
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Data analytics tools
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />  Sub cyber security engineering
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />  Validation
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />  System requirements
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />  Software testing
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />  Test authoring tool
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-3 col-sm-6">
            <h5>Solution</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> DMS - Algorithm/Computer Vision
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Ev - TMS & BMS
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Can Stack Software
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Diag Stack Software

                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> BootLoader Software 

                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <p>
              <IoLocationOutline />
              &nbsp;H.No.16-2-741/A/18/1, Flat No.4, Adithyasai Apartments, Asmangadh, SBH Colony Road No.1, Malakpet, Hyderabad-500036.
            </p>
            <p>
              <IoChatbubbleEllipsesOutline />
              &nbsp; Chat with an Expert
            </p>
            <p>
              <IoCall /> +91 8884851128
            </p>
            <p>
              <IoMdMail /> info@brownedgetechnology.com
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center text-white d-flex justify-content-between align-items-center">
            <p>&copy; 2024 All rights reserved.</p>
            <p>Design and Developed by SyntaxArts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
