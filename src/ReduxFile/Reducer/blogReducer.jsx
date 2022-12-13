import {
  LOAD_START,
  LOAD_BLOG,
  LOAD_SINGLE_BLOG_BY_ID,
} from "../ActionTypes/actionTypes";

const initialState = {
  loading: true,
  blog: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // loading
    // case LOAD_START: {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // }

    //   get all blog
    case LOAD_BLOG: {
      return {
        ...state,
        // loading: false,
        blogs: action.payload,
      };
    }

    // get blog details by id
    case LOAD_SINGLE_BLOG_BY_ID: {
      return {
        ...state,
        loading: false,
        blogs: state.blogs.find((blog) => blog._id === action.payload),
      };
    }
    default:
      return state;
  }
};
