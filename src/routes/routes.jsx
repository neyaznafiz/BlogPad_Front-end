import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Dashboard, Main } from "../Layout";
import { About, AddBlog, AllBlogs, BlogList, Home, SignIn, SignUp } from "../Pages";
import { BlogDetails } from "../Components";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:ID",
        element: <BlogDetails />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/all-blogs/:ID",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

export default routes;
