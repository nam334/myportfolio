import React from "react";
import "./SkillComponent.scss";
const SkillComponent = ({ title, data }) => {
  return (
    <div className="flex skillcomponent">
      <span className="skillcomponent-title">{title}</span>
      <div className="flex gap-5 flex-wrap skillcomponent-container">
        {data?.map((data) => (
          <div className="skillcomponent-data">
            <img src={data.img} alt="skill img" className="w-[25px] h-[25px]" />
            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillComponent;
