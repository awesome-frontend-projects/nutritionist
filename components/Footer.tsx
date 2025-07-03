"use client";
import { footerBottomItems } from "@/data/data";
import { RiArrowUpLongLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const Footer = () => {
  return (
    <footer className="bg-dark-green-15 py-10 text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10"
      >
        {/* Footer top */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-between items-center"
        >
          <div>
            <Image src="/images/Logo.png" width={130} height={30} alt="logo" />
          </div>

          <div></div>

          <div className="flex items-center gap-3.5">
            Got To Top
            <button
              className="w-12 h-12 bg-dark-green-20 hover:bg-dark-green-30 transition-colors rounded-full flex items-center justify-center aspect-square"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <RiArrowUpLongLine size={24} />
            </button>
          </div>
        </motion.div>
        {/* Footer bottom */}
        <motion.div
          variants={fadeInUp}
          className="bg-dark-green-20 border border-dark-green-25 rounded-lg flex flex-wrap gap-4 md:justify-between items-center py-3.5 px-4"
        >
          <div className="grid md:grid-cols-3 items-center gap-2.5 text-center max:lgw-full">
            {footerBottomItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2.5 border border-dark-green-25 rounded-sm p-3"
              >
                {<item.icon />}
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-green-70 transition-colors"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          <p>
            &copy; {new Date().getFullYear()} Nutritionist. All rights reserved
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
