import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[35px] sm:px-24 py-2">
      <span className="w-auto font-bold sm:w-[33.3%] text-cardheading">Logo</span>

      <ul className="hidden sm:flex items-center justify-center gap-8 w-auto sm:w-[33.3%]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>

      <Button buttonText="Request A Demo" className="ml-0 sm:ml-auto w-auto px-6" />
    </nav>
  );
}

export default Navbar;
