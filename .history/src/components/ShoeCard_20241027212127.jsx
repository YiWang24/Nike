import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () =>{
        if(bigShoeImage != imgURL.bigShoe){
            changeBigShoeImage(imgURL)
    }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      123
    </div>
  );
};

export default ShoeCard;
