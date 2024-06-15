"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from "../asserts/logo.png"

const Navbar = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  });
  return (
    <div style={{position:'fixed', top:'0', zIndex:'999', width:'100%'}}>
      <nav className="navbar navbar-expand-lg">
        <div className="container" style={{backgroundColor:'#FFF', color:'#000', borderBottomLeftRadius:'22px', borderBottomRightRadius:'22px', marginTop:'-10px'}}>
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="Logo" style={{width:'auto', height:'100px'}}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Company</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Offering</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Solutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="navbtn" type="submit">&nbsp;Let's Talk&nbsp;</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
