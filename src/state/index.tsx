import ChakraUiProvider from "./chakra/ChakraUiProvider";
import QueryProvider from "./query/QueryProvider";
import { FinderProvider } from "./finder/context";

const AppProvider: React.FC = ({ children }) => {
  return (
    <QueryProvider>
      <ChakraUiProvider>
        <FinderProvider>{children}</FinderProvider>
      </ChakraUiProvider>
    </QueryProvider>
  );
};

export default AppProvider;
