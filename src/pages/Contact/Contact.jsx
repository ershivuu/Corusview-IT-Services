import React from "react";
import "./Contact.css";
import email from "../../assets/logos/color-logo/email.png";
import phone from "../../assets/logos/color-logo/phone.png";
import location from "../../assets/logos/color-logo/location.png";
import message from "../../assets/logos/message.png";

function Contact() {
  return (
    <>
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
            <form action="">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <input type="text" placeholder="Your message" />
            </form>
          </div>
          <button type="submit">
            {" "}
            <img src={message} /> Send Message
          </button>
        </div>
      </div>
      <div className="social-btns">
        {/* <div className="insta">
          <img src={location} alt="" />
        </div> */}
      </div>
    </>
  );
}

export default Contact;
