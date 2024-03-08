import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logos/corusview-logo (1).png";
import hamburger from "../../assets/logos/hamburger.png";

function Nav() {
  return (
    <>
      <div>
        <div className="header-body">
          <div className="header-child">
            <a href="/">
              <img className="header-logo" src={logo} />
            </a>

            <div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="hamburger" src={hamburger} />
                </button>
                <ul className="dropdown-menu ">
                  <li>
                    <Link to="/" className="navigations">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="navigations">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="navigations">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/carrer" className="navigations">
                      Career
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" className="navigations">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-products" className="navigations">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
