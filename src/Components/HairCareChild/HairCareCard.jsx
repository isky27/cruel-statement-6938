import { StarIcon } from "@chakra-ui/icons";
import {
  Stack,
  Flex,
  Image,
  Text,
  Spacer,
  Box,
  Button
} from "@chakra-ui/react";
import React from "react";
const rating = true;
export const HairCareCard = ({
  id,
  image,
  title,
  description,
  price,
  value,
  rating
}) => {
  console.log(rating);
  return (
    <Stack align="center">
      <Image w="240px" src={image} alt="error" />
      <Box textAlign="left">
        <Text fontWeight="semibold" lineHeight={2}>
          {title}
        </Text>
        <Text fontSize="14.5px">{description}</Text>
        <Flex lineHeight={2}>
          <Text fontSize="17px" mr={1} fontWeight="semibold">
            ${price}
          </Text>
          <Text fontSize="13px" mt={1.5}>
            (${value})
          </Text>
        </Flex>
        {rating.rating ? (
          <Flex>
            <Rating />5<Text color={"gray"}>({rating.no_of_person})</Text>
          </Flex>
        ) : (
          ""
        )}
        <Box position="absolute" top="90%" w="100%">
          <Button
            w="100%"
            colorScheme="black"
            variant="outline"
            _hover={{ bg: "gray", color: "white" }}
          >
            ADD TO BAG
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};
const Rating = () => {
  return (
    <Flex pt={1} mr={1}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </Flex>
  );
};
