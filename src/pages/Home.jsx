import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import VisiMisi from "../components/VisiMisi";
import Products from "../components/Products";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisiMisi />
      <Products />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
