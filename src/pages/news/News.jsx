import { Footer } from "../../components/layouts/Footer";
import { Header } from "../../components/layouts/Header";
import { Hero } from "./Hero";
import { NewsPage } from "./NewsPage";
import React, { useEffect } from "react";


import { Description } from "./Description";
import { Nav } from "./Nav";

export const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <Header />
      <Hero />

      <Description />
      <Nav />

      
 
      <Footer />
    </>
  );
};
