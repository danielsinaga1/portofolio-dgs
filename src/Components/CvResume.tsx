import React from "react";
import { cvVariants, personalDetails } from "./Details";

// Resume / CV section — presents one or more tailored CV variants.
// Each card offers in-browser Preview (new tab) + direct Download.
const CvResume: React.FC = () => {
  const single = cvVariants.length === 1;

  return (
    <section id="resume" className="resume-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-subtitle">My Resume</span>
          <h2>Download My CV</h2>
        </div>

        <p className="resume-intro">
          Grab the version that fits the role you're hiring for. Each CV is kept
          up to date and tailored to highlight the most relevant experience.
        </p>

        <div className={`resume-grid${single ? " resume-grid-single" : ""}`}>
          {cvVariants.map((cv) => (
            <div key={cv.id} className="resume-card" data-aos="fade-up">
              <div className="resume-card-top">
                <span className="resume-card-icon">
                  <i className={`bi ${cv.icon}`} />
                </span>
                <span className="resume-card-updated">
                  <i className="bi bi-clock-history me-1" />Updated {cv.updatedAt}
                </span>
              </div>

              <h3 className="resume-card-title">{cv.label}</h3>
              <p className="resume-card-desc">{cv.description}</p>

              <div className="resume-card-actions">
                <a
                  href={cv.file}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="resume-btn resume-btn-outline"
                  aria-label={`Preview ${cv.label} CV in a new tab`}
                >
                  <i className="bi bi-eye me-2" />Preview
                </a>
                <a
                  href={cv.file}
                  download={`CV-${personalDetails.name.replace(/\s+/g, "-")}.pdf`}
                  className="resume-btn resume-btn-primary"
                  aria-label={`Download ${cv.label} CV as PDF`}
                >
                  <i className="bi bi-download me-2" />Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvResume;
