import React from "react";
import "./Home.css";
import Services from "../Services/Services";
import Customer from "./Customers/Customer";
import vector1 from "../../assets/images/vector.png";
import vector2 from "../../assets/images/vector2.png";
import OurServices from "./OurServices/OurServices";
import Nav from "../../components/Headers/Nav";
import Footers from "../../components/Footers/Footers";

function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="home-heading">
        <p>
          <span>5+ Years of Experience in IT Field</span> Where Innovation Meets
          Excellence
        </p>
      </div>

      <div>
        <OurServices></OurServices>
      </div>

      <div className="about-company">
        <div className="vector-grp">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>

        <div className="abt-com-flex">
          <div>
            <p>About Us</p>
          </div>
          <div>
            <p>
              Corusview IT Services is a top rated web development company which
              offers high quality reliable web, software and Mobile development
              services that help us to serve our clients globally and giving
              them value for their money through are unique offerings models
              depending on the nature of the projects and their preferences.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Customer></Customer>
      </div>

      <div className="recent-works">
        <div className="recent-works-heading">
          <p>Recent work</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button> Our Projects</button>
        </div>

        <div className="recent-flex">
          <div className="small-box"></div>
          <div className="center-box"></div>
          <div className="small-box"></div>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Home;
