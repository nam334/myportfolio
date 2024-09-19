import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { motion } from "framer-motion";
import logo from "../assets/newlogo.svg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SKILLS", link: "/" },
    { name: "TESTIMONIALS", link: "/" },
    { name: "PROJECTS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  useEffect(() => {
    console.log(open, "open");
  }, [open]);

  const changeHandler = () => {
    console.log("click");
    setOpen((prev) => !prev);
  };
  return (
    // <div className="bg-orange-50 w-full fixed top-0 left-0 z-[99] shadow-sm">
    <div className="bg-orange-100 w-full fixed md:relative top-0 left-0 z-[99] ">
      <div
        className="flex items-center  justify-between md:justify-around   bg-orange-100 
    px-7"
      >
        <div
          className=" text-xl cursor-pointer flex items-center font-bold
      text-orange-500"
        >
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="text-xl text-orange-500 mr-1 pt-2"
          >
            {/* <ion-icon name="logo-ionic"></ion-icon>
             LOGO */}
            <img src={logo} alt="logo" width="100" height="100" />
          </motion.span>
        </div>

        <div
          onClick={changeHandler}
          role="presentation"
          className=" text-xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:gap-6
           bg-orange-100 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
           transition-all duration-500 flex flex-col md:flex-row shadow-md md:shadow-none pt-6 md:pt-0
            ease-in ${open ? "top-20 " : "top-[-490px]"}`}
        >
          {Links?.map((link) => (
            // <li
            //   key={link.name}
            //   className="md:ml-8 text-lg font-medium md:my-0 my-7 gap-6
            //   text-gray-800 hover:text-gray-400 duration-500
            //   "
            // >
            <Link
              activeClass="active "
              className="md:ml-8 text-lg font-medium md:my-0 my-4 gap-6 
      text-[#050505] hover:text-gray-400 duration-500 font-poppins"
              to={link.name}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // onSetActive={handleSetActive}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
