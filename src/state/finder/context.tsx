import React, { createContext, Dispatch, useReducer } from "react";
import { finderActionsTypes } from "./types";
import { FinderReducer, initState } from "./reducer";

interface IFinderContext {
  state: typeof initState;
  dispatch: Dispatch<finderActionsTypes>;
}

export const FinderContext = createContext<IFinderContext>({
  state: initState,
  dispatch: () => null,
});

export const FinderProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(FinderReducer, initState);

  return (
    <FinderContext.Provider value={{ state, dispatch }}>
      {children}
    </FinderContext.Provider>
  );
};
