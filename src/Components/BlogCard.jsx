import React from "react";
import Lottie from "lottie-react";
import blogIcon from "@/Assets/Icon/blog-icon.json";

export const BlogCard = ({ blog }) => {
  return (
    <div className="w-96 h-[500px] shadow-2xl">
      <Lottie animationData={blogIcon} className="w-44 mx-auto" />
      <div className="h-[280px]">
        <div>
          <h1 className="text-2xl text-center py-2 uppercase">{blog.title}</h1>
        </div>
        <p className=" p-3 ">{blog.details?.slice(0, 350)}...</p>
      </div>
      <div className="relative h-[40px]">
        <button className="text-lg text-[#404041] font-semibold hover:text-primary transition-all duration-300 ml-2 absolute bottom-0 right-4">
          Read More...
        </button>
      </div>
    </div>
  );
};
