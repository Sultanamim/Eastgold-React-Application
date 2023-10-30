import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import AboutSection from "./AboutSection/AboutSection";
import ServicesSection from "./Service/ServicesSection";
import TeamSection from "./TeamSection/TeamSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import ContactSection from "./ContactSection/ContactSection";
import SponsorSection from "./SponsorSection/SponsorSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <TeamSection />
      {/* <TestimonialSection /> */}
      <ContactSection />
      <SponsorSection />
    </>
  );
}
