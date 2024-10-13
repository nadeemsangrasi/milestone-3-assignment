import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import homeImage from "@/assets/images/home-4.jpg";

const HomeSection = () => {
  return (
    <Wrapper>
      <div className="py-16">
        <div className="flex flex-col md:flex-row items-center justify-around my-20">
          <div className="space-y-4 max-w-md text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Welcome to Our Blog
            </h1>
            <h2 className="text-lg sm:text-xl text-secondary-white">
              Insights, Stories, and Tips
            </h2>
            <p className="text-sm sm:text-lg text-secondary-white">
              Dive into a world of informative and engaging articles covering a
              wide range of topics. From the latest trends to in-depth guides,
              our blog offers something for everyone.
            </p>
          </div>
          <div className="sm:px-4 md:w-1/2 mt-10 md:mt-0 ">
            <Image
              src={homeImage}
              alt="Blog Home Image"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
