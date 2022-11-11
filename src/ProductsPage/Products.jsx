import { Button, Box, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./products.css";
import React, { useRef } from "react";
import data from "./product.json"



function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box className="container"  >
      {data.products.map((e) => (
        <Box
          border="0px"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image margin="auto" width="60%" src={e.imageUrl} alt={e.imageAlt} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {e.type}
              </Box>
            </Box>

            <Box
              textAlign="left"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {e.title}
            </Box>
            <Box textAlign="left">{e.description}</Box>

            <Box textAlign="left">
              {e.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < e.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {e.reviewCount}
              </Box>
            </Box>
          </Box>
          <Button ref={btnRef} onClick={onOpen} border="1px" width="100%">

            Add To Bag
          </Button>
          <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Bag</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button color='white' bgColor="black" variant='outline' mr={3} onClick={onClose}>
              Review Bag & Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Box>
      ))}
    </Box>
  );
}
export default Product;