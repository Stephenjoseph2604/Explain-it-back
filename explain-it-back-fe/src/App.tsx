import React from "react";
import { ExplainItBackLanding } from "./components/ExplainItBackLanding.tsx";
import HowItWorksSection from "./components/HowItWorksSection.tsx";
import ExplainBox from "./components/ExplainBox.tsx";
import WhyThisHelpsStudents from "./components/WhyThisHelpsStudents.tsx";
import Footer from "./components/Footer.tsx";
import PricingPage from "./components/PricingPage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import WhatsNextPage from "./components/WhatsNextPage.tsx";
export function App() {
  return (
    <>
      <ExplainItBackLanding />
      <AboutPage/>
      <HowItWorksSection/>
      <ExplainBox/>
      <WhyThisHelpsStudents/>
      <PricingPage/>
      <WhatsNextPage/>
      <Footer/>
    </>
  );
}
