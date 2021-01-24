import { SET_SEARCH, SET_SEARCH_LOADING, finderActionsTypes } from "./types";

export const initState = {
  name: "",
  status: "",
  loading: false,
};

export const FinderReducer = (
  state: typeof initState,
  action: finderActionsTypes
) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      };
    case SET_SEARCH_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
