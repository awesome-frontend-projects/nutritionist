import React from "react";
import Hero from "./home-sections/Hero";
import Features from "./home-sections/Features";
import BlogSec from "./home-sections/BlogSec";
import TestimonialSec from "@/components/TestimonialSec";
import PricingSec from "@/components/PricingSec";
import ReactLenis from "lenis/react";

const Home = () => {
  return (
    <ReactLenis root>
      <Hero />
      <Features />
      <BlogSec />
      <TestimonialSec />
      <PricingSec />
    </ReactLenis>
  );
};

export default Home;
