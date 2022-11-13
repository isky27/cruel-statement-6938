import React, { useContext } from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  HStack,
  Spacer,
  Grid,
  Heading,
} from "@chakra-ui/react";
import Rating from "./Cart-Trial/Rating";
import { Cartcontext } from "../utilis/Context";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cartcontext);
  const {
    imageUrl,
    title,
    formattedPrice,
    rating,
    inStock,
    fastDelivery,
    description,
  } = prod;
  let fd = "";
  if (fastDelivery) {
    fd = "Fast delivery available";
  } else {
    fd = "4 days delivery";
  }

  return (
    <Flex
      maxW="350"
      borderRadius="8"
      boxShadow="lg"
      backgroundColor="#fff"
      textAlign="center"
      direction="column"
      margin="auto"
    >
      <Image
        src={imageUrl}
        alt="card-img"
        objectFit="cover"
        borderRadius="5"
      ></Image>
      <Box marginTop="0.8em" marginBottom="0.8em" padding="4">
        <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
          {title}
        </Text>
        <Text fontWeight="semibold" lineHeight={2}>
          ${formattedPrice}
        </Text>
        <Text fontSize="14.5px" color="#737373" marginBottom="3">
          {description}
        </Text>

        <HStack spacing="1" w="10%" margin="auto" justifyContent="center">
          <Rating fontSize="13px" mt={1.5} rating={rating} />
        </HStack>
      </Box>
      <Spacer />
      <Box padding="3">
        {cart.some((p) => p.id === prod.id) ? (
          <Button
            marginTop="3"
            w="100%"
            colorScheme="red"
            onClick={() =>
              dispatch({
                type: "remove",
                payload: prod,
              })
            }
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            marginTop="3"
            w="100%"
            disabled={inStock === 0}
            colorScheme="black"
            variant="outline"
            _hover={{ bg: "gray", color: "white" }}
            onClick={() =>
              dispatch({
                type: "add",
                payload: prod,
              })
            }
          >
            {inStock === 0 ? "Out of stock" : "Add to cart"}
          </Button>
        )}
      </Box>
    </Flex>
    //==============================================
  );
}
export default SingleProduct;
