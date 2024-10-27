import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center bg-secondary-black  px-2 sm:px-4 py-4  w-full  sm:max-w-7xl  fixed left-1/2 -translate-x-1/2 z-50">
      <h1 className="font-bold text-xl sm:text-2xl ">
        <Link href={"/"}>blogger</Link>
      </h1>
      <div>
        <ul className="flex gap-2 sm:gap-4 items-center">
          <li className="text-semibold text-sm sm:text-xl  ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-semibold text-sm sm:text-xl  ">
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li className="text-semibold text-sm sm:text-xl">
            <Link href={"/#featured"}>Featured</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
