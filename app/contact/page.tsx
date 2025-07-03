import PageTitle from "@/components/PageTitle";
import React from "react";
import ContactSec from "./components/ContactSec";
import Cta from "@/components/Cta";

const Contact = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        text="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods"
      />
      <ContactSec />
      <Cta
        title="Are you ready to embark on a transformative journey towards better health and wellness?"
        text="Join us at Nutritionist and let us guide you on the path to a healthier and happier you."
        link="Join Us Now"
      />
    </>
  );
};

export default Contact;
