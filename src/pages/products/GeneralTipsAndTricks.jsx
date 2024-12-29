import React from 'react'
import { Header } from "../../components/layouts/Header";
import { Hero } from "./Hero";
import {Description} from "./Description";
import {TipsAndTricks} from './TipsAndTricks';
import { Footer } from "../../components/layouts/Footer";

export const GeneralTipsAndTricks = () => {
  return (
    <>
    <Header />       
    <Hero />
    <Description/>
    <TipsAndTricks/>
    <Footer />
    </>
  )
}

export default GeneralTipsAndTricks
