import { useEffect } from "react";
import { Hero } from "./Hero";
import { Header } from "../../components/layouts/Header";
import { Description } from "./Description";
import { Mission } from "./Mission";
import { OurTeam } from "./OurTeam";
import { Partners } from "./Partners";
import { Footer } from "../../components/layouts/Footer";

export const AboutUs = () => {
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
      <Mission />
      <OurTeam />
      {/* <Partners /> */}
      <Footer />
    </>
  );
};
