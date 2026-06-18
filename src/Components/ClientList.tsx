import React from "react";
import { techStackDetails, skillGroups } from "./Details";

const Skills = () => {
  // Single source of truth — grouped to mirror the CV's Technical Expertise
  const skillCategories = skillGroups;

  return (
    <section id="skills" className="skills-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-subtitle">What I Work With</span>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="row g-4 mb-5">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="skill-category-card">
                <div className="skill-category-icon">
                  <i className={`bi ${cat.icon}`} />
                </div>
                <h4>{cat.title}</h4>
                <div className="skill-tags">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-marquee" data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-center mb-4" style={{color: 'var(--dark-2)'}}>Tech Stack</h4>
          <div className="tech-marquee-container">
            <div className="tech-marquee-track">
              {techStackDetails.map((tech, idx) => (
                <div key={idx} className="tech-stack-item">
                  <i className={tech.iconClass} />
                  <span>{tech.name}</span>
                </div>
              ))}
              {techStackDetails.map((tech, idx) => (
                <div key={`dup-${idx}`} className="tech-stack-item">
                  <i className={tech.iconClass} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
