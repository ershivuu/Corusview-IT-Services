import { useState } from "react";
import "./Nav.css";
import logo from "../../assets/logos/corusview-logo (1).png";
import hamburger from "../../assets/logos/hamburger.png";

function Nav() {
  
  return (
    <>
      <div>
        <div className="header-body">
          <div className="header-child">
            <img className="header-logo" src={logo} />
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
                    <a className="dropdown-item " href="#">
                   Servicces
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
