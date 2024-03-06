import React from "react";
import "./About.css";
import Nav from "../../components/Headers/Nav";
import Footers from "../../components/Footers/Footers";

function About() {
  return (
    <>
      <Nav></Nav>
      <div>
        <div className="about-page-heading">
          <p>about us</p>
        </div>

        <div className="about-us">
          <div className="about-us-cards">
            <div className="about-us-card">
              <p>Our Comapny</p>
              <p>
                Corusview IT Services is a top rated web development company
                which offers high quality reliable web, software and mobile
                application development services that help us to serve our
                clients globally and giving them value for their money through
                are unique offerings models depending on the nature of the
                projects and their preferences.
              </p>
            </div>
            <div className="about-us-card">
              <p>Our Story</p>
              <p>
                Founded with a vision to redefine the standards of IT services,
                CorusView emerged as a beacon of innovation in the ever-evolving
                digital landscape. Our journey began with a small team of
                passionate individuals driven by a shared commitment to
                excellence and a desire to make a difference.
              </p>
              <p>
                From our humble beginnings, we embarked on a mission to leverage
                technology to solve real-world challenges and empower businesses
                to thrive in the digital age. Over the years, we have grown and
                evolved, expanding our service offerings and honing our
                expertise to meet the evolving needs of our clients.
              </p>
            </div>
            <div className="about-us-card">
              <p>Our Vision</p>
              <p>
                At CorusView, our vision is to revolutionize the digital realm
                by empowering businesses with cutting-edge IT solutions that
                drive growth, foster innovation, and enhance user experiences.
                We envision a future where technology seamlessly integrates into
                every aspect of daily life, empowering individuals and
                organizations to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
        <div className="our-values">
          <div className="our-values-heading">
            <p>Our Values</p>
          </div>
          <div className="our-values-card">
            <div className="our-values-cards">
              <div className="sub-card">
                <div className="value-numberings">
                  <p>01</p>
                </div>
                <div className="value-content">
                  <p>Excellence</p>
                  <p>
                    We are committed to delivering exceptional quality in
                    everything we do. From the smallest task to the most complex
                    project, we strive for excellence, setting high standards
                    and continuously raising the bar to exceed expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="our-values-cards">
              <div className="sub-card">
                <div className="value-numberings">
                  <p>02</p>
                </div>
                <div className="value-content">
                  <p>Innovation</p>
                  <p>
                    Innovation is at the heart of everything we do. We embrace
                    creativity, embrace new ideas, and seek out innovative
                    solutions to solve challenges and drive growth. We foster a
                    culture of curiosity and experimentation,
                  </p>
                </div>
              </div>
            </div>
            <div className="our-values-cards">
              <div className="sub-card">
                <div className="value-numberings">
                  <p>03</p>
                </div>
                <div className="value-content">
                  <p>Integrity</p>
                  <p>
                    We conduct our business with the highest level of integrity
                    and ethics. Transparency, honesty, and accountability are
                    the cornerstones of our interactions with clients,
                    employees, and partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="our-values-cards">
              <div className="sub-card">
                <div className="value-numberings">
                  <p>04</p>
                </div>
                <div className="value-content">
                  <p>Collaboration</p>
                  <p>
                    Collaboration is key to our success. We believe in the power
                    of teamwork and collaboration, both internally and with our
                    clients and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="join-us-btn">
          <button>
            <a href="">Join Us</a>
          </button>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default About;
