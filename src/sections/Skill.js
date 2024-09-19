import React from "react";
import Wave from "react-wavify";
import { skills } from "../utils/data";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Skill = () => {
  return (
    <>
      <Element name="SKILLS" className="element">
        <div className="flex flex-col justify-center items-center pt-8">
          <motion.h2
            className="font-medium text-5xl font-poppins py-8"
            whileHover={{ scale: 1.25 }}
          >
            Skills
          </motion.h2>

          {/* <p className="text-sm font-roboto px-4 md:px-60  py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p> */}
          <div className="mb-14">
            {skills?.map((skill) => {
              return (
                <div className="flex flex-col md:flex-row gap-2">
                  {skill?.map((skill, i) => (
                    <motion.div
                      className=" flex justify-center items-center font-poppins   w-64 py-2
                  font-medium px-4 text-white rounded-sm bg-orange-400 m-2"
                      whileHover={{ scale: 1.1 }}
                      initial={{
                        opacity: 0,
                        translateX: i % 2 === 0 ? -50 : 50,
                        translateY: -70,
                      }}
                      whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                      transition={{ duration: 0.3, delay: (i + 1) * 0.6 }}
                    >
                      <img
                        src={skill?.img}
                        alt={skill.name}
                        className="w-12 h-10"
                      />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </div>
          {/* <Wave
            fill="#FB923C"
            paused={false}
            style={{ display: "flex", zIndex: 40 }}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.35,
              points: 3,
            }}
          /> */}
        </div>
      </Element>
    </>
  );
};

export default Skill;
