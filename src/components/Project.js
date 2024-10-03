import React from "react";
import "./Project.scss";
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

  return (
    <>
      <div className="projectcontainer" name="Projects">
        <img src={data?.img} alt="project title" />
        <div className="flex justify-between w-full items-center">
          <p className="projectcontainer-title">{data.name}</p>
          <button
            className="projectcontainer-viewbtn cursor-pointer hover:font-semibold hover:bg-orange-200"
            onClick={() => clickHandler(data)}
          >
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
