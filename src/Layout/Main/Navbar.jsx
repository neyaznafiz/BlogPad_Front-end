import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/blogpad-Logo.png";
import Lottie from "lottie-react";
import signInIcon from "../../Assets/Icon/signin-icon-.json";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdLogOut } from "react-icons/io";

export function Navbar() {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const activeClass = "text-primary border-b border-primary";
  const { pathname } = useLocation();

  return (
    <div
      className={`flex justify-between items-end py-2 fixed left-[4.9%] right-[6.6%] pt-[2%] z-[999] ${
        pathname === "/sign-in"
          ? "bg-gradient-to-r from-[#D8D8D8] to-[#EAEAEA]"
          : "bg-secondary"
      } ${
        pathname === "/sign-up"
          ? "bg-gradient-to-r from-[#D8D8D8] to-[#EAEAEA]"
          : "bg-secondary"
      } `}
    >
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
          {!user ? (
            <Link to="/sign-in">
              <Lottie
                animationData={signInIcon}
                className="h-[32px] w-[32px] mb-1 rounded-full hover:scale-125 transition-all duration-300"
              />
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className=" flex items-center gap-x-1 hover:text-xl transition-all duration-300"
            >
              <IoMdLogOut className="text-xl" /> SIGN-OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
