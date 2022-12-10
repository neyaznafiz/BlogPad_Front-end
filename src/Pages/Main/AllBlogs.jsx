import { fetchBlogs } from "../../ReduxFile/Thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "@/Components/BlogCard";

export function AllBlogs() {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

    let content;
    if (blogs?.length) {
        content = blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
    }

  return (
    <div className="side-p">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 mx-auto my-10">{content}</div>
    </div>
  );
}
