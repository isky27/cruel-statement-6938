import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
export default function RfDiffCard({ image, title, description }) {
  return (
    <Box width={"580px"} textAlign="center">
      <Image src={image} />
      <Text padding={2} fontSize="24px">
        {title}
      </Text>
      <Text fontSize="17.5px" textAlign="center">
        {description}
      </Text>
    </Box>
  );
}
