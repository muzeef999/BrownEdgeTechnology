"use client";

import React, { useEffect } from 'react';
import { Container, Dropdown, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import Image from 'next/image';
import logo from "../asserts/logo.jpg";
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DropdownSubMenu = ({ title, children }) => {
  const [dropdownShow, setDropdownShow] = useState(false);

  const onDropdownEnter = () => setDropdownShow(true);
  const onDropdownLeave = () => setDropdownShow(false);

  return (
    <Dropdown
      onMouseEnter={onDropdownEnter}
      onMouseLeave={onDropdownLeave}
      show={dropdownShow}
      drop="right"
      className="dropend"
    >
      <Dropdown.Toggle as="a" href="#" className="dropdown-item">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

const Navbar9 = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <div 
      data-aos="fade-down"
      style={{ position: 'fixed', top: '0', zIndex: '999', width: '100%' }}
    >
      <Container>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: '#FFF',
            color: '#000',
            borderBottomLeftRadius: '22px',
            borderBottomRightRadius: '22px',
            marginTop: '-10px',
            padding: "0px 15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Navbar.Brand href="#">
            <Image src={logo} alt="Logo" style={{ width: 'auto', height: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink className={pathname === "/" ? "design" : ""} href="/" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname === "/about" ? "design" : ""} href="/about">About Us</NavLink>
              </NavItem>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Offering
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Dropdown items */}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} id="solutionsDropdown">
                  Solutions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Dropdown items */}
                </Dropdown.Menu>
              </Dropdown>
              <NavItem>
                <NavLink className={pathname === "/career" ? "design" : ""} href="/career">Careers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname === "/blogs" ? "design" : ""} href="/blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname === "/contact" ? "design" : ""} href="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navbar9;
