import { Skeleton, AspectRatio } from "@chakra-ui/react";

const LoaderCards: React.FC = () => {
  return (
    <>
      {Array.from(Array(4).keys()).map((pos) => (
        <AspectRatio key={pos} ratio={4 / 4}>
          <Skeleton height="full" />
        </AspectRatio>
      ))}
    </>
  );
};

export default LoaderCards;
