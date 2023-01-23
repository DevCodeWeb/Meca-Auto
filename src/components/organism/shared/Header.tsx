// Next Tools
import Link from "next/link";
import { useEffect, useState } from "react";

// Motion
import { motion } from "framer-motion";

// Shared
// import DropMobile from "./DropMobile";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-white  hover:shadow-lg" : "bg-transparent"
      } duration-200 fixed top-0 w-screen h-[60px] flex items-center justify-between z-50 xxl:px-[768px] xl:px-[256px] lg:px-[128px] md:px-[64px] sm:px-[40px] xs:px-[24px]`}
    >
      <Link href="/">
        <h1 className="text-xl font-bold duration-300 cursor-pointer text-green">
          Meca Auto
        </h1>
      </Link>
      <div className="flex gap-[25px] xs:hidden sm:hidden">
        <a href="#services">
          <div
            className={`${
              scroll ? " hover:text-darkGrey" : "hover:text-white"
            } text-green flex flex-col items-center rounded-md hover:gap-[5px] gap-[2px] duration-300 cursor-pointer`}
          >
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-sm font-bold"
            >
              Services
            </motion.h3>
          </div>
        </a>
        <a href="#cars">
          <div
            className={`${
              scroll ? " hover:text-darkGrey" : "hover:text-white"
            } text-green flex flex-col items-center rounded-md hover:gap-[5px] gap-[2px] duration-300 cursor-pointer`}
          >
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-sm font-bold"
            >
              Voitures
            </motion.h3>
          </div>
        </a>
        <a href="#adress">
          <div
            className={`${
              scroll ? " hover:text-darkGrey" : "hover:text-white"
            } text-green flex flex-col items-center rounded-md hover:gap-[5px] gap-[2px] duration-300 cursor-pointer`}
          >
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-sm font-bold"
            >
              Adresse
            </motion.h3>
          </div>
        </a>
        <a href="#contact">
          <div
            className={`${
              scroll ? " hover:text-darkGrey" : "hover:text-white"
            } text-green flex flex-col items-center rounded-md hover:gap-[5px] gap-[2px] duration-300 cursor-pointer`}
          >
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-sm font-bold"
            >
              Contact
            </motion.h3>
          </div>
        </a>
      </div>
      {/* Burger Menu */}
      <div className="hidden xs:flex sm:flex">
        <div
          className="flex flex-col gap-[5px] cursor-pointer h-[14px] w-[18px] relative items-center justify-center"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {/* top */}
          <div
            className={`${
              mobile ? "block rotate-[-405deg] top-1/2" : "block"
            } bg-green w-[18px] h-[2px] rounded-2xl duration-300 absolute top-0`}
          ></div>
          {/* middle */}
          <div
            className={`${
              mobile ? "w-[0px]" : "w-[18px]"
            } bg-green w-[15px] h-[2px] rounded-2xl duration-300 absolute top-[6.2px]`}
          ></div>
          {/* bottom */}
          <div
            className={`${
              mobile ? "block rotate-[405deg]  top-1/2" : "block"
            } bg-green w-[18px] h-[2px] rounded-2xl duration-300 absolute bottom-0`}
          ></div>
        </div>
        <div
          className={`${
            mobile ? "right-[0px]" : "right-[-200px]"
          } absolute duration-300 top-[0px] z-40`}
        >
          <div
            className={`${scroll ? "bg-white" : "bg-transparent"}`}
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            <DropMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
