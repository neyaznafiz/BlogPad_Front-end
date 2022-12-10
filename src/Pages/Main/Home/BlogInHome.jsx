import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "@/Components/BlogCard";
import { fetchBlogs } from "@/ReduxFile/Thunk";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import rightArrow from "../../../Assets/Icon/right-arrow.json";

export const BlogInHome = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content;
  if (blogs?.length) {
    content = [...blogs]
      .reverse()
      .slice(0, 3)
      .map((blog) => <BlogCard key={blog._id} blog={blog} />);
  }

  return (
    <div className="py-24">
      <div className="my-7 text-center">
        <h1 className="text-3xl uppercase border-b-2 border-black pb-2">
          latest blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center pb-20 mt-20">
        {content}
      </div>

      <div className="flex justify-end">
        <button className="border-b-2 border-black pr-6 uppercase text-xl hover:border-primary transition-all duration-300 hover:scale-105">
          <Link to="/all-blogs" className="flex items-center">
            <span className="-mb-1">see all blogs</span>
            <Lottie animationData={rightArrow} className="w-11" />
          </Link>
        </button>
      </div>
    </div>
  );
};
