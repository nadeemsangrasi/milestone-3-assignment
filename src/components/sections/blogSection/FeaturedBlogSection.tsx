import Wrapper from "@/components/shared/Wrapper";
import { IBlogPost } from "@/types/types";

import React from "react";
import BlogCard from "@/components/sections/blogSection/BlogCard";
import { blogsData } from "@/data/blogsData";

const FeaturedBlogSection = () => {
  return (
    <Wrapper>
      <div id="featured">
        <div className="my-0 sm:my-12">
          <h1 className="text-3xl sm:text-6xl font-bold text-center my-20 ">
            Featured Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.slice(0, 4).map((blog: IBlogPost) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedBlogSection;
