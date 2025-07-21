"use client";
import { teamItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const TeamSec = () => {
  return (
    <section className="mt-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
      >
        {teamItems.map((item) => (
          // card
          <motion.div variants={fadeInUp} className="relative" key={item.id}>
            {/* image */}
            <figure className="bg-green-70 rounded-lg">
              <Image
                src={item.img}
                alt="team memeber img"
                width={305}
                height={342}
                className="w-full h-[85%] object-cover"
              />
            </figure>
            {/* info */}
            <div className="absolute -bottom-5 left-0 bg-white p-5 rounded-tr-3xl">
              <h3 className="card-title">{item.name}</h3>
              <p>{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSec;
