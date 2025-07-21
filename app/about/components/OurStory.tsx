"use client";
import Title from "@/components/Title";
import { ourStoryItems } from "@/data/data";
import Image from "next/image";
import React from "react";
//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const OurStory = () => {
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
          title="Our Story"
          text="Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey."
        />

        {/* Card wrapper */}
        <motion.div
          variants={staggerContainer}
          className="grid story-card-wrapper mt-[50px] md:mt-[60px] max-lg:gap-5"
        >
          {ourStoryItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="grid lg:grid-cols-2 card bg-green-95"
              key={item.id}
            >
              {/* Card img */}
              <figure className="max-lg:border-b-10 lg:border-r-10 border-green-70 card-img">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={634}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Card content */}
              <div className="p-[30px] lg:p-[60px] card-content">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="py-5">{item.text}</p>
                <p>{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
