import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import Image from 'next/image';
import logo from "../asserts/logo.png";

const DropdownSubMenu = ({ title, children, ...props }) => {
  return (
    <Dropdown drop="right" {...props}>
      <Dropdown.Toggle as="a" href="#" className="dropdown-item">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Navbar9 = () => {
  return (
    <div style={{ position: 'fixed', top: '0', zIndex: '999', width: '100%' }}>
      <Container>
        <Navbar expand="lg" style={{ backgroundColor: '#FFF', color: '#000', borderBottomLeftRadius: '22px', borderBottomRightRadius: '22px', marginTop: '-10px',padding:"0px 15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2),   0 6px 20px rgba(0, 0, 0, 0.2)" }}>
          <Navbar.Brand href="#">
            <Image src={logo} alt="Logo" style={{ width: 'auto', height: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink href="/" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Company</NavLink>
              </NavItem>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Offering
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <DropdownSubMenu className="dropend"  title="Embedded Product Engineering">
                    <Dropdown.Item href="/autosar">AUTOSAR</Dropdown.Item>
                    <Dropdown.Item href="/Infotainment">Infotainment</Dropdown.Item>
                    <Dropdown.Item href="/ev-tmc&bms">EV - TMC & BMS</Dropdown.Item>
                  </DropdownSubMenu>

                  

                  <DropdownSubMenu className="dropend" title="Automotive Cyber Security Engineering">
                    <Dropdown.Item href="#">Sub cyber security concept phase</Dropdown.Item>
                    <Dropdown.Item href="#">Product development phase</Dropdown.Item>
                    <Dropdown.Item href="#">Thread analysis and risk assessment methods</Dropdown.Item>
                  </DropdownSubMenu>

             

                  <DropdownSubMenu className="dropend" title="Training">
                    <Dropdown.Item href="#">Cyber security</Dropdown.Item>
                    <Dropdown.Item href="#">Validation</Dropdown.Item>
                    <Dropdown.Item href="#">System requirements</Dropdown.Item>
                  </DropdownSubMenu>

                

                  <DropdownSubMenu className="dropend" title="AI & Computer Vision">
                    <Dropdown.Item href="#">Action Recognition and Localization</Dropdown.Item>
                    <Dropdown.Item href="#">Attention Maps</Dropdown.Item>
                  </DropdownSubMenu>

               

                  <DropdownSubMenu className="dropend" title="Tools & Automation">
                    <Dropdown.Item href="#">Data Analytics Tools</Dropdown.Item>
                    <Dropdown.Item href="#">Test Authoring Tool</Dropdown.Item>
                  </DropdownSubMenu>

                

                  <DropdownSubMenu className="dropend" title="Verification & Validation">
                    <Dropdown.Item href="#">System Validation - ADAS</Dropdown.Item>
                    <Dropdown.Item href="#">Software Testing</Dropdown.Item>
                  </DropdownSubMenu>
                </Dropdown.Menu>
              </Dropdown>
              <NavItem>
                <NavLink href="#">Solutions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/career">Career</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
            <form className="d-flex" role="search">
              <button className="navbtn" type="submit">&nbsp;Let's Talk&nbsp;</button>
            </form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navbar9;
