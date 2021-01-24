import { useContext, useMemo } from "react";
import { FinderContext } from "./context";
import { SET_SEARCH, SET_SEARCH_LOADING } from "./types";

function useFinder() {
  const context = useContext(FinderContext);

  const { setSearch, setSearchLoading } = useMemo(() => {
    const setSearch = (name: string, status: string) => {
      context.dispatch({
        type: SET_SEARCH,
        payload: { name, status },
      });
    };

    const setSearchLoading = (enable: boolean) => {
      context.dispatch({ type: SET_SEARCH_LOADING, payload: enable });
    };

    return {
      setSearch,
      setSearchLoading,
    };

    // eslint-disable-next-line
  }, []);

  return {
    setSearch,
    setSearchLoading,
    finder: context.state,
  };
}

export default useFinder;
