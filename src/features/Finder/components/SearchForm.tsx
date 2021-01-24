import {
  Flex,
  Heading,
  Input,
  Select,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import useFinder from "state/finder/useFinder";

const SearchForm: React.FC = () => {
  const { finder, setSearch } = useFinder();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const bgInputs = useColorModeValue("white", "gray.700");

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    setSearch(name, status);

    e.preventDefault();
  };

  return (
    <Flex flexDirection="column" alignItems="center" py={12}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        ¿Qué personaje estas buscando?
      </Heading>

      <Flex
        flexDirection={["column", "row"]}
        w={["full", "auto"]}
        as="form"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Escribe un nombre"
          bg={bgInputs}
          focusBorderColor="teal.400"
          size="lg"
          mr={[0, 4]}
          mb={[4, 0]}
          onChange={(e) => setName(e.target.value)}
        />

        <Select
          placeholder="Selecciona un estado"
          bg={bgInputs}
          focusBorderColor="teal.400"
          size="lg"
          mr={[0, 4]}
          mb={[4, 0]}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="alive">Con vida</option>
          <option value="dead">Sin vida</option>
          <option value="unknown">No identificado</option>
        </Select>

        <Button
          ml="auto"
          colorScheme="teal"
          size="lg"
          minW={24}
          isLoading={finder.loading}
          type="submit"
        >
          Buscar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SearchForm;
