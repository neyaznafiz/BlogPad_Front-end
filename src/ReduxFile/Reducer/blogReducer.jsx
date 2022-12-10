import { LOAD_BLOG, LOAD_SINGLE_BLOG_BY_ID } from "../ActionTypes/actionTypes";

const initialState = {
  blog: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    //   get all blog
    case LOAD_BLOG: {
      return {
        ...state,
        blogs: action.payload,
      };
    }

    // get blog details by id
    case LOAD_SINGLE_BLOG_BY_ID: {
      return {
        ...state,
        blogs:  state.blogs.find((blog) => blog._id === action.payload),
      };
    }
    default:
      return state;
  }
};
