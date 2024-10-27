import Image, { StaticImageData } from "next/image";
import React from "react";

const User = ({
  img,
  name,
  date,
}: {
  img: StaticImageData;
  name: string;
  date: string;
}) => {
  return (
    <div className="space-x-3">
      <Image src={img} alt="User Image" className="inline-block" />
      <span className="text-gray">{name}</span>
      <span className="text-gray">{date}</span>
    </div>
  );
};

export default User;
