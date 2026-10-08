import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Icon from "../Components/Icon";

const NoPage = () => {
  return (
    <div className="portfolio-page">
      <InnerHeader />
      <main id="main">
        <section className="not-found-section">
          <span className="section-eyebrow">A SMALL DETOUR</span>
          <span className="not-found-number">404</span>
          <h1>Nothing to see here, yet.</h1>
          <p>The page you're looking for doesn't exist. Let's get you back to the good stuff.</p>
          <Link to="/" className="action-button action-primary">Back to the portfolio <Icon name="arrow" /></Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NoPage;
