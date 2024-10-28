import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="">
      {label} <img src={iconUrl}/>
    </button>
  );
};

export default Button;
