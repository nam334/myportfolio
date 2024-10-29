import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import walkthrough from "../assets/thumbnail/walkthrough.png";
import sketchboard from "../assets/thumbnail/sketchboard.png";
import treevisualizer from "../assets/thumbnail/treevisualizer.png";
import loom from "../assets/thumbnail/loom.png";
import game from "../assets/thumbnail/game.png";
const Projects = () => {
  return (
    <>
      <Element name="PROJECTS" className="element bg-orange-50">
        <div className="flex flex-col justify-center items-center pt-4 ">
          <motion.h2
            className="font-medium text-5xl font-poppins py-8"
            whileHover={{ scale: 1.25 }}
          >
            PROJECTS
          </motion.h2>
        </div>
      </Element>
      <div class="block md:grid grid-cols-2 md:grid-cols-3 gap-4 py-9 lg:py-9 lg:px-8 projectimg">
        <div class="grid gap-4  m-4 md:m-0">
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src={walkthrough}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src={treevisualizer}
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4  m-4 md:m-0">
          <div className="my-auto">
            <img
              class="h-auto max-w-full rounded-lg lg:col-span-1"
              src={sketchboard}
              alt=""
            />
          </div>
          {/* <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div> */}
        </div>
        <div class="grid gap-4  m-4 md:m-0">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={loom} alt="" />
          </div>
          <div>
            <img class="h-full max-w-full rounded-lg" src={game} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
