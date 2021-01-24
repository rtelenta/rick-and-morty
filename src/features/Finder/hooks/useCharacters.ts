import { useInfiniteQuery } from "react-query";
import getCharacters from "../services/getCharacters";

interface IUseCharacters {
  name: string;
  status: string;
}

function useCharacters({ name, status }: IUseCharacters) {
  const firstPage = 1;
  const queryKey = "characters";

  const charactersQuery = useInfiniteQuery(
    [queryKey, { name, status }],
    async ({ pageParam = firstPage, queryKey: [, { name, status }] }) =>
      getCharacters({ page: pageParam, name, status }),
    {
      getNextPageParam: (lastPage) => lastPage.info.next,
    }
  );

  return charactersQuery;
}

export default useCharacters;
