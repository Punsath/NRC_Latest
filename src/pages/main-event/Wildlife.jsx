import React, { useEffect } from "react";
import { Header } from "../../components/layouts/Header";
import { Hero } from "./Hero";
import { Description } from "./Description";
import { Content } from "./Content";
import { Steps } from "./Steps";
import { Footer } from "../../components/layouts/Footer";

export const Wildlife = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <Header />
      <div className="hero-section">
        <Hero />
      </div>
      <Description />
      <Steps />
      <Content />
      <Footer />
    </>
  );
};
