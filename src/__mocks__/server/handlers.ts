import { charactersDataType } from "features/Finder/graphql/types/charactersDataType";
import { charactersVarsType } from "features/Finder/graphql/types/charactersVarsType";
import { graphql } from "msw";

export const handlers = [
  graphql.query<charactersDataType, charactersVarsType>(
    "getCharacters",
    (req, res, ctx) => {
      return res(
        ctx.data({
          characters: {
            info: {
              next: 2,
            },
            results: [
              {
                id: "1",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                name: "Mock Rick Sanchez",
                species: "Human",
                status: "Alive",
              },
            ],
          },
        })
      );
    }
  ),
];
