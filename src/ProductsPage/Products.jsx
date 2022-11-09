import { Button, Box, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./products.css";
import React, { useRef } from "react";


// function DrawerExample() {
 

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const property = [
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "R + F Lash Boost",
      description:
        "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes. ",
      formattedPrice: "$155",
      reviewCount: "(8603)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      title: "Total RF Serum",
      description:
        "Our most comprehensive anti-aging serum to revitalize and address all key signs of aging. ",
      formattedPrice: "$155",
      reviewCount: "(8603)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "R + F Lash Boost",
      description:
        "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes. ",
      formattedPrice: "$155",
      reviewCount: "(8603)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "R + F Lash Boost",
      description:
        "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes. ",
      formattedPrice: "$155",
      reviewCount: "(8603)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "R + F Lash Boost",
      description:
        "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes. ",
      formattedPrice: "$155",
      reviewCount: "(8603)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      

      title: "R + F Lash Boost",
      description:
        "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes. ",
      formattedPrice: "$155",
      reviewCount: "(8603)",
      rating: 4.6
    }
  ];

  return (
    <Box className="container"  >
      {property.map((e) => (
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
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Box>
      ))}
    </Box>
  );
}
export default Product;