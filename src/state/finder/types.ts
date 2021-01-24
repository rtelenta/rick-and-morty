export const SET_SEARCH = "SET_SEARCH";
export const SET_SEARCH_STATUS = "SET_SEARCH_STATUS";
export const SET_SEARCH_LOADING = "SET_SEARCH_LOADING";

type setSearchAction = {
  type: typeof SET_SEARCH;
  payload: { name: string; status: string };
};

type setSearchLoadingAction = {
  type: typeof SET_SEARCH_LOADING;
  payload: boolean;
};

export type finderActionsTypes = setSearchAction | setSearchLoadingAction;
