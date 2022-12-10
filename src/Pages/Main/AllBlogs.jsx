import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "@/Components/BlogCard";
import { fetchBlogs } from "@/ReduxFile/Thunk";

export const AllBlogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content;
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
