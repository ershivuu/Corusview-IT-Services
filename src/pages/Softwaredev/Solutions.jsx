import React from "react";
import closebtn from "../../assets/logos/close.png";
function Solutions() {
  return (
    <>
      <div className="solution-body">
        <div className="proble-cards">
          <div className="cross-btn">
            <img src={closebtn} alt="" />
          </div>
          <div className="probs">
            <p>Dealing with coding errors </p>
            <p>
              Developers often encounter coding errors while writing or
              modifying code. These errors, also known as "bugs," can range from
              syntax errors, logical errors, to runtime errors. Syntax errors
              occur when code violates the rules of the programming language,
              making it unable to compile or execute.
            </p>
          </div>
          <div></div>
        </div>
        <div className="proble-cards">
          <div className="cross-btn">
            <img src={closebtn} alt="" />
          </div>
          <div className="probs">
            <p>Sometimes it become extremely complex</p>
            <p>
              As software projects evolve, the codebase tends to grow in size
              and complexity. This complexity arises from the need to handle
              numerous features, edge cases, and business rules.
            </p>
          </div>
          <div></div>
        </div>
        <div className="proble-cards">
          <div className="cross-btn">
            <img src={closebtn} alt="" />
          </div>
          <div className="probs">
            <p>Optimizing code for performance is crucial.</p>
            <p>
              Optimizing code for performance is a critical aspect of software
              development, as it directly impacts user experience, operational
              costs, and overall system efficiency.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Solutions;
