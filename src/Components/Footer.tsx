import React from "react";
import footerLogo from '../img/logo-tera.png'
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                  We are a global leader in Telcom VAS, offer Services across
                  Educational Content, Entertainment Content, Games and sports
                </p>
                <div className="mt-3 social-links d-flex">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  
                  <Link to ="https://www.linkedin.com/company/symbiotic-infotech-pvt-ltd/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
         
              <div className="text-center col-lg-3 col-md-12 footer-contact text-md-start">
                <h4>Contact Us</h4>
                <address>
                  Jl. Kapal Tanker I No.10, Perum. Griya Temputu, Loktuan, Bontang - Kaltim
                   <br />
                  <br />
                  <strong>Phone:</strong> +62 - 811 - 540 287 <br />
                  <strong>Email: </strong>
                  <a href="mailto:tekniknusantarakaltim@gmail.com">                  
                     tekniknusantarakaltim@gmail.com
                  </a> 
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy;  Copyright
              <span> PT Teknik Nusantara Kaltim </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;
