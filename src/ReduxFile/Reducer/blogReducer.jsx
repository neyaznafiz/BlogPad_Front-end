import { LOAD_BLOG } from "../ActionTypes/actionTypes";

const initialState = {
  blog: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG: {
      return {
        ...state,
        blogs: action.payload,
      };
    }
    default:
      return state;
  }
};
