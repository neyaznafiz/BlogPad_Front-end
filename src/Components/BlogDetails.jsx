import React from "react";
import Lottie from "lottie-react";
import blogIcon from "@/Assets/Icon/blog-icon.json";

export function BlogDetails({ blog }) {
  return (
    <div className="side-p shadow-2xl bdr">
      <Lottie animationData={blogIcon} className="w-72 mx-auto" />
      <div>
        <div>
          <h1 className="text-3xl ml-2 py-2 uppercase">{blog.title}</h1>
        </div>
        <p className=" p-3 ">{blog.details}</p>
      </div>
    </div>
  );
}
