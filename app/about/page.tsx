import React from "react";
import WelcomeSec from "./components/WelcomeSec";
import OurStory from "./components/OurStory";
import Achievements from "./components/Achievements";
import Cta from "@/components/Cta";
import AboutTop from "./components/AboutTop";

const About = () => {
  return (
    <>
      <AboutTop />
      <WelcomeSec />
      <OurStory />
      <Achievements />
      <Cta
        title="We Are Proud of Our Achievements"
        text="But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being."
        link="Book a Demo"
      />
    </>
  );
};

export default About;
