import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px">
      {label}
      <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
