import Image from "next/image";
import React from "react";
import logo from "../asserts/logo.jpg";

const Navbar = () => {
  return (
    <div style={{ position: "fixed", top: "0", zIndex: "999", width: "100%" }}>
      <nav className="navbar navbar-expand-lg">
        <div
          className="container"
          style={{
            backgroundColor: "#FFF",
            color: "#000",
            borderRadius: "12px",
          }}
        >
          <a className="navbar-brand" href="#">
            <Image src={logo} style={{ width: "10%", height: "auto" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn border"
                style={{ color: "#000" }}
                type="submit"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
