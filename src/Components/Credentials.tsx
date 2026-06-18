import React from "react";
import { certificationDetails, awardDetails } from "./Details";

// Certifications & Awards — credibility signals pulled straight from the CV.
const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="credentials-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2>Certifications &amp; Awards</h2>
        </div>

        <div className="row g-5">
          {/* Certifications */}
          <div className="col-lg-7" data-aos="fade-right">
            <h3 className="credentials-col-title">
              <i className="bi bi-patch-check me-2" />Certifications
            </h3>
            <div className="cert-list">
              {certificationDetails.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <span className="cert-icon">
                    <i className="bi bi-award" />
                  </span>
                  <div className="cert-body">
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="cert-issuer">
                        <i className="bi bi-building me-1" />{cert.issuer}
                      </span>
                      <span className="cert-tag">{cert.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="col-lg-5" data-aos="fade-left">
            <h3 className="credentials-col-title">
              <i className="bi bi-trophy me-2" />Awards
            </h3>
            <div className="award-list">
              {awardDetails.map((award, idx) => (
                <div key={idx} className="award-item">
                  <span className="award-year">{award.year}</span>
                  <div className="award-body">
                    <h4 className="award-title">{award.title}</h4>
                    <span className="award-issuer">{award.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
