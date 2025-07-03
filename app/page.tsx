import React from "react";
import Hero from "./home-sections/Hero";
import Features from "./home-sections/Features";
import BlogSec from "./home-sections/BlogSec";
import TestimonialSec from "@/components/TestimonialSec";
import PricingSec from "@/components/PricingSec";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BlogSec />
      <TestimonialSec />
      <PricingSec />
    </>
  );
};

export default Home;
