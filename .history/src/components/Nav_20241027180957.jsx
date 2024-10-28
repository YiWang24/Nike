import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
          Home
        </a>
      </nav>
    </header>
  );
};

export default Nav;
