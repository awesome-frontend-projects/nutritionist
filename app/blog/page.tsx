import PageTitle from "@/components/PageTitle";
import React from "react";
import BlogPageCards from "./components/BlogPageCards";

const Blog = () => {
  return (
    <>
      <PageTitle
        title="Our Blogs"
        text="Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
      />
      <BlogPageCards />
    </>
  );
};

export default Blog;
