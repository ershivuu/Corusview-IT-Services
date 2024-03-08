import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import email from "../../assets/logos/color-logo/email.png";
import phone from "../../assets/logos/color-logo/phone.png";
import location from "../../assets/logos/color-logo/location.png";
import message from "../../assets/logos/message.png";
import Nav from "../../components/Headers/Nav";
import Footers from "../../components/Footers/Footers";
import instalogo from "../../assets/logos/color-logo/insta-non-filled.png";
import linkedinlogo from "../../assets/logos/color-logo/linkedin-non-filled.png";
import twitter from "../../assets/logos/color-logo/twitter-non-filled.png";
import youtube from "../../assets/logos/color-logo/youtube-non-filled.png";
function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonClick = (value) => {
    setSelectedOption(value);
    setSelectedButton(value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("YOUR_API_ENDPOINT", {
        selectedOption,
        ...formData,
      });

      console.log("Response:", response.data);

      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSelectedOption("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Nav></Nav>
      <div className="contact-flex-box">
        <div className="contact-card contact-card-1">
          <div>
            Let's discuss <br /> on something <span>cool</span> together
          </div>
          <div>
            <p>
              <img src={email} />
              contact@corusview.com
            </p>
            <p>
              <img src={phone} />
              +91-731-4976629
            </p>
            <p>
              <img src={location} />
              C-6, Prateek Palms, Indore-452010, MP
            </p>
          </div>
        </div>
        <div className="contact-card contact-card-2">
          <p>I'm interested in...</p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="vacancy-btns">
                <button
                  type="button"
                  className={
                    selectedButton === "UI/UX Design" ? "bnt-clicked" : ""
                  }
                  onClick={() => handleButtonClick("UI/UX Design")}
                >
                  UI/UX Design
                </button>
                <button
                  type="button"
                  className={
                    selectedButton === "Digital Marketing" ? "bnt-clicked" : ""
                  }
                  onClick={() => handleButtonClick("Digital Marketing")}
                >
                  Digital Marketing
                </button>
                <button
                  type="button"
                  className={
                    selectedButton === "Web Developement" ? "bnt-clicked" : ""
                  }
                  onClick={() => handleButtonClick("Web Developement")}
                >
                  Web Developement
                </button>

                <button
                  type="button"
                  className={
                    selectedButton === "Mobile Developement"
                      ? "bnt-clicked"
                      : ""
                  }
                  onClick={() => handleButtonClick("Mobile Developement")}
                >
                  Mobile Developement
                </button>
                <button
                  type="button"
                  className={
                    selectedButton === "Software Developement"
                      ? "bnt-clicked"
                      : ""
                  }
                  onClick={() => handleButtonClick("Software Developement")}
                >
                  Software Developement
                </button>
              </div>
              <select
                className="hidden-select-options"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select...</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Web Developement">Web Developement</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Mobile Developement">Mobile Developement</option>
                <option value="Software Developement">
                  Software Developement
                </option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
              />

              <button type="submit">
                <img src={message} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="social-btns">
        <div className="insta">
          <a href="">
            <img src={instalogo} alt="" />
          </a>
        </div>
        <div className="linkedin">
          <a href="">
            <img src={linkedinlogo} alt="" />
          </a>
        </div>
        <div className="twitter">
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="youtube">
          <a href="">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div> */}

      <Footers></Footers>
    </>
  );
}

export default Contact;
