import React from "react";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col
  gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm ">
          Discover stylish Nick arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="View details" />
      </div>
    </section>
  );
};

export default SuperQuality;
