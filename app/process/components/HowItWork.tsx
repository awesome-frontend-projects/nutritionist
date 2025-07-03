"use client";
import Card from "@/components/Card";
import Title from "@/components/Title";
import { howItWorkItems } from "@/data/data";
import React from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const HowItWork = () => {
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
          title="How It Works"
          text="We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works"
        />

        {/* card wrapper */}
        <div className="grid gap-5 lg:grid-cols-2 mt-24 lg:mt-36">
          {howItWorkItems.map((item) => (
            <motion.div
              variants={fadeInUp}
              className="relative mb-16"
              key={item.id}
            >
              {/* step */}
              <div className="text-6xl md:text-6xl lg:text-8xl font-bold text-dark-green-25 absolute -top-16 left-0 -z-10">
                {item.step}
              </div>
              {/* card */}
              <Card icon={item.icon} title={item.title} text={item.text} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWork;
