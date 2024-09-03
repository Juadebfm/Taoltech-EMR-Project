import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-24 py-2">
      <span className="font-bold w-[33.3%] text-cardheading">Logo</span>

      <ul className="flex items-center justify-center gap-8 w-[33.3%]">
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

      <Button buttonText="Request A Demo" className="ml-auto" />
    </div>
  );
}

export default Navbar;
