import React, { useState } from "react";
import "./Techno.css";
import Problems from "./Problems";
import Solutions from "./Solutions";
import vectorgrp1 from "../../assets/images/vectorgrp-1.png";
import devprocess from "../../assets/images/dev-process.png";
import Tools from "./Tools";
import Nav from "../../components/Headers/Nav";
import Footers from "../../components/Footers/Footers";

function Techno() {
  const [selectedComponent, setSelectedComponent] = useState();
  const showComponent = (componentName) => {
    setSelectedComponent(componentName);
  };
  let componentToShow;
  switch (selectedComponent) {
    case "Component1":
      componentToShow = <Problems />;
      break;
    case "Component2":
      componentToShow = <Solutions />;
      break;

    default:
      componentToShow = <Problems />;
      break;
  }
  return (
    <>
      <Nav></Nav>
      <div>
        <div className="page-heading">
          <p>Unlock software magic with us</p>
          <p>
            Are you ready to experience seamless code and unparalleled support?
            Because with our IT services, your software development journey is
            about to reach new heights
          </p>
        </div>

        <div className="sub-header flex-header">
          <div>
            <a onClick={() => showComponent("Component1")}>Problems</a>
          </div>
          <div className="dot"></div>
          <div>
            <a onClick={() => showComponent("Component2")}>Solutions</a>
          </div>
          <div className="dot"></div>
        </div>
        <div>{componentToShow}</div>
      </div>

      <div className="services">
        <div className="sub-services">
          <p>What You'll Get</p>
          <ul>
            <li>Custom Software Development</li>
            <li>System Migration</li>
            <li>IT Infrastructure Design</li>
            <li>Full Development lifecycle</li>
            <li>Quality Assurance</li>
          </ul>
        </div>
        <div className="services-vector">
          <img src={vectorgrp1} alt="" />
        </div>
      </div>

      <div className="dev-process">
        <p>Our Software Development Process</p>
        <img src={devprocess} />
      </div>
      <Tools></Tools>

      <Footers></Footers>
    </>
  );
}

export default Techno;
