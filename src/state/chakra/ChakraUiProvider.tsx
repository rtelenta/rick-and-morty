import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraUiProvider: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default ChakraUiProvider;
