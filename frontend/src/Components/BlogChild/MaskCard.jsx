import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
export default function MaskCard({ image, title, description }) {
  return (
    <Stack>
      <Image h="250px" src={image} alt="error" />
      <Text
        borderBottom="1px solid transparent"
        _hover={{ borderBottom: "1px", cursor: "pointer" }}
      >
        {title}
      </Text>
      <Text>{description}</Text>
    </Stack>
  );
}
