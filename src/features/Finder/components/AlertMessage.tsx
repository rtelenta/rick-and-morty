import {
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PlaceholderImg from "assets/imgs/placeholder-img.png";
import PlaceholderDarkImg from "assets/imgs/placeholder-img-dark.png";

interface IAlertMessageProps {
  actions?: React.ReactNode;
}

const AlertMessage: React.FC<IAlertMessageProps> = ({ children, actions }) => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("teal.600", "teal.200");

  return (
    <Flex my={16} flexDirection="column" alignItems="center">
      <Text
        fontSize="lg"
        mb={4}
        textAlign="center"
        fontWeight="bold"
        color={textColor}
      >
        {children}
      </Text>

      {actions}

      <Image
        src={PlaceholderDarkImg}
        alt="R and M"
        display={colorMode === "light" ? "block" : "none"}
        opacity={0.2}
      />

      <Image
        src={PlaceholderImg}
        alt="R and M"
        display={colorMode === "dark" ? "block" : "none"}
      />
    </Flex>
  );
};

export default AlertMessage;
