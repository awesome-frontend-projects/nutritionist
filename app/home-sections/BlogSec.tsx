"use client";
import Title from "@/components/Title";
import { blogSecItems } from "@/data/data";
import { RiBookmarkLine, RiHeartLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const BlogSec = () => {
  return (
    <section className="section" aria-labelledby="blog-section-title">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Our Blogs"
          text="Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog."
        />

        {/* Card wrapper */}
        <div className="grid lg:grid-cols-2 mt-[50px] md:mt-[60px] gap-5">
          {blogSecItems.map((item) => (
            // card
            <motion.div
              variants={fadeInUp}
              className="p-[30px] rounded-[10px] bg-green-95 border border-green-90"
              key={item.id}
              role="article"
              aria-labelledby={`blog-title-${item.id}`}
            >
              {/* Card img */}
              <div className="">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={570}
                  height={336}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>

              {/* card content */}
              <div className="mt-5">
                <p>{item.subtitle}</p>
                <h4 className="card-title">{item.title}</h4>
                <p className="my-5">{item.text}</p>
              </div>

              {/* card footer */}
              <div className="flex justify-between p-4 max-sm:flex-col gap-7">
                <div className="flex items-center gap-3.5">
                  <div>
                    <Image
                      src={item.authorImg}
                      alt="author image"
                      width={50}
                      height={50}
                      className="rounded-md w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">{item.author}</h4>
                    <p>{item.date}</p>
                  </div>
                </div>
                <div className="flex max-sm:justify-end gap-2">
                  <button
                    className="w-12 h-12 flex items-center justify-center bg-green-95 border border-green-90 hover:bg-green-85"
                    aria-label="Like this post"
                  >
                    <RiHeartLine size={30} />
                  </button>
                  <button
                    className="w-12 h-12 flex items-center justify-center bg-green-95 border border-green-90 hover:bg-green-90"
                    aria-label="Bookmark this post"
                  >
                    <RiBookmarkLine size={30} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSec;
