import React, { useCallback } from "react";
import { personalDetails, socialMediaUrl, heroStats } from "./Details";

const Hero = () => {
  const { name, tagline, specialty, img, pitch } = personalDetails;
  const { linkedin, github } = socialMediaUrl;

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const cvUrl = `${process.env.PUBLIC_URL || ""}/cv-daniel.pdf`;

  return (
    <section id="hero" className="hero-portfolio d-flex align-items-center">
      <div className="hero-particles" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12" data-aos="fade-right" data-aos-delay="100">
            <span className="hero-status">
              <span className="hero-status-dot" />Open to opportunities
            </span>
            <h1 className="hero-name">{name}</h1>
            <h2 className="hero-tagline">{tagline}</h2>
            <p className="hero-specialty">{specialty}</p>
            <p className="hero-description">{pitch}</p>
            <div className="hero-stats">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta d-flex align-items-center gap-3 flex-wrap">
              <a href="#projects" className="btn-hero-primary" onClick={(e) => scrollToSection(e, "#projects")}>
                <i className="bi bi-folder2-open me-2" />View Projects
              </a>
              <a href="#contact" className="btn-hero-outline" onClick={(e) => scrollToSection(e, "#contact")}>
                <i className="bi bi-envelope me-2" />Contact Me
              </a>
              <a href={cvUrl} download="CV-Daniel-Giovanni-Sinaga.pdf" target="_blank" rel="noreferrer noopener" className="btn-hero-cv">
                <i className="bi bi-download me-2" />Download CV
              </a>
              <div className="hero-social d-flex gap-3 ms-lg-3">
                <a href={linkedin} target="_blank" rel="noreferrer noopener" className="hero-social-link" title="LinkedIn">
                  <i className="bi bi-linkedin" />
                </a>
                <a href={github} target="_blank" rel="noreferrer noopener" className="hero-social-link" title="GitHub">
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-flex justify-content-center" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" />
              <img src={img} alt={name} className="hero-profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
