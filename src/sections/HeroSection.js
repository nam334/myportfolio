import React from "react";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";
import img from "../assets/image.svg";
import loc from "../assets/loc.png";
import { Element } from "react-scroll";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./HeroSection.scss";
const HeroSection = () => {
  const textOne = [
    "Hii, I am",
    // "Namrata",
    // "Das",
    // " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ];
  const textTwo = ["NAMRATA"];
  const textThree = ["DAS"];
  const textFour =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04, // Delay between letters
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      {/* <Element name="HOME" className="element"> */}
      {/* <div className="z-50">
        <Navbar />
      </div> */}

      {/* <div className="area grid grid-cols-4 bg-orange-100 mt-16 md:px-10 px-7 py-8 z-10"> */}

      <div className="hero">
        <div className="hero-section">
          {/* <div className="justify-between md:flex flex-col h-[80%] z-50"> */}
          <div className="hero-section-container">
            {textOne.map((el, i) => (
              <motion.h5
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.25,
                  delay: i / 2,
                }}
                className="hero-section-container-heading"
                key={i}
              >
                {el}{" "}
              </motion.h5>
            ))}
            <div className="hero-section-container-subheading">
              {textTwo.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }} // Start with full transparency
                  animate={{ opacity: 1 }} // Gradually increase opacity to fully visible
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 1) / 2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ y: -10 }} // Bounces the button upward slightly on hover
                  whileTap={{ scale: 0.95 }}
                  // transition={{ type: "spring", stiffness: 300 }}
                  className="text-[#FF5C00]"
                  key={i}
                  //whileHover={{ scale: 1.1 }}
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
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-[#000000]"
                  // whileHover={{ scale: 1.2 }}
                  whileHover={{ y: -10 }} // Bounces the button upward slightly on hover
                  whileTap={{ scale: 0.95 }}
                  // transition={{ type: "spring", stiffness: 300 }}
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
            </div>
            <div className="hero-section-container-content">
              {/* {textFour.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 3) / 2,
                  }}
                  className=""
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))} */}

              <motion.h1 variants={sentence} initial="hidden" animate="visible">
                {textFour.split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <div className="flex  gap-3 ">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // transition={{
                //   duration: 1.25,
                //   delay: 2 / 2,
                // }}
                className="text-white bg-[#FF5C00] cursor-pointer font-semibold max-w-fit py-2 px-4 
            font-poppins border border-[#FF5C00] rounded-sm "
                // whileHover={{ scale: 1.1 }}
                // whileHover={{ scale: 1.1 }} // Scale up on hover
                // whileTap={{ scale: 0.9 }} // Scale down slightly on click
                // transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth scaling effect
                whileHover={{ scale: 1.05 }} // Slight hover effect
                whileTap={{ scale: 0.6 }} // Shrinks then scales back on click
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* <Link
                  activeClass="active "
                  to="CONTACT"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  // onSetActive={handleSetActive}
                >
                  {" "} */}
                Download CV
                {/* </Link> */}
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // transition={{
                //   duration: 1.25,
                //   delay: 2 / 2,
                // }}
                className="text-[#FF5C00] cursor-pointer font-semibold max-w-fit py-2 px-4 
            font-poppins border border-[#FF5C00] rounded-sm z-[80]"
                // whileHover={{ scale: 1.1 }} // Scale up on hover
                // whileTap={{ scale: 0.9 }} // Scale down slightly on click
                // transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth scaling effect

                whileHover={{ scale: 1.05 }} // Slight hover effect
                whileTap={{ scale: 0.6 }} // Shrinks then scales back on click
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  activeClass="active "
                  to="Contact"
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
            <div className=" z-30">
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

          <div className="col-span-4 md:col-span-2 flex justify-around items-center flex-col hero-section-location">
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
              <motion.img
                src={img}
                alt="hero img "
                className="heroimg"
                whileHover={{ scale: 1.1 }} // Slightly increase size on hover
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            <motion.p
              className="text-[#FF5C00]  md:-mt-20 font-semibold self-end font-poppins z-[80] flex"
              whileHover={{ scale: 1.25 }}
            >
              <img src={loc} alt="" className="w-6 h-6" />
              <span>Dibrugarh, Assam</span>
            </motion.p>
          </div>

          <div className=" z-50 col-span-4 hero-section-secondarycontainer">
            <div className="flex flex-col  z-50 justify-center gap-[15px] pb-12 md:pb-2 hero-section-secondarycontainer-container">
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
              <div className="flex hero-section-secondarycontainer-container-heading">
                {textTwo.map((el, i) => (
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1.25,
                      delay: (i + 1) / 2,
                    }}
                    className="text-[#FF5C00] uppercase"
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
                    className="text-[#000000] uppercase"
                    key={i}
                  >
                    {el}{" "}
                  </motion.h1>
                ))}
              </div>

              {textFour.split("").map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.25,
                    delay: (i + 3) / 2,
                  }}
                  className="md:mt-4 hero-section-secondarycontainer-container-heading-content"
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              <div className="flex  gap-3">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1.25,
                  //   delay: 2 / 2,
                  // }}
                  className="text-[#fff] bg-[#FF5C00] cursor-pointer font-semibold max-w-fit py-2 px-4 
            font-poppins border border-[#FF5C00] rounded-sm z-[80]"
                  whileHover={{ scale: 1.1 }} // Scale up on hover
                  whileTap={{ scale: 0.9 }} // Scale down slightly on click
                  transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth scaling effect
                >
                  Download CV
                </motion.button>
                <motion.button
                  className="text-[#000] cursor-pointer font-semibold max-w-fit 
            py-2 px-4 font-poppins border border-[#FF5C00] rounded-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1.25,
                  //   delay: 4 / 2,
                  // }}
                  whileHover={{ scale: 1.1 }} // Scale up on hover
                  whileTap={{ scale: 0.9 }} // Scale down slightly on click
                  transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth scaling effect
                >
                  <Link
                    activeClass="active "
                    to="Contact"
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
      {/* </Element> */}
    </>
  );
};

export default HeroSection;
