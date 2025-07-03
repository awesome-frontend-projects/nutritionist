"use client";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import Title from "./Title";
//title props
interface titleProps {
  title: string;
  text: string;
}

const PageTitle = ({ title, text }: titleProps) => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUp}
          className="container p-10 lg:p-20 bg-green-95 border border-green-85 rounded-lg"
        >
          {/* Banner */}
          <figure className="relative grid place-content-center mb-16 z-0">
            <Image
              src="/images/shape-2.svg"
              alt="shape"
              width={68}
              height={68}
              className="z-20"
            />
            <Image
              src="/images/bg-shape.svg"
              alt="shape"
              width={500}
              height={500}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
            />
          </figure>

          {/* Content */}
          <Title title={title} text={text} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PageTitle;
