import { useEffect } from "react";
import { Hero } from "./Hero";
import { Header } from "../../components/layouts/Header";
import { Description } from "./Description";
import { Form } from "./Form";
import ContactDetails from "./ContactDetails";
import FindusHere from "./FindusHere";
import { Footer } from "../../components/layouts/Footer";

export const ContactUs = () => {
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
      <Form />
     
      <FindusHere />
      <Footer />
    </>
  );
};
