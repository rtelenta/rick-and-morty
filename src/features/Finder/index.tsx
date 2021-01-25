import { Box } from "@chakra-ui/react";
import BackToTop from "components/BackToTop";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

const Finder: React.FC = () => {
  return (
    <Box data-testid="Finder">
      <SearchForm />
      <CharacterList />
      <BackToTop />
    </Box>
  );
};

export default Finder;
