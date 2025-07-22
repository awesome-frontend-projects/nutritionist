"use client";
import { blogPageItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const BlogPageCards = () => {
  return (
    <section className="py-[100px] lg:py-[160px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Card wrapper */}
        <motion.div
          variants={staggerContainer}
          className="grid lg:grid-cols-2 mt-8 lg:mt-[50px] xl:mt-[60px] rounded-xl"
        >
          {blogPageItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              key={item.id}
              className="p-10 bg-green-95 border border-green-90"
            >
              {/* Category */}
              <h3 className="text-xl font-semibold mb-[50px] border-b-4 border-b-green-75 max-w-max pb-2">
                {item.category}
              </h3>
              {/* Card img */}
              <figure className="border-b border-b-green-85">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={393}
                  height={190}
                  className="block ml-auto rounded-t-2xl"
                />
              </figure>
              {/* Card content */}
              <div className="my-10">
                <h4 className="card-title mb-2 text-neutral-800">
                  {item.title}
                </h4>
                <p className="text-neutral-700">{item.text}</p>
              </div>
              {/* Button */}
              <button className="primary-btn bg-[#749326] text-white hover:bg-[#809057] transition-colors">
                Read More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogPageCards;
