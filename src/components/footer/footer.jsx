import { motion } from "framer-motion";

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
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  const transition = {
    duration: 0.5,
    staggerChildren: 0.5,
  };
  return (
    <motion.div
      className="footer"
      initial="hidden"
      whileInView="show"
      variants={fadeInUp}
      transition={transition}
    >
      <motion.div className="footerSec" variants={fadeInUp} transition={transition}>
        <motion.span
          className="footerLogo"
          variants={fadeInUp}
          transition={transition}
        >
          QuizzyApp.in
        </motion.span>
        <motion.div className="footerItem" variants={fadeInUp} transition={transition}>
          <motion.div
            className="socialLinks"
            variants={fadeInUp}
            transition={transition}
          >
            <span
              className="socialTitle"
            >
              Follow Us:
            </span>
            <motion.div className="links" variants={fadeInUp} transition={transition}>
              <a
                href="https://www.instagram.com/yash_1_th_kerthi/"
                target="_blank"
                className="linkItem"
              >
                <InstagramIcon></InstagramIcon> Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1CLoVSwMzM/"
                target="_blank"
                className="linkItem"
              >
                <FacebookIcon></FacebookIcon> Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/yashwanthkerthi/"
                target="_blank"
                className="linkItem"
              >
                <LinkedInIcon></LinkedInIcon> LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/yashwanthkerthi/"
                target="_blank"
                className="linkItem"
              >
                <LinkedInIcon></LinkedInIcon> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="footerItem" variants={fadeInUp} transition={transition}>
          <span
            className="footerContactTitle"
          >
            Contact Us
          </span>
          <motion.div className="contacts" variants={fadeInUp} transition={transition}>
            <div className="contactItem">
              <LocationOnIcon></LocationOnIcon>
              <span className="contacttextaddress" style={{ lineHeight: 1.5 }}>
                Sadguru sai residency<br></br> Namdevwada , Nizamabad - 503001
              </span>
            </div>
            <div
              className="contactItem"
              variants={fadeInUp}
              transition={transition}
            >
              <CallIcon></CallIcon>
              <div
                className="contactTexts"
                variants={fadeInUp}
                transition={transition}
              >
                <a href="tel:+918341263820" className="contacttext">
                  +91 8341263820
                </a>
              </div>
            </div>
            <div className="contactItem">
              <EmailIcon></EmailIcon>
              <motion.div className="contactTexts">
                <a
                  href="mailto:kerthiyashwanthrao@gmail.com"
                  className="contacttext"
                >
                  kerthiyashwanthrao@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="footerCopyright"
        variants={fadeInUp}
        transition={transition}
      >
        <motion.span
          className="copyText"
        >
          &#169; 2025 Developed by KYR | all rights reserved
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
