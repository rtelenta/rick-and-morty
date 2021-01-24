import { Box } from "@chakra-ui/react";
import Header from "components/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header />

      <Box mx="auto" maxW="6xl" py={8} px={[4, 8]}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
