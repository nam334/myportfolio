import React, { useEffect, useRef, useState } from "react";
import "./SkillComponent.scss";
import { motion } from "framer-motion";

const SkillComponent = ({ title, data }) => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has triggered
  const sectionRef = useRef(null); // Reference to the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Trigger animation once
          observer.disconnect(); // Stop observing after the first animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, [hasAnimated]);
  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left with 0 opacity
      animate={hasAnimated ? { opacity: 1, x: 0 } : {}} // Slide in from left with bounce
      transition={{
        type: "spring",
        stiffness: 100, // Control how tight the spring is
        damping: 10, // Controls the "bounciness"
        duration: 0.8, // Control how long the animation lasts
      }}
      className="flex skillcomponent"
    >
      <span className="skillcomponent-title">{title}</span>
      <div className="flex gap-5 flex-wrap skillcomponent-container">
        {data?.map((data) => (
          <div className="skillcomponent-data">
            <img src={data.img} alt="skill img" className="w-[25px] h-[25px]" />
            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillComponent;
