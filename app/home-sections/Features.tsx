"use client";
import Title from "@/components/Title";
import { featureItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Card from "@/components/Card";

const Features = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Features"
          text="Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness."
        />

        {/* Card wrapper */}
        <motion.div
          variants={staggerContainer}
          className="grid mt-[50px] md:mt-[60px] lg:grid-cols-2 gap-5 "
        >
          {featureItems.map((item) => (
            // card
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
