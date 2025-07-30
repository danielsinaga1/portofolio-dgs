import React, { useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo-tera.png";

const InnerHeader: React.FC = () => {
  const location = useLocation();
  
  // Memoize the current path to avoid recalculating on every render
  const currentPath = useMemo(() => {
    return location.pathname.split("/")[1] || "";
  }, [location.pathname]);

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (header) {
        header.classList.toggle("sticked", window.scrollY > 80);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile menu toggle
  const handleMobileMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    const body = document.querySelector("body");
    
    if (mobileNavShow && mobileNavHide && body) {
      mobileNavShow.classList.toggle("d-none");
      mobileNavHide.classList.toggle("d-none");
      body.classList.toggle("mobile-nav-active");
    }
  }, []);

  // Navigation items configuration
  const navItems = useMemo(() => [
    { path: "/", label: "Home", key: "" },
    { path: "/services", label: "Services", key: "services" },
    { path: "/careers", label: "Careers", key: "careers" },
    { path: "/contact", label: "Contact Us", key: "contact" }
  ], []);

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo" onClick={toTop}>
          <img
            src={logo}
            alt="PT Teknik Nusantara Kaltim"
            title="PT Teknik Nusantara Kaltim"
          />
        </Link>
        
        <span onClick={handleMobileMenu}>  
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </span>
        
        <nav id="navbar" className="navbar">
          <ul onClick={handleMobileMenu}>
            {navItems.map(({ path, label, key }) => (
              <li key={key}>
                <Link 
                  to={path} 
                  className={currentPath === key ? "active" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InnerHeader;