import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <div className="bg-slate-100 flex justify-between items-center bg-secondary-black  px-2 sm:px-4 py-4 mt-2 shadow-lg w-full  sm:w-[90%]  fixed left-1/2 -translate-x-1/2">
        <h1 className="font-bold text-xl sm:text-2xl ">
          <Link href={"/"}>blogger</Link>
        </h1>
        <div>
          <ul className="flex gap-2 sm:gap-4 items-center">
            <li className="text-semibold text-sm sm:text-xl  ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-semibold text-sm sm:text-xl">
              <Link href={"#blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
