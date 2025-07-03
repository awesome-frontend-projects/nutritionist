"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { footerBottomItems, socialIconItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSec = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section>
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Footer Links */}
        <motion.div
          variants={fadeInUp}
          className="bg-dark-green-15 grid lg:grid-cols-3 rounded-lg gap-4 p-5 lg:p-[50px]"
        >
          {footerBottomItems.map((item) => (
            <div
              key={item.id}
              className="bg-dark-green-20 border border-dark-green-25 rounded-md flex flex-col justify-center p-5 lg:p-6 items-center text-white gap-3"
            >
              <item.icon />
              <a
                href="#"
                target="_blank"
                className="hover:text-green-70 transition-colors"
              >
                {item.label}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Form and Map */}
        <motion.div
          variants={staggerContainer}
          className="grid mt-[30px] lg:grid-cols-2 items-start lg:mt-[50px] bg-green-95 border border-green-85 rounded-lg lg:p-10 p-7 gap-7"
        >
          {/* Contact Form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-5"
          >
            {/* Full Name + Email */}
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid font-semibold">
                <label>Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Full Name is required" })}
                  placeholder="Enter your Name"
                  className="p-5 bg-green-90 border border-green-80 rounded-md focus:border-dark-green-40 mt-2 text-grey-30 max-w-[300px] w-full"
                />
                {errors.name?.message && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="grid font-semibold">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your Email"
                  className="p-5 bg-green-90 border border-green-80 rounded-md focus:border-dark-green-40 mt-2 text-grey-30 max-w-[300px] w-full"
                />
                {errors.email?.message && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            {/* Phone */}
            <label className="grid font-semibold">
              Phone Number
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 7,
                    message: "Phone number is too short",
                  },
                })}
                placeholder="Enter your Number"
                className="p-5 bg-green-90 border border-green-80 rounded-md focus:border-dark-green-40 mt-2 text-grey-30"
              />
              {errors.phone?.message && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </label>

            {/* Message */}
            <div className="grid font-semibold">
              Message
              <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                className="resize-none h-[160px] p-5 bg-green-90 border border-green-80 rounded-md focus:border-dark-green-40 mt-2 text-grey-30"
                placeholder="Enter your Message"
              ></textarea>
              {errors.message?.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </motion.form>

          {/* Map and Social Icons */}
          <motion.div variants={fadeIn}>
            <figure>
              <Image
                src="/images/Map.svg"
                alt="map"
                width={560}
                height={435}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex gap-3.5 mt-8 lg:mt-12 justify-center lg:justify-end">
              {socialIconItems.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="bg-green-70 w-[52px] h-[52px] rounded-md grid place-content-center hover:bg-green-75 transition-colors"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSec;
