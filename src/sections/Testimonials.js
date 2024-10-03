import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { RiSingleQuotesL } from "react-icons/ri";
import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import GenericHeading from "../components/GenericHeading";
import { clientTestimonials } from "../utils/data";
import "./Testimonial.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const HomePage = () => {
  return (
    <>
      <Element name="Testimonials" className="element testimonialelement">
        <div className="flex flex-col items-center justify-center py-10 bg-orange-50">
          <motion.h2
            className="font-bold flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            <GenericHeading title="Client Testimonials" />
          </motion.h2>
        </div>

        <AutoplaySlider
          animation="fallAnimation"
          play={true}
          cancelOnInteraction={true}
          interval={3000}
          className="bg-orange-400 testimonialelement-slider"
        >
          {clientTestimonials?.map((clientTestimonial) => (
            <div>
              <ul className="circle">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <TestimonialCard data={clientTestimonial} />
            </div>
          ))}

          {/* <div>
            <ul className="circle">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <TestimonialCard />
          </div>
          <div>
            <ul className="circle">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <TestimonialCard />
          </div> */}
        </AutoplaySlider>
      </Element>
    </>
  );
};
export default HomePage;
