import { personalDetails, socialMediaUrl, heroStats } from "./Details";
import Icon from "./Icon";

export default function Hero() {
  const cvUrl = `${process.env.PUBLIC_URL || ""}/cv-daniel.pdf`;
  return <section id="hero" className="intro-section">
    <div className="container">
      <div className="intro-grid">
        <div className="intro-copy">
          <span className="intro-eyebrow"><span className="hello-wave" aria-hidden="true">✦</span> HI THERE, I'M DANIEL</span>
          <h1>Building software.<br />Creating <span>real impact.</span></h1>
          <p className="intro-role">{personalDetails.tagline}</p>
          <p className="intro-description">I build reliable platforms, connect complex systems, and bring useful AI to life. Eight years of turning ideas into software that works for people.</p>
          <div className="intro-actions">
            <a href="#projects" className="action-button action-primary">Explore my work <Icon name="arrow" /></a>
            <a href={cvUrl} download="CV-Daniel-Giovanni-Sinaga.pdf" className="action-button action-secondary">Download CV <Icon name="download" /></a>
          </div>
          <div className="intro-connect">
            <span>Find me on</span>
            <a href={socialMediaUrl.github} target="_blank" rel="noreferrer noopener" aria-label="Daniel on GitHub"><Icon name="github" />GitHub</a>
            <a href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer noopener" aria-label="Daniel on LinkedIn"><Icon name="linkedin" />LinkedIn</a>
            <span className="connect-divider" />
            <span className="intro-location"><Icon name="pin" />Indonesia · UTC+8</span>
          </div>
        </div>
        <div className="intro-visual">
          <div className="profile-orbit" aria-hidden="true" />
          <div className="portrait-card">
            <span className="profile-status"><span className="availability-dot" />Available for remote work</span>
            <div className="profile-photo-wrap"><img src={personalDetails.img} alt={personalDetails.name} className="portrait-photo" width="500" height="500" fetchPriority="high" /></div>
            <div className="portrait-caption"><strong>{personalDetails.name}</strong><span>Software Engineer · Indonesia</span></div>
            <div className="profile-specialties"><span>Backend</span><span>Full stack</span><span>AI systems</span></div>
            <div className="profile-footer"><span><Icon name="pin" />Bontang, Indonesia</span><a href={socialMediaUrl.github} target="_blank" rel="noreferrer noopener" aria-label="Explore Daniel's GitHub"><Icon name="github" /><Icon name="arrow" /></a></div>
          </div>
          <div className="hero-floating-card"><span><Icon name="code" /></span><div><strong>Ideas into impact</strong><span>Thoughtfully built. Ready for the real world.</span></div></div>
          <span className="hero-sparkle" aria-hidden="true">✧</span>
        </div>
      </div>
      <div className="intro-bottom">
        <div className="intro-metrics">{heroStats.map((stat, index) => <div className="intro-metric" key={stat.label}><span className="metric-icon"><Icon name={["briefcase", "layers", "server", "globe"][index]} /></span><div><strong>{stat.value}</strong><span>{stat.label}</span></div></div>)}</div>
      </div>
    </div>
  </section>;
}
