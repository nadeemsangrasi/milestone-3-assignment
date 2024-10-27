import User from "@/components/shared/User";
import { IBlogPost } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from "@/assets/images/sectionImages/user.png";
const BlogCard = ({ blog }: { blog: IBlogPost }) => {
  return (
    <div className="group border border-slate-300 rounded-lg p-4">
      <Link href={`/blogs/${blog.id}`} className="space-y-2">
        <div className="overflow-hidden rounded-lg hover:rounded-lg">
          <Image
            src={blog.imageURL}
            alt="image"
            className="hover:scale-110 duration-500 hover:duration-500 rounded-lg hover:rounded-lg"
          />
        </div>
        <div className="py-2 space-y-3">
          <span className="px-4 py-2 bg-green-50 text-blue rounded-md text-sm sm:text-lg">
            Technology
          </span>
          <h1 className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-500">
            {blog.title}
          </h1>
        </div>
        <User date={blog.date} img={userImg} name={"Jason Francisco"} />
      </Link>
    </div>
  );
};

export default BlogCard;
