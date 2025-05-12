import React from "react";
import WomenDeveloper from "./images/WomenDeveloper.PNG";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:smlakshitha237@gmail.com">
          smlakshitha237@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/lakshitha-sm/">
          User Name: Lakshitha
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Lakshitha-SM">
          Lakshitha
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/lakshx._13?igsh=MXNocDN0cGhkMWtnaQ==">
          @lakshx._13
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+9843358300">
          +98 433 58300
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={WomenDeveloper} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
