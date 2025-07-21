"use client";
import Title from "@/components/Title";
import { questionItems } from "@/data/data";
import { RiAddLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import React, { useState } from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const FaqSec = () => {
  const [openId, setOpenId] = useState<number | string | null>(
    questionItems[0].id ?? null
  );
  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(id);
    }
  };

  return (
    <section
      className="section pb-[100px] lg:pb-[160px]"
      aria-labelledby="faq-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="FAQ"
          text="We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey."
        />

        {/* wrapper */}
        <motion.div
          variants={staggerContainer}
          className="grid lg:grid-cols-[1fr_0.4fr] lg:items-start gap-[30px] mt-[50px] lg:mt-20"
        >
          {/* Questions */}
          <motion.div
            variants={fadeInUp}
            className="bg-green-95 border border-green-85 p-10"
            role="region"
            aria-label="Frequently asked questions"
          >
            {questionItems.map((item) => (
              // Card
              <div
                className="border-b border-b-green-85"
                key={item.id}
                role="article"
                aria-labelledby={`faq-${item.id}-heading`}
              >
                {/* Title */}
                <div className="flex items-center py-4 justify-between gap-7">
                  <h3 className="card-title">{item.title}</h3>
                  <button
                    className="w-10 h-10 bg-dark-green-20 rounded-sm text-white flex items-center justify-center active:bg-dark-green-30 hover:bg-dark-green-40 transition-colors aspect-square"
                    onClick={() => handleClick(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    aria-expanded={openId === item.id}
                    aria-controls={`faq-${item.id}-content`}
                    aria-label={`${
                      openId === item.id ? "Collapse" : "Expand"
                    } question: ${item.title}`}
                  >
                    {openId === item.id ? (
                      <RiCloseLine aria-hidden="true" />
                    ) : (
                      <RiAddLine aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* text */}
                <div
                  className={`max-h-0 overflow-y-hidden transition-all ease-in-out ${
                    openId === item.id ? "max-h-[200px]" : ""
                  }`}
                  role="region"
                  aria-labelledby={`faq-${item.id}-heading`}
                >
                  <p className="pt-4 mb-6 max-w-[657px]">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
          {/* card */}
          <motion.div
            variants={fadeInUp}
            className="bg-green-95 border border-green-85 rounded-lg py-14 px-6 text-center"
            role="complementary"
            aria-label="Ask a question"
          >
            {/* icons */}
            <div className="mx-auto max-w-max">
              <Image
                src="/images/cross-icon.svg"
                alt="icon"
                width={100}
                height={100}
                aria-hidden="true"
              />
            </div>

            {/* content */}
            <div>
              <h4 className="card-title mt-12">Ask your question</h4>
              <p className="mb-12">Feel Free to Ask questions on anytime</p>
              <button
                className="primary-btn"
                aria-label="Ask a question through our contact form"
              >
                Ask A Question
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaqSec;
