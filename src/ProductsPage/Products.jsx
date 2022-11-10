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
      formattedPrice: "$175",
      reviewCount: "(3639)",
      rating: 4.5
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/ENG010-What-sIncluded-570x570.png?context=bWFzdGVyfGltYWdlc3wxODU2NXxpbWFnZS9wbmd8aW1hZ2VzL2g5YS9oNjUvMTQ5NjkwODY1NDE4NTQucG5nfGNlNDBkMDdkYzlkMDFmZDQ1MDg4ZDFmMDA0MmUzYzc2NjgwNmQ3ZDgxNWExYmY3YWRmYzcwYzYyOWY3NTkyZmQ",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "R+F Instant Targeted Firming Gel™",
      description:
        "Multi-targeted skincare treatment that instantly and visibly firms, tightens + smooths.",
      formattedPrice: "$105",
      reviewCount: "(674)",
      rating: 3.3
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "REDEFINE Regimen",
      description:
        "Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles.  ",
      formattedPrice: "$220",
      reviewCount: "(7881)",
      rating: 4.7
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "REDEFINE Multi-Function Eye Cream",
      description:
        "Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet.  ",
      formattedPrice: "$70",
      reviewCount: "(10283)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/AAAPS01-Regimen-Explainer-AMP-MD-System-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODcyNnxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oNDEvMTQ2MDQwOTQ0MDY2ODYucG5nfGYyNGNkZTQ1ODc2Zjg3OGYzMjZjNDFmMTI4NTdmNzNkOWM0MmIzZTZhMzRkMDE0OTMwNjRkOTZiMDdiZTYyMjk",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      

      title: "REDEFINE AMP MD System",
      description:
        "Amp up your routine with micro-exfoliation + skin-fortifying serum. ",
      formattedPrice: "$227",
      reviewCount: "(932)",
      rating: 4.8
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/IRS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3w0NzYwNXxpbWFnZS9wbmd8aW1hZ2VzL2gzMy9oMmIvMTM3NTgzODU3MTcyNzgucG5nfDU3MDNlODNlMjk0MDZiYWEwODU1NTZhMDg3NDBkNTU4M2EwNGJiY2M1OTZmN2RlMWNlM2UwYmEyZDg5YzViNDM",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "REDEFINE Intensive Renewing Serum",
      description:
        "Wake up to vibrant skin! This serum empowers skin’s own renewing process.  ",
      formattedPrice: "$102",
      reviewCount: "(4221)",
      rating: 4.8
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2hkMS9oM2MvMTQ1MzIxNjY2MTUwNzAucG5nfGZlMDQ0NDRlMjczNDFlZjdkYWVmNjkwZWY4MDAwM2I4MjMwZGZiMzU3ZTViZGNlYjllNzBiZjAwY2FlZDU5NzA",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "R + F Active Hydration Serum",
      description:
        "Instantly boosts hydration levels by 200% and locks in moisture on skin's surface.   ",
      formattedPrice: "$112",
      reviewCount: "(9393)",
      rating: 4.8
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/ENHEY15-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wxODYwNnxpbWFnZS9wbmd8aW1hZ2VzL2g3YS9oMzQvMTU4ODg3MjEwNTE2NzgucG5nfGRlZjRmZTBjNjIzMTc3Y2M3YjdhNjEyMzg3NmI3MjgwMDZhODg0Y2I1OGIzYWRhZWE1Y2JlODIyZjhmNmFmODA",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "Active Hydration Bright Eye Complex",
      description:
        "Reduces visible dark circles and under-eye puffiness over time for younger-looking eyes.   ",
      formattedPrice: "$72",
      reviewCount: "(6479)",
      rating: 4.5
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "Rodan + Fields Active Hydration Body Replenish",
      description:
        "Instantly and continuously hydrates the body for younger-looking, younger-acting skin.   ",
      formattedPrice: "$66",
      reviewCount: "(7471)",
      rating: 4.9
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/ENPS125-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODU1NXxpbWFnZS9wbmd8aW1hZ2VzL2gyNi9oZjgvMTQ1MzIxNjc2MzA4NzgucG5nfGM0YTc0NjM0YWIzM2QxZDZlOTc0NTdmYjA4M2EyNDA5NGJhODg3ZDQwMGJjZjdiMTZlYTI2MjYwNjI2Y2JhZGE",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "Rodan + Fields Enhancements Micro-Dermabrasion Paste",
      description:
        "Exfoliates away dead skin cells for smoother, vibrant-looking skin after just one use.   ",
      formattedPrice: "$83",
      reviewCount: "(4702)",
      rating: 4.8
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "REVERSE Regimen",
      description:
        "Brightens + refines skin’s looking surface while tackling the look of fine lines + dark spots. ",
      formattedPrice: "$195",
      reviewCount: "(2123)",
      rating: 4
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "UNBLEMISH Regimen",
      description:
        "Helps clear and prevent adult acne while visibly minimizing pores + fine lines.  ",
      formattedPrice: "$190",
      reviewCount: "(563)",
      rating: 4.4
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "SOOTHE Regimen",
      description:
        "Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier.  ",
      formattedPrice: "$185",
      reviewCount: "(867)",
      rating: 4.3
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/RCRG001-1168x1168-desktop-v2.jpg?context=bWFzdGVyfGltYWdlc3w2NDg0NHxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDNjLzEwMzc5OTY0MTg2NjU0LmpwZ3wxMjMzZTIzMTJhYjY2ZjU5Y2UwMjViZjM5MWY4NzFmOGY3NmY4M2RiZTY4NTNlZTc5ZDQ0NGUwZjE0MGJiYTk5",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "RECHARGE Regimen",
      description:
        "Defends against lifestyle that leave skin looking dull, blotchy + dehydrated.   ",
      formattedPrice: "$134",
      reviewCount: "(775)",
      rating: 4.6
    },
    {
      imageUrl:
        "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
      imageAlt: "Rear view of modern home with pool",
      type: "Best Seller",
      
      title: "SPOTLESS Regimen",
      description:
        "For teens + young adults: Clears existing blemishes + prevents new ones from forming.  ",
      formattedPrice: "$89",
      reviewCount: "(1655)",
      rating: 4.6
    },
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