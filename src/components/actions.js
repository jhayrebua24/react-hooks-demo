import { SET_LOADING, SET_POST_LIST } from "./constants";

export const actionSetLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const actionSetPostList = (payload) => ({
  type: SET_POST_LIST,
  payload,
});
