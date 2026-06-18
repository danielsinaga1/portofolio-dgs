import React from "react";
import { workDetails, eduDetails, heroStats } from "./Details";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2>Experience & Education</h2>
        </div>

        <div className="row g-5">
          <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100">
            <h3 className="timeline-title">
              <i className="bi bi-briefcase me-2" />Work Experience
            </h3>
            <div className="timeline">
              {workDetails.map((work, idx) => (
                <div key={idx} className="timeline-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                      <div>
                        <h4>{work.Position}</h4>
                        <h5 className="company-name">{work.Company}</h5>
                      </div>
                      <span className={`badge-type ${work.Type.toLowerCase().replace(' ', '-')}`}>
                        {work.Type}
                      </span>
                    </div>
                    <div className="timeline-meta">
                      <span><i className="bi bi-geo-alt me-1" />{work.Location}</span>
                      <span><i className="bi bi-calendar3 me-1" />{work.Duration}</span>
                    </div>
                    {work.Highlights && work.Highlights.length > 0 && (
                      <ul className="timeline-highlights">
                        {work.Highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
            <h3 className="timeline-title">
              <i className="bi bi-mortarboard me-2" />Education
            </h3>
            <div className="timeline">
              {eduDetails.map((edu, idx) => (
                <div key={idx} className="timeline-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="timeline-dot education" />
                  <div className="timeline-content">
                    <h4>{edu.Position}</h4>
                    <h5 className="company-name">{edu.Company}</h5>
                    <div className="timeline-meta">
                      <span><i className="bi bi-geo-alt me-1" />{edu.Location}</span>
                      <span><i className="bi bi-calendar3 me-1" />{edu.Duration}</span>
                    </div>
                    <span className={`badge-type graduated`}>{edu.Type}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-card mt-4" data-aos="zoom-in" data-aos-delay="300">
              <h4>Quick Stats</h4>
              <div className="row g-3">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="col-6">
                    <div className="stat-item">
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;