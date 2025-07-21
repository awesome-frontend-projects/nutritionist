"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface ctaProps {
  title: string;
  text: string;
  link: string;
}

const Cta = ({ title, text, link }: ctaProps) => {
  return (
    <section
      className="section pb-[100px] lg:pb-[160px]"
      aria-labelledby="cta-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.div
          variants={fadeInUp}
          role="region"
          aria-label="Call to action"
          className="bg-green-95 border border-green-85 rounded-[10px] p-10 lg:p-[60px] text-center grid lg:grid-cols-[1fr_0.3fr] items-center lg:text-left gap-6"
        >
          {/* Title */}
          <div>
            <h2 className="mb-4" id="cta-heading">
              {title}
            </h2>
            <p>{text}</p>
          </div>

          {/* Button */}
          <button className="primary-btn mt-5 max-lg:w-full">
            <Link href="#" aria-label={`${link} - ${title}`}>
              {link}
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cta;
