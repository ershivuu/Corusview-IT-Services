import React from "react";
import "./Nav.css";
import logo from "../../assets/logos/corusview-logo (1).png";
import hamburger from "../../assets/logos/hamburger.png"

function Nav() {
  return (
    <>
      <div>
        <div className="header-body">
          <div className="header-child">
            <img className="header-logo" src={logo} />
            <div>
             <img className="hamburger" src={hamburger}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
