import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
export default function SkinCarePostCard({ image, date, description }) {
  return (
    <Stack
      w="330px"
      h="450px"
      align="center"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      borderRadius={6}
    >
      <Image borderTopRadius={4} src={image} alt="" />
      <Box align="center" padding={2}>
        <Text fontSize="14px">{date}</Text>
        <Text fontSize="18px">{description}</Text>
      </Box>
    </Stack>
  );
}
