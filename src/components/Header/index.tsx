import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
  Box,
} from "@chakra-ui/react";

import { Sun, Moon } from "react-feather";

import Logo from "assets/imgs/logo.png";
import RickNMorty from "assets/imgs/rick-n-morty.png";
import ToxicRickNMorty from "assets/imgs/toxic-rick-n-morty.png";

const Header: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  const bgHeader = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.900");

  const SwitchIcon = useColorModeValue(Moon, Sun);

  const reloadPage = () => window.location.reload();

  return (
    <Box bg={bgHeader} borderBottom="1px" borderColor={borderColor}>
      <Box mx="auto" maxW="6xl" py={4} px={[4, 8]}>
        <Flex justifyContent="space-between" alignItems="center">
          <IconButton
            aria-label="Rick and Morty logo"
            variant="ghost"
            _hover={{
              bg: "transparent",
            }}
            _active={{
              bg: "transparent",
            }}
            _focus={{
              outline: "none",
            }}
            icon={
              <Image
                src={Logo}
                alt="Rick and Morty"
                maxW={["150px", "200px"]}
              />
            }
            onClick={reloadPage}
          />

          <IconButton
            variant="ghost"
            color="current"
            size="xlg"
            onClick={toggleColorMode}
            aria-label={`Switch to ${text} mode`}
            _focus={{
              outline: "none",
            }}
            icon={
              <Flex alignItems="center" px={4}>
                <SwitchIcon />

                <Box maxW={["80px", "100px"]} ml={4}>
                  <Image
                    src={RickNMorty}
                    alt="R and M"
                    display={colorMode === "light" ? "block" : "none"}
                  />

                  <Image
                    src={ToxicRickNMorty}
                    alt="R and M"
                    display={colorMode === "dark" ? "block" : "none"}
                  />
                </Box>
              </Flex>
            }
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
