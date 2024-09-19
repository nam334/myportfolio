import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div
      className="w-[20rem] md:w-[50rem] px-4 py-12 md:px-8 md:py-24 bg-orange-50 rounded-md
     flex flex-col gap-4 relative z-[80] mt-[12rem] md:mt-[3rem]   pb-[15rem]"
    >
      <div className="flex  items-center gap-4">
        <FaUserCircle size="3rem" />
        <div className="flex flex-col">
          <p className="font-semibold">Leo</p>
          <div className="flex justify-between items-stretch md:w-[40rem]">
            <p className="text-sm">Lead Designer</p>
            <p>rating</p>
          </div>
        </div>
      </div>
      <p className="font-semibold">It was a very good experience.</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default TestimonialCard;
