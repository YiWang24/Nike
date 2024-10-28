import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () =>{
        if(bigShoeImage != imgURL.big){
            changeBigShoeImage("")
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
