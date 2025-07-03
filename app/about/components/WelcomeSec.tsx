"use client";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const WelcomeSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container bg-green-95 border border-green-85 py-20 rounded-[10px] text-center text-pretty"
      >
        <motion.h2 variants={fadeInUp}>Welcome to Nutritionist</motion.h2>
        <motion.p variants={fadeInUp} className="px-8 lg:px-20 mt-10">
          Your trusted source for personalized nutrition coaching. Our mission
          is to help you achieve your weight loss and health goals through
          tailored nutrition plans and expert guidance. We understand that every
          individual is unique, and that's why we believe in providing
          personalized solutions that fit your lifestyle and preferences.
        </motion.p>
        <motion.p variants={fadeInUp} className="px-8 lg:px-20 mt-4">
          With our team of qualified nutritionists and dietitians, we are
          dedicated to empowering you with the knowledge and tools you need to
          make lasting changes. Whether you want to shed those extra pounds,
          improve your overall well-being, or develop a healthier relationship
          with food, we are here to support you every step of the way.
        </motion.p>
        <motion.p variants={fadeInUp} className="px-8 lg:px-20 mt-4">
          At Nutritionist, we believe that healthy eating should be enjoyable
          and sustainable. We emphasize the importance of balanced nutrition,
          focusing on whole foods and mindful eating practices. Our approach is
          rooted in scientific research and evidence-based strategies, ensuring
          that you receive the most up-to-date and accurate information.
        </motion.p>
        <motion.p variants={fadeInUp} className="px-8 lg:px-20 mt-4">
          Join our community of individuals committed to transforming their
          lives through nutrition. Take control of your health, boost your
          energy levels, and discover the joy of nourishing your body with
          wholesome foods. We are here to guide you towards a healthier, happier
          you.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WelcomeSec;
