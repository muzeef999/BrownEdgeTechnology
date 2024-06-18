import React from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <h1>About US</h1>
          <p className="d-flex justify-content-start align-items-center">
            <FaHome className="me-1" /> Home{" "}
            <span className="ms-1">
              <FaArrowRight />
              <b className="ms-1">About us</b>
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Parent Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle"
                  href="#"
                  id="navbarDropdownSubmenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Submenu
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownSubmenu"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Submenu action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another submenu action
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
        <div> contact US page</div>
      </div>
    </>
  );
};

export default page;
