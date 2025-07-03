import PageTitle from "@/components/PageTitle";
import React from "react";
import PricingPageSec from "./components/PricingPageSec";
import Table from "./components/Table";
import FaqSec from "./components/FaqSec";

const Pricing = () => {
  return (
    <>
      <PageTitle
        title="Our Pricing"
        text="At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle"
      />
      <PricingPageSec />
      <Table />
      <FaqSec />
    </>
  );
};

export default Pricing;
