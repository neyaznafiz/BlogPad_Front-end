import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "@/Components/BlogCard";
import { fetchBlogs } from "@/ReduxFile/Thunk";
import Lottie from "lottie-react";
import loadingIcon from "@/Assets/loading.json"

export const AllBlogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  // console.log(blogs)
  const loading = useSelector((state) => state.blog.loading);
  // console.log(loading);
  const dispatch = useDispatch();
  let content;

  if (loading) {
    content = (
      <div className="w-screen -ml-28 mx-auto">
        <Lottie animationData={loadingIcon} className=" w-72 mx-auto" />
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (blogs?.length) {
    content = blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />);
  }

  return (
    <div className="side-p">
      <div className="my-7 text-center">
        <h1 className="text-3xl uppercase border-b-2 border-black pb-2">
          all blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center pb-20 mt-20">
        {content}
      </div>
    </div>
  );
};
