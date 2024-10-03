import React, { useEffect, useRef, useState } from "react";
import GenericHeading from "../components/GenericHeading";
import SkillComponent from "../components/SkillComponent";
import {
  apidata,
  builddata,
  coretechdata,
  designdata,
  frameworkslibraries,
  prodata,
  versiondata,
} from "../utils/data";
import "./SkillSection.scss";
import { Element } from "react-scroll";

const SkillSection = () => {
  return (
    <Element name="Skills" className="element">
      <div className="skillsection" id="skills">
        <GenericHeading title="Skills" />
        <div className="flex flex-row  skillsection-container flex-wrap">
          <SkillComponent title="Core Technologies" data={coretechdata} />
          <SkillComponent
            title="Frameworks and Libraries"
            data={frameworkslibraries}
          />
          <SkillComponent
            title="Build Tools and Package Managers"
            data={builddata}
          />
          <SkillComponent title="  APIs and Back-End Services" data={apidata} />
          <SkillComponent
            title="Project Management and Collaboration"
            data={prodata}
          />

          <SkillComponent
            title="Version Control"
            data={versiondata}
            className="mt-10"
          />
        </div>
      </div>
    </Element>
  );
};

export default SkillSection;
