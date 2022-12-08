import React from "react";
import auth from "../../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const SocialAuthentication = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <div className=" py-2 px-4 flex lg:justify-between justify-center lg:gap-0 gap-16 items-center social-shadow">
        <div className="text-primary hover:scale-125 transition-all duration-300">
          <button
            onClick={()=> signInWithGoogle()}
            className="lg:text-4xl text-6xl"
          >
            <AiFillGoogleCircle className="" />
          </button>
        </div>

        <h2 className="font-semibold hidden lg:block text-gray-700 tracking-wider">
          YOU CAN GO WITH SOCIAL ACCOUNT
        </h2>

        <div className="text-primary hover:scale-125 transition-all duration-300">
          <button className="lg:text-3xl text-5xl">
            <BsFacebook className="" />
          </button>
        </div>
      </div>
    </div>
  );
};
