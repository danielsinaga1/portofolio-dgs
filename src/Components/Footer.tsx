import { personalDetails, socialMediaUrl, contactDetails } from "./Details";
import Icon from "./Icon";

export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><a href="/#hero" className="footer-brand"><span className="brand-mark">dg<span>.</span></span><span>Daniel Giovanni Sinaga<br />Software Engineer</span></a><nav className="footer-links" aria-label="Social and contact links"><a href={socialMediaUrl.github} target="_blank" rel="noreferrer noopener">GitHub <Icon name="arrow" /></a><a href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn <Icon name="arrow" /></a><a href={`mailto:${contactDetails.email}`}>Email <Icon name="arrow" /></a></nav></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {personalDetails.name}</p><span>Based in Indonesia<span className="footer-dot" aria-hidden="true" /></span></div>
  </div></footer>;
}
