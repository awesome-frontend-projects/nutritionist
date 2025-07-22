"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { heroStatItems } from "@/data/data";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid lg:grid-cols-2 lg:gap-10"
      >
        {/* Banner */}
        <motion.figure
          variants={fadeIn}
          className="max-lg:bg-green-80 rounded-b-xl"
        >
          <Image
            src="/images/hero-banner.png"
            alt="hero banner"
            width={710}
            height={712}
            className="w-full h-full object-cover"
            priority
          />
        </motion.figure>
        {/* Content */}
        <motion.div
          variants={staggerContainer}
          className="my-[120px] text-center lg:text-left"
        >
          <motion.p variants={fadeInUp}>Transform Your ❤️ Health with</motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold"
          >
            Personalized Nutrition Coaching
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 mb-10">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </motion.p>
          {/* hero btns */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-3 flex-wrap mb-12 justify-center lg:justify-start"
          >
            <Link href={"#"} className="primary-btn max-sm:w-full">
              Get Starter Today
            </Link>
            <Link href={"#"} className="secondary-btn max-sm:w-full">
              Book a Demo
            </Link>
          </motion.div>

          {/* hero status */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
          >
            <div className="flex items-center border border-green-70 rounded-[58px] p-2 -space-x-1 sm:-space-x-5">
              {heroStatItems.map((item, index) => (
                <div key={index} className="shrink-0">
                  <Image
                    src={item.imgUrl}
                    alt="image"
                    width={50}
                    height={50}
                    className="rounded-full aspect-square w-full h-full object-cover block"
                  />
                </div>
              ))}
            </div>
            <p className="text-dark-green-20">
              <span className="text-dark-green-15/90 font-bold">430+</span>{" "}
              Happy Customers
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* lg bg color */}
      <div className="max-lg:hidden absolute top-0 left-0 bg-green-80 h-full w-[50%] rounded-br-4xl -z-10 "></div>
    </section>
  );
};

export default Hero;
