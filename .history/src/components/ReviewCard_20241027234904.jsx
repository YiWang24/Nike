import React from "react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return <div className="flex justify-center items-center flex-col">
    <img src={imgURL} alt="customer" className=" rounded-full object-cover w-[120px] h"/>
  </div>;
};

export default ReviewCard;
