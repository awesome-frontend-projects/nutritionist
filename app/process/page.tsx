import PageTitle from "@/components/PageTitle";
import React from "react";
import HowItWork from "./components/HowItWork";
import Cta from "@/components/Cta";

const Process = () => {
  return (
    <>
      <PageTitle
        title="Your Journey to Health and Wellness"
        text='At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here &apst; s a detailed breakdown of our process:'
      />
      <HowItWork />
      <Cta
        title="Are you ready to embark on a transformative journey towards better health and wellness?"
        text="Join us at Nutritionist and let us guide you on the path to a healthier and happier you."
        link="Join Us Now"
      />
    </>
  );
};

export default Process;
