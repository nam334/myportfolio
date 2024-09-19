import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { RiSingleQuotesL } from "react-icons/ri";
import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const HomePage = () => {
  return (
    <>
      <Element name="TESTIMONIALS" className="element">
        <div className="flex flex-col items-center justify-center py-10 bg-orange-50 -mt-6 ">
          <motion.h2
            className="font-bold flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            {/* <motion.span
            whileHover={{ scale: 2.1 }}
            className="font-bold md:text-5xl flex"
          >
            <RiSingleQuotesL size="3rem" />
            Testimonials
          </motion.span> */}
            <h2 className="font-medium text-5xl font-poppins py-8 flex">
              <RiSingleQuotesL size="3rem" />
              <motion.span whileHover={{ scale: 1.1 }}>
                {" "}
                Testimonials
              </motion.span>
            </h2>
          </motion.h2>
          {/* <p className="py-10">
          <TypeAnimation
            preRenderFirstString={true}
            className="text-lg md:px-60  text-gray-800 font-semibold py-10"
            sequence={[
              500,
              "We produce food for Mice", // initially rendered starting point
              1000,
              "We produce food for Hamsters",
              1000,
              "We produce food for Guinea Pigs",
              1000,
              "We produce food for Chinchillas",
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p> */}
          {/* <p className="text-sm font-roboto px-4 md:px-60  py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p> */}
        </div>

        <AutoplaySlider
          animation="fallAnimation"
          play={true}
          cancelOnInteraction={false}
          interval={3000}
          className="bg-orange-400 md:h-[80vh] "
        >
          <div>
            <ul className="circle">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <TestimonialCard />
          </div>

          <div>
            <ul className="circle">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <TestimonialCard />
          </div>
          <div>
            <ul className="circle">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <TestimonialCard />
          </div>
        </AutoplaySlider>
      </Element>
    </>
  );
};
export default HomePage;
