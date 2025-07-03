"use client";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const AboutTop = () => {
  return (
    <section className="pt-[30px] lg:mt-20 xl:pt-[100px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.figure variants={fadeIn}>
          <Image
            src="/images/about-page-banner.svg"
            alt="shape"
            width={1280}
            height={404}
            className="w-full h-full object-cover"
            priority
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default AboutTop;
