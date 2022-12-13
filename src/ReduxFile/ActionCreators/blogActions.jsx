import { LOAD_BLOG, LOAD_SINGLE_BLOG_BY_ID, LOAD_START } from "../ActionTypes/actionTypes";

// loading
// export const loadStart = () => {
//   return {
//     type: LOAD_START,
//   };
// };

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
