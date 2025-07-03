"use client";
import React from "react";
import Title from "./Title";
import { testimonialSecItems } from "@/data/data";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

//swiper css
import "swiper/css";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const TestimonialSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Our Testimonials"
          text="Our satisfied clients share their success stories and experiences on their journey to better health and well-being."
        />
        {/* card wrapper */}
        <motion.div variants={fadeInUp}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1020: {
                slidesPerView: 2.5,
              },
            }}
            className="mt-[50px] md:mt-[60px]"
          >
            {testimonialSecItems.map((item) => (
              // card
              <SwiperSlide key={item.id}>
                <div className="bg-green-97 border border-green-90 aspect-video p-5">
                  {/* icon */}
                  <div>
                    <Image
                      src="/images/qoute-icon.svg"
                      alt="icon"
                      width={34}
                      height={34}
                    />
                  </div>
                  {/* Text */}
                  <p className="my-10">{item.text}</p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    </div>
                    <h4 className="card-title">{item.name}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* card paginations and navigations */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center mt-12 gap-4"
        >
          <button className="prev-btn w-12 h-12 bg-green-95 border border-green-90 flex items-center justify-center hover:bg-green-80 transition-colors">
            <RiArrowLeftLine size={30} />
          </button>
          <button className="next-btn w-12 h-12 bg-green-95 border border-green-90 flex items-center justify-center hover:bg-green-80 transition-colors">
            <RiArrowRightLine size={30} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSec;
