import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselCard from "./CarouselCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const SkillCarousel = () => {
  return (
    <>
      <Carousel showArrows={true} showThumbs={true} autoPlay={true}>
        <div className="hidden md:grid py-8  md:grid-cols-3 gap-4">
          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="95%" skill="React" />
          </div>

          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="80%" skill="Javascript" />
          </div>

          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="90%" skill="HTML" />
          </div>
        </div>

        <div className="hidden md:grid py-8 md:grid-cols-3 gap-4">
          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="95%" skill="React" />
          </div>

          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="80%" skill="Javascript" />
          </div>

          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="90%" skill="HTML" />
          </div>
        </div>

        <div className="hidden md:grid py-8  md:grid-cols-3 gap-4">
          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="95%" skill="React" />
          </div>

          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="80%" skill="Javascript" />
          </div>

          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="90%" skill="HTML" />
          </div>
        </div>
      </Carousel>

      <div className="grid grid-cols-1 md:hidden">
        <Carousel showArrows={true} showThumbs={true}>
          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="95%" skill="React" />
          </div>
          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="95%" skill="React" />
          </div>
          <div
            className="p-8 flex justify-center 
       items-center"
          >
            <CarouselCard percentage="95%" skill="React" />
          </div>
        </Carousel>
      </div>

      {/* <Carousel showArrows={true} showThumbs={true}>
        <div>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
    </>
  );
};

export default SkillCarousel;
