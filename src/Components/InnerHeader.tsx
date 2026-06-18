import React, { useEffect, useCallback, useMemo, useState } from "react";
import { personalDetails, logos } from "./Details";

const InnerHeader: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { name } = personalDetails;

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (header) {
        header.classList.toggle("sticked", window.scrollY > 80);
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = el.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    const body = document.querySelector("body");
    if (mobileNavShow && mobileNavHide && body) {
      mobileNavShow.classList.toggle("d-none");
      mobileNavHide.classList.toggle("d-none");
      body.classList.toggle("mobile-nav-active");
      setMenuOpen(body.classList.contains("mobile-nav-active"));
    }
  }, []);

  const navItems = useMemo(() => [
    { href: "#hero", label: "Home", key: "hero" },
    { href: "#skills", label: "Skills", key: "skills" },
    { href: "#experience", label: "Experience", key: "experience" },
    { href: "#projects", label: "Projects", key: "projects" },
    { href: "#contact", label: "Contact", key: "contact" }
  ], []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const body = document.querySelector("body");
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    if (body?.classList.contains("mobile-nav-active") && mobileNavShow && mobileNavHide) {
      mobileNavShow.classList.remove("d-none");
      mobileNavHide.classList.add("d-none");
      body.classList.remove("mobile-nav-active");
      setMenuOpen(false);
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo" onClick={toTop} aria-label={`${name} — back to top`}>
          <img src={logos.logogradient} alt={name} className="logo-img" />
        </a>
        
        <button
          type="button"
          className="mobile-nav-toggle-btn"
          onClick={handleMobileMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar"
        >
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </button>
        
        <nav id="navbar" className="navbar">
          <ul>
            {navItems.map(({ href, label, key }) => (
              <li key={key}>
                <a 
                  href={href}
                  className={activeSection === key ? "active" : ""}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta-btn" onClick={(e) => handleNavClick(e, "#contact")}>
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InnerHeader;