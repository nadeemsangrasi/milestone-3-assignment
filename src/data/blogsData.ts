import { IBlogPost } from "@/types/types";
import blogOne1 from "@/assets/images/blogImages/blog-one-1.jpg";
import blogOne2 from "@/assets/images/blogImages/blog-one-2.jpg";
import blogTwo1 from "@/assets/images/blogImages/blog-two-1.jpg";
import blogTwo2 from "@/assets/images/blogImages/blog-two-2.jpg";
import blogThree1 from "@/assets/images/blogImages/blog-three-1.jpg";
import blogThree2 from "@/assets/images/blogImages/blog-three-2.jpg";
import blog5 from "@/assets/images/blogImages/blog-5.jpg";
import blog6 from "@/assets/images/blogImages/blog-6.jpg";
import blog7 from "@/assets/images/blogImages/blog-7.jpg";
import blog8 from "@/assets/images/blogImages/blog-8.jpg";
import blog9 from "@/assets/images/blogImages/blog-9.jpg";
import blog10 from "@/assets/images/blogImages/blog-10.jpg";
import blog11 from "@/assets/images/blogImages/blog-11.jpg";
import blog12 from "@/assets/images/blogImages/blog-12.jpg";
import blog13 from "@/assets/images/blogImages/blog-13.jpg";
import blog14 from "@/assets/images/blogImages/blog-14.jpg";

export const blogsData: IBlogPost[] = [
  {
    id: "1",
    title: "Leveraging Next.js for Enhanced E-Commerce Performance",
    date: "August 21, 2024",
    imageURL: blogOne1,
    detailImageURL: blogOne2,
    content:
      "Next.js is a powerful framework for building fast, SEO-friendly e-commerce sites. With its server-side rendering (SSR) capabilities and static site generation (SSG), Next.js enhances page load times and improves overall site performance. By leveraging Next.js, we can create dynamic and engaging product pages with improved SEO and faster user interactions.",
    comments: [
      {
        id: "c1",
        author: "Alice",
        date: "August 22, 2024",
        content:
          "This is a very informative article! I've been considering using Next.js for my e-commerce site, and this gave me the confidence to go for it.",
      },
      {
        id: "c2",
        author: "Bob",
        date: "August 23, 2024",
        content:
          "Great insights on Next.js! I appreciate the focus on SEO and performance. Looking forward to more content like this.",
      },
    ],
  },
  {
    id: "2",
    title: "The Role of Dynamic Routing in Modern E-Commerce Platforms",
    date: "August 18, 2024",
    imageURL: blogThree1,
    detailImageURL: blogThree2,
    content:
      "Dynamic routing in our Next.js-powered e-commerce site enhances the shopping experience by providing seamless navigation and personalized product pages. This approach allows users to access relevant product information efficiently and ensures that they have a smooth browsing experience.",
    comments: [
      {
        id: "c5",
        author: "Eve",
        date: "August 19, 2024",
        content:
          "Dynamic routing has been a game-changer for our e-commerce site. This blog does a great job explaining its benefits and implementation.",
      },
      {
        id: "c6",
        author: "Frank",
        date: "August 20, 2024",
        content:
          "Thanks for the detailed explanation of dynamic routing. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
  {
    id: "3",
    title: "Harnessing the Power of ChatGPT for E-Commerce Customer Support",
    date: "August 22, 2024",
    imageURL: blogTwo1,
    detailImageURL: blogTwo2,
    content:
      "Integrating ChatGPT into our e-commerce platform has revolutionized customer support. This blog explores how leveraging AI technology enhances customer interactions, providing instant responses and personalized assistance.",
    comments: [
      {
        id: "c3",
        author: "Charlie",
        date: "August 23, 2024",
        content:
          "The integration of AI like ChatGPT is a game changer for customer support! It's fascinating to see how it can handle complex queries with ease.",
      },
      {
        id: "c4",
        author: "Diana",
        date: "August 24, 2024",
        content:
          "I've had experience using ChatGPT for customer support, and it's been a huge time saver. Great to see this technology being embraced in e-commerce.",
      },
    ],
  },
  {
    id: "4",
    title:
      "The Benefits of Server-Side Rendering (SSR) in E-Commerce Platforms",
    date: "August 19, 2024",
    imageURL: blog5,
    detailImageURL: blog6,
    content:
      "Server-side rendering (SSR) in our e-commerce site has revolutionized the shopping experience. This blog explores its benefits and implementation.",
    comments: [
      {
        id: "c7",
        author: "Grace",
        date: "August 20, 2024",
        content:
          "Server-side rendering (SSR) in our e-commerce site has revolutionized the shopping experience.",
      },
      {
        id: "c8",
        author: "Henry",
        date: "August 21, 2024",
        content:
          "Thanks for the detailed explanation of server-side rendering. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
  {
    id: "5",
    title: "The Role of Dynamic Routing in Modern E-Commerce Platforms",
    date: "August 19, 2024",
    imageURL: blog7,
    detailImageURL: blog8,
    content:
      "Dynamic routing in our e-commerce site has revolutionized the shopping experience. This blog explores its benefits and implementation.",
    comments: [
      {
        id: "c9",
        author: "Ivy",
        date: "August 20, 2024",
        content:
          "Dynamic routing in our e-commerce site has revolutionized the shopping experience.",
      },
      {
        id: "c10",
        author: "Jack",
        date: "August 21, 2024",
        content:
          "Thanks for the detailed explanation of dynamic routing. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
  {
    id: "6",
    title:
      "The Benefits of Server-Side Generation (SSG) in E-Commerce Platforms",
    date: "August 19, 2024",
    imageURL: blog9,
    detailImageURL: blog10,
    content:
      "Server-side generation (SSG) in our e-commerce site has revolutionized the shopping experience. This blog explores its benefits and implementation.",
    comments: [
      {
        id: "c11",
        author: "Kate",
        date: "August 20, 2024",
        content:
          "Server-side generation (SSG) in our e-commerce site has revolutionized the shopping experience.",
      },
      {
        id: "c12",
        author: "Liam",
        date: "August 21, 2024",
        content:
          "Thanks for the detailed explanation of server-side generation. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
  {
    id: "7",
    title: "The Role of Dynamic Routing in Modern E-Commerce Platforms",
    date: "August 19, 2024",
    imageURL: blog11,
    detailImageURL: blog12,
    content:
      "Dynamic routing in our e-commerce site has revolutionized the shopping experience. This blog explores its benefits and implementation.",
    comments: [
      {
        id: "c13",
        author: "Mia",
        date: "August 20, 2024",
        content:
          "Dynamic routing in our e-commerce site has revolutionized the shopping experience.",
      },
      {
        id: "c14",
        author: "Nancy",
        date: "August 21, 2024",
        content:
          "Thanks for the detailed explanation of dynamic routing. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
  {
    id: "8",
    title:
      "The Benefits of Server-Side Rendering (SSR) in E-Commerce Platforms",
    date: "August 19, 2024",
    imageURL: blog13,
    detailImageURL: blog14,
    content:
      "Server-side rendering (SSR) in our e-commerce site has revolutionized the shopping experience. This blog explores its benefits and implementation.",
    comments: [
      {
        id: "c15",
        author: "Olivia",
        date: "August 20, 2024",
        content:
          "Server-side rendering (SSR) in our e-commerce site has revolutionized the shopping experience.",
      },
      {
        id: "c16",
        author: "Peter",
        date: "August 21, 2024",
        content:
          "Thanks for the detailed explanation of server-side rendering. It's impressive how it can improve the user experience on e-commerce platforms.",
      },
    ],
  },
];
