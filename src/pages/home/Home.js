import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MainTop from "./MainTop";
import MainBottom from "./MainBottom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainTop />
      <MainBottom />
      <Footer />
    </>
  );
};

export default Home;
