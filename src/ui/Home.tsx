import React from "react";
import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import ClientList from "../Components/ClientList";
import Facts from "../Components/Facts";
import ServiceList from "../Components/ServiceList";
import Revenue from "../Components/Revenue";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <ServiceList />
        <ClientList />
        <Facts />
        <Revenue />
      </main>
      <Footer />
    </>
  );
};

export default Home;
