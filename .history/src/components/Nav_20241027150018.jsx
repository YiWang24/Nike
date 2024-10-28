import React from "react";
import { headerLogo } from "../assets/image";
import {h}
const Nav = () => {
  return (
    <header className="">
      <nav></nav>
      <a href="/">
        <img src={headerLogo} />
        Home
      </a>
      <nav></nav>
    </header>
  );
};

export default Nav;
