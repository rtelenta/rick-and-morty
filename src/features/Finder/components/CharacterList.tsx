import React, { useEffect } from "react";
import Badge from "components/Badge";
import CardImage from "components/CardImage";
import LoaderCards from "components/LoaderCards";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useCharacters from "../hooks/useCharacters";
import AlertMessage from "./AlertMessage";
import CharactersGrid from "./CharactersGrid";
import { Frown, Meh, Smile } from "react-feather";
import useFinder from "state/finder/useFinder";

const CharacterList: React.FC = () => {
  const {
    finder: { name, status },
    setSearchLoading,
  } = useFinder();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useCharacters({ name, status });

  const infiniteRef = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    onLoadMore: fetchNextPage,
  });

  const badges = {
    unknown: {
      color: "gray.400",
      statusText: "Desconocido",
      icon: <Meh size={18} />,
    },
    Alive: {
      color: "green.400",
      statusText: "Vivo",
      icon: <Smile size={18} />,
    },
    Dead: {
      color: "red.400",
      statusText: "Muerto",
      icon: <Frown size={18} />,
    },
  };

  useEffect(() => setSearchLoading(isLoading), [isLoading, setSearchLoading]);

  if (isLoading) {
    return (
      <CharactersGrid>
        <LoaderCards />
      </CharactersGrid>
    );
  }

  if (isError) {
    return <AlertMessage>Personaje no encontrado</AlertMessage>;
  }

  return (
    <CharactersGrid
      gridRef={infiniteRef as React.MutableRefObject<HTMLDivElement>}
    >
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.results.map(({ name, id, species, image, status }) => {
            const { color, icon, statusText } = badges[status];

            return (
              <CardImage
                key={id}
                title={name}
                description={species}
                image={image}
                badge={
                  <Badge bg={color} icon={icon}>
                    {statusText}
                  </Badge>
                }
              />
            );
          })}
        </React.Fragment>
      ))}

      {isFetchingNextPage && <LoaderCards />}
    </CharactersGrid>
  );
};

export default CharacterList;
