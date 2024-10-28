import React from "react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return <div className="flex justify-center items-center flex-col">
    <img src={imgURL} alt="customer" className="w-24 h-24 rounded-full"/>
  </div>;
};

export default ReviewCard;
