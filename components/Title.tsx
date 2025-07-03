"use client";
import React from "react";
//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

interface titleProps {
  title: string;
  text: string;
}

const Title = ({ title, text }: titleProps) => {
  return (
    <div className="text-center">
      <motion.h2 variants={fadeInUp}>{title}</motion.h2>
      <motion.p
        variants={fadeInUp}
        className="mt-1.5 max-w-[740px] mx-auto text-pretty"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default Title;
