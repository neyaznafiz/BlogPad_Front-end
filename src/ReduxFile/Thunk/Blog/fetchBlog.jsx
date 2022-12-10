import { loadBlogs } from "@/ReduxFile/ActionCreators";
import { data } from "autoprefixer";
// import { loadBlogs } from "";

export const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://blogpadserver-production.up.railway.app/all-blogs"
    );
    const data = await res.json();

    if (data.length) {
      dispatch(loadBlogs(data));
    }
  };
};
