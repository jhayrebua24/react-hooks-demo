import { REMOVE_POST, SET_LOADING, SET_POST_LIST } from "./constants";

export const PostReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_POST:
      return {
        ...state,
        list: state.list.filter((v) => v.id === action.payload),
      };

    case SET_POST_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
