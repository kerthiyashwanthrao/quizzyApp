import React from "react";
import { Link } from "react-router-dom";

//importing css
import "./footer.css";

//importing icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerSec">
        <span className="footerLogo">QuizzyApp.in</span>
        <div className="footerItem">
          <div className="socialLinks">
            <span className="socialTitle">Follow Us:</span>
            <div className="links">
              <a href="##" className="linkItem">
                <InstagramIcon></InstagramIcon> Instagram
              </a>
              <a href="##" className="linkItem">
                <FacebookIcon></FacebookIcon> Facebook
              </a>
              <a href="##" className="linkItem">
                <LinkedInIcon></LinkedInIcon> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footerItem">
          <span className="footerContactTitle"> Contact</span>
          <div className="contacts">
            <div className="contactItem">
              <LocationOnIcon></LocationOnIcon>
              <span className="contacttextaddress" style={{ lineHeight: 1.5 }}>
                Sadguru sai residency<br></br> Namdevwada , Nizamabad - 503001
              </span>
            </div>
            <div className="contactItem">
              <CallIcon></CallIcon>
              <div className="contactTexts">
                <a href="+918341263820" className="contacttext">
                  +91 8341263820{" "}
                </a>
              </div>
            </div>
            <div className="contactItem">
              <EmailIcon></EmailIcon>
              <div className="contactTexts">
                <a href="kerthiyashwanthrao@gmail.com" className="contacttext">
                  kerthiyashwanthrao@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <span className="copyText">
          &#169; 2025 Developed by KYR | all rights reserved
        </span>
      </div>
    </div>
  );
}
