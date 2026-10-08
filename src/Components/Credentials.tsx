import { certificationDetails, awardDetails } from "./Details";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Credentials() {
  return <section id="credentials" className="recognition-section"><div className="container">
    <SectionHeading number="04" eyebrow="CONTINUED LEARNING" title="Certifications & recognition." description="Professional training and recognition across software development, enterprise platforms, and data." />
    <div className="recognition-grid">
      <div className="qualification-list">{certificationDetails.map(cert => <article className="qualification" key={cert.title}><span className="qualification-icon"><Icon name="award" /></span><div><span className="qualification-category">{cert.category}</span><h3>{cert.title}</h3><p>{cert.issuer}</p></div><Icon name="check" className="qualification-check" /></article>)}</div>
      <div className="recognition-awards">{awardDetails.map(award => <article className="recognition-award" key={award.title}><div className="recognition-award-top"><Icon name="award" /><span>{award.year}</span></div><span className="section-eyebrow">RECOGNITION</span><h3>{award.title}</h3><p>{award.issuer}</p><span className="award-decoration" aria-hidden="true">✳</span></article>)}</div>
    </div>
  </div></section>;
}
