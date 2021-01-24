import { Box } from "@chakra-ui/react";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

const Finder: React.FC = () => {
  return (
    <Box>
      <SearchForm />
      <CharacterList />
    </Box>
  );
};

export default Finder;
