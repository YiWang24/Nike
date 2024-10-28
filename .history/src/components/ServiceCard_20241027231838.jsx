import React from "react";

const ServiceCard = ({ imgUrl, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className=""></div>
        <img src={imgURL} alt={label} width={24} height={24}/>
    </div>
  );
};

export default ServiceCard;
