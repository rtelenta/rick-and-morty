import { Grid, Box } from "@chakra-ui/react";

interface ICharactersGridProps {
  gridRef?: React.RefObject<HTMLDivElement>;
}

const CharactersGrid: React.FC<ICharactersGridProps> = ({
  children,
  gridRef,
}) => {
  return (
    <Box my={16}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        columnGap={12}
        rowGap={20}
        ref={gridRef}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default CharactersGrid;
