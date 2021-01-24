import fetcher from "utils/fetcher";
import getCharactersQuery from "../graphql/queries/getCharactersQuery";
import { charactersDataType } from "../graphql/types/charactersDataType";
import { charactersVarsType } from "../graphql/types/charactersVarsType";

async function getCharacters(vars: charactersVarsType) {
  const { characters } = await fetcher.request<
    charactersDataType,
    charactersVarsType
  >(getCharactersQuery, vars);

  return characters;
}

export default getCharacters;
