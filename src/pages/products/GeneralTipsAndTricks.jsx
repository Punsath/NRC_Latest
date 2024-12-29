import { useEffect } from "react";
import { Header } from "../../components/layouts/Header";
import { Hero } from "./Hero";
import {Description} from "./Description";
import {TipsAndTricks} from './TipsAndTricks';
import {Cwaste} from './Cwaste';
import { Footer } from "../../components/layouts/Footer";

export const GeneralTipsAndTricks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />       
    <Hero />
    <Description/>
    <Cwaste/>
    <TipsAndTricks/>
    <Footer />
    </>
  )
}

export default GeneralTipsAndTricks
