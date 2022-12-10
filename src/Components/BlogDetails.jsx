import React, { useEffect } from "react";
import Lottie from "lottie-react";
import blogIcon from "@/Assets/Icon/blog-icon.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "@/ReduxFile/Thunk";

export function BlogDetails() {
  const { ID } = useParams();

  const blog = useSelector((state) => state.blog.blogs);
  console.log(blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogById(ID));
  }, [dispatch]);

  return (
    <div className="side-p min-h-screen shadow-2xl">
      <Lottie animationData={blogIcon} className="w-72 mx-auto" />
        <div>
          <div>
            <h1 className="text-3xl ml-2 py-2 uppercase">{blog?.title}</h1>
          </div>
          <p className=" p-3 ">{blog?.details}</p>
        </div>
    </div>
  );
}
