import React from "react";
import { useForm } from "react-hook-form";

export const AddBlog = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-secondary h-full shadow-2xl rounded-lg p-10">
      <div className="flex justify-center items-center h-full ">
        <form className="shadow-lg p-10 rounded-md flex flex-col gap-3 justify-between bg-white">
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="border w-[600px] h-14 outline-none py-1 px-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="details">
              Write Your Blog Here
            </label>
            <textarea
              type="text"
              id="details"
              {...register("details")}
              className="border  w-[600px] h-96 outline-none py-1 px-2"
            />
          </div>

          <div className="flex justify-end items-center w-full">
            <button
              className=" px-5 py-1 w-full bg-primary font-semibold text-white text-lg disabled:bg-gray-500 hover:text-xl transition-all duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
