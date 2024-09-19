import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <Element name="PROJECTS" className="element">
        <div className="flex flex-col justify-center items-center pt-4 md:pt-16">
          <motion.h2
            className="font-medium text-5xl font-poppins py-8"
            whileHover={{ scale: 1.25 }}
          >
            PROJECTS
          </motion.h2>

          {/* <p className="text-sm font-roboto px-4 md:px-60  py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p> */}
        </div>

        <div class="block md:grid grid-cols-2 md:grid-cols-3 gap-4 py-9">
          <div class="grid gap-4  m-4 md:m-0">
            <div>
              <img
                class="h-full max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4  m-4 md:m-0">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4  m-4 md:m-0">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Projects;
