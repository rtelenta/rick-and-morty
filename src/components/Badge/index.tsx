import { Flex, Box } from "@chakra-ui/react";

interface IBadgeProps {
  bg: string;
  icon: React.ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({ children, bg, icon }) => {
  return (
    <Flex
      data-testid="Badge"
      rounded="full"
      px={3}
      py={1}
      color="white"
      boxShadow="lg"
      fontSize="sm"
      textTransform="uppercase"
      bg={bg}
      alignItems="center"
    >
      <Box mr={1} whiteSpace="nowrap">
        {children}
      </Box>{" "}
      {icon}
    </Flex>
  );
};

export default Badge;
