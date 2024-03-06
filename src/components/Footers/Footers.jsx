import React from "react";
import "./Footers.css";
import ourlogo from "../../assets/logos/corusview.png";
import insta from "../../assets/logos/instagram.png";
import linkedin from "../../assets/logos/linkedin.png";
import youtube from "../../assets/logos/youtube.png";
import locationlogo from "../../assets/logos/location.png";
import email from "../../assets/logos/mail.png";
import phone from "../../assets/logos/phone-call.png";

function Footers() {
  return (
    <>

<div >


      <div className="footer-1 set-footer">
        <div className="flex-footer">
          <div className="logo">
            <img src={ourlogo} alt="Corusview" />
          </div>
          <div className="info">
            <div className="flex-info">
              <img src={locationlogo} alt="" />
              <p>C-6, Prateek Palms, Indore-452010, MP</p>
            </div>
            <div className="flex-info">
              <img src={email} alt="" />
              <p>contact@corusview.com</p>
            </div>
            <div className="flex-info">
              <img src={phone} alt="" />
              <p>+91-731-4976629</p>
            </div>

            <div className="social-icons">
              <div>
                <img src={insta} alt="" />
              </div>
              <div>
                <img src={linkedin} alt="" />
              </div>
              <div>
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2 set-footer">
        <p>@Corusview 2023 All rights reserved </p>
        <p>Terms & Conditions Applied </p>
        <p>Privacy policy</p>
      </div>
      </div>
    </>
  );
}

export default Footers;
