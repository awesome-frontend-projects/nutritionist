import React from "react";
import TeamTop from "./components/TeamTop";
import TeamSec from "./components/TeamSec";
import Cta from "@/components/Cta";
import PageTitle from "@/components/PageTitle";

const Team = () => {
  return (
    <>
      <PageTitle
        title="Meet Our Team of Experts"
        text="Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health."
      />
      <TeamSec />
      <Cta
        title="Join Our Team"
        text="We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals."
        link="Apply Now"
      />
    </>
  );
};

export default Team;
