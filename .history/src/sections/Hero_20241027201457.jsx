import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1 className="">
          <span>The New Arrivals</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nick arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL = {arrowRight/>
    </section>
  );
};

export default Hero;
