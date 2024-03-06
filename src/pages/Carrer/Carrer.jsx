import React from "react";
import "./Carrer.css";
import shivu from "../../assets/images/shivam.jpg";
import Nav from "../../components/Headers/Nav";
import Footers from "../../components/Footers/Footers";

function Carrer() {
  return (
    <>
      <Nav></Nav>
      <div className="carrer-heading">
        <p>Exploring exciting career opportunities in it innovation </p>
        <p>
          At CorusView, we are not just a team; we are a family dedicated to
          innovation, collaboration, and excellence in every project we
          undertake. Joining us means embarking on a journey where your skills
          are nurtured, your creativity is valued, and your career aspirations
          are supported. We believe in fostering an environment where every
          individual can thrive and make a real impact in the world of IT
          services.
        </p>
      </div>
      <div className="gallery">
        <div className="imgs">
          <img src={shivu} />
        </div>
        <div className="imgs img-to-btm">
          <img src={shivu} />
        </div>
        <div className="imgs">
          <img src={shivu} />
        </div>
        <div className="imgs img-to-btm">
          <img src={shivu} />
        </div>
      </div>
      <div className="environment">
        <div className="env-heading">
          <p>What You See, What You Get</p>
        </div>

        <div className="env-row">
          <div className="env-card">
            <p>Transparent Culture:</p>
            <p>
              We believe in open communication and honesty at every level of our
              organization. What you see is what you get – no hidden agendas or
              surprises.
            </p>
          </div>
          <div className="env-card">
            <p>Collaborative Environment:</p>
            <p>
              You'll be part of a supportive team where collaboration is key. We
              value input from all team members and encourage sharing ideas to
              drive innovation.
            </p>
          </div>
          <div className="env-card">
            <p>Opportunities for Growth:</p>
            <p>
              We're committed to your professional development. Expect ongoing
              training programs, mentorship opportunities, and resources to
              enhance your skills and advance your career.
            </p>
          </div>
        </div>
        <div className="env-row">
          <div className="env-card">
            <p>Exciting Projects:</p>
            <p>
              Get ready to dive into stimulating projects that challenge your
              creativity and problem-solving skills. You'll have the chance to
              work on cutting-edge solutions that make a real impact in various
              industries.
            </p>
          </div>
          <div className="env-card">
            <p>Competitive Compensation:</p>
            <p>
              Your hard work deserves to be rewarded. We offer competitive
              compensation packages and benefits that recognize your
              contributions to our success.
            </p>
          </div>
          <div className="env-card">
            <p>Inclusive Culture:</p>
            <p>
              Diversity is our strength. We celebrate and embrace the unique
              perspectives and talents of every team member. You'll feel valued
              and respected for who you are.
            </p>
          </div>
        </div>
        <div className="env-row">
          <div className="env-card">
            <p>Work-Life Balance:</p>
            <p>
              We understand the importance of maintaining a healthy work-life
              balance. Our flexible work arrangements and supportive policies
              ensure you can thrive both personally and professionally.
            </p>
          </div>
          <div className="env-card">
            <p>Recognition and Appreciation:</p>
            <p>
              Your achievements won't go unnoticed. We believe in recognizing
              and appreciating your efforts, whether it's through formal
              recognition programs or a simple "thank you" from your colleagues.
            </p>
          </div>
          <div className="env-card">
            <p>Opportunities to Lead:</p>
            <p>
              We empower our team members to take on leadership roles and make a
              difference. Whether you're leading a project or mentoring junior
              colleagues, you'll have the chance to step up and shine.
            </p>
          </div>
        </div>
      </div>

      <div className="join-us">
        <p>
          Want to join us? <br /> Raise your hand.
        </p>
        <p>
          We're a team of innovators, collaborators, and problem-solvers,
          shaping the future of technology. If you're passionate, creative, and
          ready to contribute, raise your hand and join us on our mission. Let's
          build something amazing together.
        </p>
        <button>
          <a href="">Go Ahead &#8594;</a>
        </button>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Carrer;
