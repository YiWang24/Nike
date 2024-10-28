import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="">
      <nav></nav>
      <a href="/">
        <img src={headerLogo} alt="logo" />
        Home
      </a>
      <nav></nav>
    </header>
  );
};

export default Nav;
