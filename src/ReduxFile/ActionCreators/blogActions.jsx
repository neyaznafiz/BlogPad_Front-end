import { LOAD_BLOG, LOAD_SINGLE_BLOG_BY_ID } from "../ActionTypes/actionTypes";

// get all blogs
export const loadBlogs = (data) => {
  return {
    type: LOAD_BLOG,
    payload: data,
  };
};

// get blog details by id
export const getBlogDetailsById = (id) => {
  return {
    type: LOAD_SINGLE_BLOG_BY_ID,
    payload: id,
  };
};
