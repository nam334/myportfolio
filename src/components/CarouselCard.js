import React from "react";

const CarouselCard = ({ percentage, skill }) => {
  return (
    <>
      <div
        className="flex flex-col justify-center gap-4
       items-center"
      >
        <div
          className="border-[22px] border-orange-100 rounded-full flex flex-col justify-center 
       items-center bg-transparent w-60 h-60 text-orange-50 font-bold text-2xl"
        >
          {percentage}
        </div>
        <p className="text-orange-50 font-semibold text-xl">{skill}</p>
      </div>
    </>
  );
};

export default CarouselCard;
