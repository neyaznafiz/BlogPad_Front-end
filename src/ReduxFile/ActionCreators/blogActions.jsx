import { LOAD_BLOG } from "../ActionTypes/actionTypes";

export const loadBlogs = (data) => {
  return {
    type: LOAD_BLOG,
    payload: data,
  };
};
