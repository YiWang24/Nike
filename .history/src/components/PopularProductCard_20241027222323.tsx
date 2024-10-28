import React from "react";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex flex-col gap-2"></div>
    </div>
  );
};

export default PopularProductCard;
