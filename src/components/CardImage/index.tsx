import {
  Box,
  Image,
  Text,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";

import PlaceholderImg from "assets/imgs/placeholder-img.png";

interface ICardImageProps {
  title: string;
  description: string;
  image: string;
  badge: React.ReactNode;
}

const CardImage: React.FC<ICardImageProps> = ({
  title,
  description,
  image,
  badge,
}) => {
  const shadow = useColorModeValue("lg", "dark-lg");
  const descriptionColor = useColorModeValue("cyan.600", "cyan.200");

  return (
    <Box position="relative">
      <Box position="relative">
        <Box
          position="absolute"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="docked"
        >
          {badge}
        </Box>

        <AspectRatio ratio={4 / 4}>
          <Image
            w="full"
            objectFit="cover"
            src={image}
            alt={title}
            rounded="lg"
            overflow="hidden"
            boxShadow={shadow}
            fallbackSrc={PlaceholderImg}
            bg="gray.400"
          />
        </AspectRatio>
      </Box>

      <Box mt={6} position="relative" textAlign="center">
        <Text fontSize="lg" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color={descriptionColor}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default CardImage;
