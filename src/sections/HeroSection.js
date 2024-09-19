import React from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";
import img from "../assets/img.svg";
import { Element } from "react-scroll";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
const HeroSection = () => {
  const textOne = [
    "Hii, I am",
    // "Namrata",
    // "Das",
    // " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ];
  const textTwo = ["NAMRATA"];
  const textThree = ["DAS"];
  const textFour = [
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ];
  return (
    <>
      <Element name="HOME" className="element">
        {/* <div className="z-50">
        <Navbar />
      </div> */}

        {/* <div className="area grid grid-cols-4 bg-orange-100 mt-16 md:px-10 px-7 py-8 z-10"> */}
        <div className="area grid grid-cols-4 bg-orange-100 mt-16 md:mt-0 md:px-10 px-7  z-10">
          <div className="col-span-2 md:col-span-2 p-6 hidden md:flex flex-col ">
            {/* <div className="justify-between md:flex flex-col h-[80%] z-50"> */}
            <div className=" md:flex flex-col h-[80%] z-50 justify-between gap-3">
              {textOne.map((el, i) => (
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: i / 2,
                  }}
                  className="text-[#000000] font-poppins font-semibold"
                  key={i}
                >
                  {el}{" "}
                </motion.h5>
              ))}
              {textTwo.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 1) / 2,
                  }}
                  className="text-[#FF5C00] font-bold uppercase text-5xl"
                  key={i}
                  whileHover={{ scale: 1.1 }}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              {textThree.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 2) / 2,
                  }}
                  className="text-[#000000]  font-bold uppercase text-5xl"
                  whileHover={{ scale: 1.1 }}
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              {textFour.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 3) / 2,
                  }}
                  className="text-base font-roboto md:mt-4"
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              <div className="flex  gap-3">
                <motion.button
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1.25,
                  //   delay: 2 / 2,
                  // }}
                  className="text-[#FF5C00] cursor-pointer font-semibold max-w-fit py-2 px-4 
            font-poppins border border-[#FF5C00] rounded-sm z-[80]"
                  whileHover={{ scale: 1.1 }}
                >
                  Download CV
                </motion.button>
                <motion.button
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1.25,
                  //   delay: 2 / 2,
                  // }}
                  className="text-white bg-[#FF5C00] cursor-pointer font-semibold max-w-fit py-2 px-4 
            font-poppins border border-[#FF5C00] rounded-sm z-[80]"
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    activeClass="active "
                    //               className="md:ml-8 text-lg font-medium md:my-0 my-4 gap-6
                    // text-[#050505] hover:text-gray-400 duration-500 font-poppins"
                    to="CONTACT"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    // onSetActive={handleSetActive}
                  >
                    {" "}
                    Contact Me
                  </Link>
                </motion.button>
              </div>
            </div>

            <div className="my-8 z-30">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.25,
                  delay: 5 / 2,
                }}
                className="font-semibold py-2 font-poppins"
              >
                Let's Connect
              </motion.p>
              <SocialIcons />
            </div>
          </div>

          <div className="col-span-4 md:col-span-2 flex justify-around items-center flex-col ">
            {/* h-[65vh] md:h-auto p-12 md:p-6 */}
            <motion.div
              className="z-[40] grow-0 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{
                duration: 1.25,
                delay: 1.5,
              }}
            >
              <img src={img} alt="hero img " className="-m-10 md:-m-32" />
            </motion.div>
            <motion.p
              className="text-[#FF5C00]  md:-mt-20 font-semibold self-end font-poppins z-[80]"
              whileHover={{ scale: 1.25 }}
            >
              Dibrugarh, Assam
            </motion.p>
          </div>

          <div className="md:hidden z-50 col-span-4">
            <div className="flex flex-col  z-50 justify-center gap-2 pb-12 md:pb-2">
              {textOne.map((el, i) => (
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: i / 2,
                  }}
                  className="text-[#000000] font-poppins font-semibold"
                  key={i}
                >
                  {el}{" "}
                </motion.h5>
              ))}
              {textTwo.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 1) / 2,
                  }}
                  className="text-[#FF5C00] font-bold uppercase text-3xl"
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              {textThree.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 2) / 2,
                  }}
                  className="text-[#000000]  font-bold uppercase text-3xl "
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              {textFour.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 3) / 2,
                  }}
                  className="text-sm font-roboto md:mt-4"
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              <div className="flex  flex-col gap-3">
                <motion.button
                  className="text-[#FF5C00] cursor-pointer font-semibold max-w-fit 
            py-2 px-4 font-poppins border border-[#FF5C00] rounded-sm"
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1.25,
                  //   delay: 4 / 2,
                  // }}
                  whileHover={{ scale: 1.25 }}
                >
                  Download CV
                </motion.button>
                <motion.button
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1.25,
                  //   delay: 2 / 2,
                  // }}
                  className="text-[#FF5C00] cursor-pointer font-semibold max-w-fit py-2 px-4 
            font-poppins border border-[#FF5C00] rounded-sm z-[80]"
                  whileHover={{ scale: 1.1 }}
                >
                  Contact Me
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 bg-orange-100 mt-16 md:px-10 px-7 py-6 h-screen ">
        <div className=" p-6 hidden md:flex flex-col ">
          <div className="justify-between md:flex flex-col h-[80%]">
            <p className="text-base">
              Lorem ipsum is placeholder text <br /> commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
            <div>
              <p className="text-base ">
                Lorem ipsum is placeholder text <br /> commonly used in the
                graphic, print, and publishing industries for previewing layouts
                and visual mockups.
              </p>
            </div>
          </div>

          <div className="my-8">
            <p className="font-semibold py-2">Let's Connect</p>
            <SocialIcons />
          </div>
        </div>

        <div
          className="col-span-3 md:col-span-2 flex justify-around items-center 
        h-[75vh] md:h-auto p-12 md:p-6"
        >
          <div
            className="flex shrink-0 grow-0 text-green-700 rounded-full w-64 h-64 md:w-96 md:h-96
           bg-orange-500"
          ></div>
        </div>
      </div> */}
      </Element>
    </>
  );
};

export default HeroSection;