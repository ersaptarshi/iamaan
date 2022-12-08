import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <>
      <section className="footer">

        <div className="box-container">

          <div className="box">
            <h3>Amaan's Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. </p>
          </div>

          <div className="box">
            <h3>Quick links</h3>
            <a href="#hero"><i className="fas fa-chevron-circle-right"></i> Home</a>
            <a href="#about"><i className="fas fa-chevron-circle-right"></i> About</a>
            <a href="#skills"><i className="fas fa-chevron-circle-right"></i> Skills</a>
            <a href="#projects"><i className="fas fa-chevron-circle-right"></i> Portfolio</a>
            {/* <a href="#education"><i className="fas fa-chevron-circle-right"></i> Education</a> */}
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <p> <i className="fas fa-phone"></i>+91 964-314-7261</p>
            <p> <i className="fas fa-envelope"></i>Amaanahmad1601@gmail.com</p>
            <p> <i className="fas fa-map-marked-alt"></i>Uttarakhand, India-263153</p>
            <div className="share">

              <a href="https://www.linkedin.com/in/ahmadamaan"  rel="noreferrer" className="fab fa-linkedin" aria-label="LinkedIn"
                target="_blank"></a>
              <a href="https://github.com/amaan262"  rel="noreferrer" className="fab fa-github" aria-label="GitHub" target="_blank"></a>
              <a href="mailto:amaanahmad1601@gmail.com"  rel="noreferrer" className="fas fa-envelope" aria-label="Mail" target="_blank"></a>
              {/* <a href="https://twitter.com/" className="fab fa-twitter" aria-label="Twitter" target="_blank"></a> */}
              <a href="https://t.me/amaan262"  rel="noreferrer" className="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></a>
            </div>
          </div>
        </div>

        <span> &copy; Designed by Amaan Ahmad</span>
      </section>

    </>

  );
}

export default Footer;
