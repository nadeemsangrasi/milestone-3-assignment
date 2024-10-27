import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import homeImg from "@/assets/images/sectionImages/home.png";
import userImg from "@/assets/images/sectionImages/user.png";
import Image from "next/image";
import User from "@/components/shared/User";
const HomeSection = () => {
  return (
    <Wrapper>
      <div className="pt-0 relative ">
        <Image
          src={homeImg}
          alt="Home Image"
          className="w-full h-full object-cover"
        />
        <div className="p-8 bg-white space-y-4 w-full  md:w-[600px] md:absolute -bottom-16 left-[7%] rounded-lg shadow-lg">
          <span className="px-4 py-2 bg-blue text-white rounded-md text-sm sm:text-lg">
            Technology
          </span>
          <h1 className="text-black font-bold text-xl sm:text-2xl md:text-4xl">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <User img={userImg} name="Jason Francisco" date="August 20, 2022" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
