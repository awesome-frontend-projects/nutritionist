"use client";
import Card from "@/components/Card";
import Title from "@/components/Title";
import { achievementItems } from "@/data/data";
import React from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer } from "@/lib/motion";

const Achievements = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <Title
          title="Company Achievements"
          text="At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements"
        />

        {/* Card wrapper */}
        <div className="grid md:grid-cols-2 gap-5 mt-[50px] lg:mt-[60px]">
          {achievementItems.map((item) => (
            // Card
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
