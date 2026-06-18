import React from "react";
import { personalDetails, socialMediaUrl, contactDetails } from "./Details";

const Footer = () => {
  const { name } = personalDetails;
  const { linkedin, github } = socialMediaUrl;

  return (
    <footer id="footer" className="footer-portfolio">
      <div className="footer-content">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-4 col-md-12">
              <span className="footer-logo">&lt;{name.split(" ")[0]} /&gt;</span>
              <p className="footer-tagline">Software Engineer</p>
            </div>
            <div className="col-lg-4 col-md-12 text-center">
              <div className="footer-social">
                <a href={linkedin} target="_blank" rel="noreferrer noopener" title="LinkedIn">
                  <i className="bi bi-linkedin" />
                </a>
                <a href={github} target="_blank" rel="noreferrer noopener" title="GitHub">
                  <i className="bi bi-github" />
                </a>
                <a href={`mailto:${contactDetails.email}`} title="Email">
                  <i className="bi bi-envelope" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-lg-end text-center">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} {name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
