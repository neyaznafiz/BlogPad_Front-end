import { getBlogDetailsById } from "@/ReduxFile/ActionCreators";

export const getBlogById = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://blogpadserver-production.up.railway.app/full-blog/${id}`
    );
      const data = res.json();
      
      dispatch(getBlogDetailsById(id))
  };
};
