import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="">
      {label} <img src={iconUrl} alt="arrow right icon" className="ml-2"/>
    </button>
  );
};

export default Button;
