import React from "react";
import "./Project.scss";
import { motion } from "framer-motion";

const Project = ({ data }) => {
  const clickHandler = (data) => {
    if (data?.name === "Tic Tac Toe")
      window.open("https://mytictactoe2024.netlify.app/", "_blank");
    if (data?.name === "Tree Visualizer")
      window.open("https://myleetcodetreevisualizer.netlify.app/", "_blank");
    if (data?.name === "Capture Me")
      window.open("https://mysnapvideoapp.netlify.app/", "__blank");
    if (data?.name === "Web Walk")
      window.open("https://mywalkthroughapp.netlify.app/", "__blank");
    // if (data?.name === "Doodle Desk") window.open("", "__blank");
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Cards start off-screen and smaller
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring", // Adding a bounce
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="projectcontainer"
        name="Projects"
      >
        <img src={data?.img} alt="project title" />
        <div className="flex justify-between w-full items-center">
          {/* <p className="projectcontainer-title">{data.name}</p> */}
          <button
            className="projectcontainer-viewbtn cursor-pointer
             "
            onClick={() => clickHandler(data)}
          >
            {data.name}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
