import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/blogpad-Logo.png";
import Lottie from "lottie-react";
import signInIcon from "../../Assets/Icon/signin-icon-.json";

export function Navbar() {
  const activeClass = "text-primary border-b border-primary";

  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-end py-2 fixed left-[5%] right-[7%] pt-[2%] z-[999] ">
      <div className="relative w-80">
        <Link to="/" className="absolute -left-9 -bottom-10">
          <img src={logo} alt="BlogPad Logo" className="w-80" />
        </Link>
      </div>

      <div className="flex items-end gap-x-5 uppercase tracking-wide text-lg">
        <div className="space-x-5">
          <Link
            to="/"
            className={`${
              pathname == "/" && activeClass
            } hover:text-xl transition-all duration-300`}
          >
            Home
          </Link>
          <Link
            to="/all-blogs"
            className={`hover:text-xl transition-all duration-300 ${
              pathname == "/all-blogs" && activeClass
            }`}
          >
            All Bloges
          </Link>
          <Link
            to="/dashboard"
            className={`${
              pathname == "/dashboard" && activeClass
            } hover:text-xl transition-all duration-300`}
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className={`${
              pathname == "/about" && activeClass
            } hover:text-xl transition-all duration-300`}
          >
            About
          </Link>
        </div>
        <div>
          <Link to="/sign-in">
            <Lottie
              animationData={signInIcon}
              className="h-[32px] w-[32px] mb-1 rounded-full hover:scale-125 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
