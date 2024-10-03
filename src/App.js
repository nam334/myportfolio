import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import AnimatedCursor from "react-animated-cursor";
import Skill from "./sections/Skill";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import Wave from "react-wavify";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={35}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "orange",
          zIndex: "9999999999999999999999",
        }}
        outerStyle={{
          border: "3px solid orange",
          zIndex: "9999999999999999999999",
        }}
        outerAlpha={0.2}
        innerScale={0.2}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      {/* <div className="z-50"> */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Navbar />
      {/* </div> */}
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <Testimonials />
      <ContactUs />
      {/* <Skill />
    
      <Projects />
      <Testimonials />
     */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* </div> */}
    </>
  );
}

export default App;
