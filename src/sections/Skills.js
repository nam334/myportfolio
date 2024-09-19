import React from "react";
import SkillCarousel from "../components/SkillCarousel";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 bg-orange-50">
        <motion.h2 whileHover={{ scale: 2.1 }}>
          <h2 className="font-bold  text-5xl">Skills</h2>
        </motion.h2>

        <p className="py-10">
          <TypeAnimation
            className="text-lg px-60  text-gray-800 font-semibold py-10"
            preRenderFirstString={true}
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
            // style={{ fontSize: "2em" }}
            repeat={Infinity}
          />

          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. */}
        </p>
      </div>
      <div className="bg-orange-400">
        <SkillCarousel />
      </div>
    </>
  );
};

export default Skills;
