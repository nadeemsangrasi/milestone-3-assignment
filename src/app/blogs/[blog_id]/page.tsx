"use client";
import Wrapper from "@/components/shared/Wrapper";
import { blogsData } from "@/data/blogsData";
import { IBlogComment, IBlogPost } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

const BlogPostPage = ({ params }: { params: { blog_id: string } }) => {
  const [blogs, setBlogs] = useState<IBlogPost[]>(blogsData);
  const { blog_id } = params;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  const [comment, setComment] = useState({
    id: crypto.randomUUID(),
    date: formattedDate,
    content: "",
    author: "",
  });

  // Find the blog by its id
  const blog = blogs.find((blog: IBlogPost) => blog.id === blog_id);

  const updatedBlogs = blogs.map((blog: IBlogPost) => {
    if (blog.id === blog_id) {
      return {
        ...blog,
        comments: [
          ...(blog.comments || []), // Use empty array as fallback if comments are undefined
          {
            id: crypto.randomUUID(),
            author: comment.author,
            content: comment.content,
            date: comment.date,
          },
        ],
      };
    } else {
      return blog;
    }
  });

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.author || !comment.content) {
      return;
    }
    setBlogs(updatedBlogs);
    setComment({
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      content: "",
      author: "",
    });
  };

  return (
    <Wrapper>
      <div className="py-16">
        <div className="my-8 w-[90%] mx-auto">
          <div>
            <Image
              src={blog ? blog.detailImageURL : ""}
              alt="image"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-4 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold mt-8 ">
              {blog?.title}
            </h1>
            <h1 className="text-2xl">{blog?.date}</h1>
            <p className="text-xl">{blog?.content}</p>
          </div>
        </div>

        <div className="p-2 w-[90%] mx-auto">
          <form onSubmit={handleCommentSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="text-xl font-semibold">
                Share your feedback
              </label>
              <input
                type="text"
                placeholder="Author here..."
                id="author"
                className="py-3 px-2 rounded-lg text-black bg-gray-100"
                value={comment.author}
                onChange={(event) =>
                  setComment({ ...comment, author: event.target.value })
                }
              />
              <input
                type="text"
                placeholder="Comment here..."
                id="comment"
                className="py-3 px-2 rounded-lg text-black bg-gray-100"
                value={comment.content}
                onChange={(event) =>
                  setComment({ ...comment, content: event.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 sm:px-8 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-bold block mx-auto my-4"
            >
              Send comment
            </button>
          </form>
        </div>

        <div className="p-2 w-[90%] mx-auto">
          {blog?.comments?.length ? ( // Safely access comments and length
            blog.comments.map((comment: IBlogComment) => (
              <div
                key={comment.id}
                className="mb-4 p-3 rounded-lg bg-gray-700 text-white"
              >
                <p className="text-sm text-gray-400">{comment.date}</p>
                <p className="font-semibold">{comment.author}</p>
                <p className="mt-1">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet.</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogPostPage;