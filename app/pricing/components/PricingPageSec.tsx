"use client";
import React, { useState } from "react";
import { pricingPageSecItems } from "@/data/data";
import Link from "next/link";

//import motion
import { AnimatePresence, motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const PricingPageSec = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const handleToggle = (type: "monthly" | "yearly") => {
    setBilling(type);
  };
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Section Heading */}
        <h2 id="pricing-heading" className="sr-only">
          Pricing Plans
        </h2>
        {/* Pricing button */}
        <div className="mt-[50px] md:mt-[60px]">
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-2.5 border border-green-80 rounded-lg max-w-max mx-auto p-2.5 gap-3"
            role="group"
            aria-label="Select billing period"
          >
            {/* Animated Indicator */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute top-1/2 left-2.5 right-2.5 -translate-y-1/2 w-[46%] h-[75%] rounded-md bg-dark-green-20 z-0 ${
                billing === "yearly" ? "translate-x-full" : ""
              }`}
              aria-hidden="true"
            />
            <button
              onClick={() => handleToggle("monthly")}
              className={`transition-colors rounded-md py-2.5 px-6 z-10 ${
                billing === "monthly"
                  ? "text-white"
                  : "text-dark-green-25 hover:text-dark-green-20"
              }`}
              aria-pressed={billing === "monthly"}
              aria-label="Monthly billing"
            >
              Monthly
            </button>
            <button
              onClick={() => handleToggle("yearly")}
              className={`py-2.5 px-6 rounded-md z-10 ${
                billing === "yearly"
                  ? "text-white"
                  : "text-dark-green-25 hover:text-dark-green-20"
              }`}
              aria-pressed={billing === "yearly"}
              aria-label="Yearly billing"
            >
              Yearly
            </button>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center">
            <span className="sr-only">Discount: </span>
            Save 50% on Yearly
          </motion.p>
        </div>

        {/* Card wrapper */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px] md:mt-[60px]"
          role="list"
          aria-label="Pricing plans"
        >
          {pricingPageSecItems.map((item) => {
            const displayedPrice =
              billing === "yearly"
                ? (item.price * 12 * 0.5).toFixed(0)
                : item.price;

            return (
              // Card
              <motion.div
                variants={fadeInUp}
                key={item.id}
                className="p-10 flex flex-col bg-green-95 border border-green-90 rounded-[10px]"
                role="listitem"
              >
                <div>
                  <h3 className="text-[22px] font-semibold md:text-[24px]">
                    {item.title}
                  </h3>
                  <p>{item.subtitle}</p>
                </div>
                {/* Pricing content */}
                <div
                  className="my-10 grid bg-green-90 border border-green-85 rounded-lg"
                  role="list"
                  aria-label={`${item.title} features`}
                >
                  {item.texts.map((txt, index) => (
                    <p
                      role="listitem"
                      key={index}
                      className="p-4 border-b border-b-green-80"
                    >
                      {txt.text}
                    </p>
                  ))}
                </div>
                {/* Animated Price */}
                <div className="flex items-center gap-1 mb-8">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={billing}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-[40px] font-bold text-dark-green-15"
                    >
                      <span className="sr-only">Price: </span>${displayedPrice}
                    </motion.h3>
                  </AnimatePresence>
                  <p className="text-lg text-dark-green-25">
                    <span className="sr-only">per </span>/{" "}
                    {billing === "yearly" ? "Year" : "Month"}
                  </p>
                </div>
                {/* Button */}
                <button className="primary-btn w-full mt-auto">
                  <Link href="#">
                    aria-label={`Choose ${item.title} plan`}
                    Choose Plan
                  </Link>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingPageSec;
