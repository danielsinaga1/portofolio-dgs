import React from "react";
import careerHeader from "../img/blog-header.jpg";
import noData from "../img/no-data.jpg";

import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import InnerHeaderBanner from "../Components/InnerHeaderBanner";

const NoPage = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Page Not Found"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="text-center blog">
          <div className="flex justify-center">
            <img src={noData} alt="" title="404 Error" className="img-fluid" />
          </div>
          <Link to="/" className="my-3 btn btn-primary btn-lg">
            Back to Home{" "}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoPage;
