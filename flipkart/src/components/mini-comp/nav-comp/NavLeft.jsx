import React from "react";
import { Link } from "react-router-dom";

function NavLeft() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="./flipkart.svg" className="w-10 h-10" />
      <h1 className="text-xl max-sm:hidden">flipkart</h1>
    </Link>
  );
}

export default NavLeft;
