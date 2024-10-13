import { StaticImageData } from "next/image";

export interface IBlogComment {
  id: string;
  author: string;
  date: string;
  content: string;
}
export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  imageURL: StaticImageData;
  detailImageURL: StaticImageData;
  comments: IBlogComment[];
}
