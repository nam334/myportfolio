import React from "react";
import "./ProjectSection.scss";
import { Element } from "react-scroll";
import GenericHeading from "../components/GenericHeading";
import Project from "../components/Project";
import { projectData } from "../utils/data";

const ProjectSection = () => {
  return (
    <>
      <Element name="Projects" className="element">
        <div className="projectsection">
          <GenericHeading title="Projects" />
          <div className="flex justify-center items-center gap-[28px] flex-wrap">
            {projectData?.map((projectData) => (
              <Project data={projectData} />
            ))}
          </div>
        </div>
      </Element>
    </>
  );
};

export default ProjectSection;
