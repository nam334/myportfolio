import React, { useEffect, useRef, useState } from "react";
import "./ProjectSection.scss";
import { Element } from "react-scroll";
import GenericHeading from "../components/GenericHeading";
import Project from "../components/Project";
import { projectData } from "../utils/data";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of each card
      },
    },
  };
  const [hasAnimated, setHasAnimated] = useState(false); // To track if animation has occurred
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Trigger animation once
          observer.disconnect(); // Stop observing after first animation
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => observer.disconnect(); // Cleanup the observer on component unmount
  }, [hasAnimated]);

  return (
    <>
      <Element name="Projects" className="element">
        <div className="projectsection">
          <GenericHeading title="Projects" />
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"} // Trigger animation if user scrolls to section
            className="flex justify-center items-center gap-[28px] flex-wrap"
          >
            {projectData?.map((projectData) => (
              <Project data={projectData} />
            ))}
          </motion.div>
        </div>
      </Element>
    </>
  );
};

export default ProjectSection;
