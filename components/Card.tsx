"use client";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

interface cardProps {
  icon: string;
  title: string;
  text: string;
}

const Card = ({ icon, title, text }: cardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-10 bg-green-95 border border-green-85"
    >
      {/* card title */}
      <div className="flex items-center gap-5">
        {/* card icons */}
        <figure className="bg-green-70 w-14 h-14 rounded-md flex items-center justify-center shrink-0">
          <Image src={icon} alt="icon" width={30} height={30} />
        </figure>
        <h3 className="card-title">{title}</h3>s
      </div>
      {/* card text */}
      <p className="mt-5">{text}</p>
    </motion.div>
  );
};

export default Card;
