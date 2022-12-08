import React, { useRef } from "react";
// import auth from "../../../Firebase/firebase.init";
// import {
//   useCreateUserWithEmailAndPassword,
//   useUpdateProfile,
// } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { SocialAuthentication } from "./SocialAuthentication";

export const SignUp = () => {
  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

  // const nameRef = useRef();
  // const emailRef = useRef();
  // const passRef = useRef();

  // const handleSignUp = async (event) => {
  //   event.preventDefault();
  //   await createUserWithEmailAndPassword(
  //     nameRef.current.value,
  //     emailRef.current.value,
  //     passRef.current.value
  //   );

  //   await updateProfile({ displayName: nameRef.current.value });
  // };

  return (
    //
    <div className="bg-[url(https://i.ibb.co/5s19Mhr/ath-banner-hd-optimized.jpg)] bg-cover bg-center bg-no-repeat flex justify-around">
      <div className=" "></div>
      <div
        className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
        data-aos="zoom-out"
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcb851] to-[#cf9c50] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl sm:min-w-[600px]"></div>
          <div
            className="relative px-4 py-10 bg-white shadow-lg sm:rounded-2xl sm:p-20 sm:min-w-[600px]"
            data-aos="zoom-in"
          >
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Registration Here</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form>
                    {/*name  */}
                    <div
                      className="relative"
                      data-aos="flip-down"
                      data-aos-delay="200"
                    >
                      <input
                        id="name"
                        // ref={nameRef}
                        name="name"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Your Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Your Name
                      </label>
                    </div>

                    {/* email */}
                    <div
                      className="relative my-2"
                      data-aos="flip-down"
                      data-aos-delay="200"
                    >
                      <input
                        id="email"
                        // ref={emailRef}
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>

                    {/* password */}
                    <div
                      className="relative"
                      data-aos="flip-down"
                      data-aos-delay="200"
                    >
                      <input
                        id="password"
                        // ref={passRef}
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>

                    <div
                      className="relative mt-5"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <input
                        type="submit"
                        value="Register"
                        className="bg-primary text-white px-8 py-1 hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  </form>

                  <div
                    className="flex gap-x-2 justify-end border-b px-1 font-semibold"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <h2>Already have an account ?</h2>
                    <Link to="/sign-in" className="text-primary">
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>

              <SocialAuthentication />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
