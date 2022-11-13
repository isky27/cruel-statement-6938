import {
  AspectRatio,
  Box,
  Button,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import HomeCard from "./HomeChild/Home_Card";
import Haircare from "./HomeChild/Home_hair_care";

const Home = () => {
  return (
    <>
      {/* ============================================================== */}
      {/* Video section */}
      <SimpleGrid
        bg="rgb(138, 80, 128)"
        display="grid"
        gridTemplateColumns={["1fr", "0.9fr 1.1fr"]}
        spacing={4}
      >
        <Box p={10} color="white">
          <Text
            as="h2"
            fontSize={["18px", "24px", "28px"]}
            // border="2px solid red"
            p={2}
          >
            The best hair of your life starts at the root
          </Text>
          <Text
            as="p"
            // border="2px solid red"
            p={5}
            fontSize={["16px", "20px", "24px"]}
          >
            Rooted in skincare science, our Haircare Regimens, Smooth+ and
            Volume+ re-energize the scalp for healthier, stronger more beautiful
            hair, instantly and over time.
          </Text>
          <Button
            bg="white"
            variant="solid"
            margin="auto"
            p={4}
            color="black"
            marginTop="8"
          >
            SHOP NEW R+F HAIRCARE
          </Button>
        </Box>
        <Box p={4}>
          <AspectRatio maxW="560px" ratio={5 / 4}>
            <video autoPlay="" muted="" loop="" id="landing-video">
              <source
                src="https://www.rodanandfields.com/en-us/_ui/videos/dynamicupload/comp_00171016-desktop-en-us-15820196216862-1666850649393.mp4"
                type="video/mp4"
              />
            </video>
          </AspectRatio>
        </Box>
      </SimpleGrid>
      {/* ============================================================== */}
      {/* 3 Cards Section  */}
      <Stack
        direction="row"
        w="85%"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}
        magin="auto"
        border="0px"
        // bg="cyan.100"
        m="auto"
        p={10}
        spacing={8}
      >
        <Box ration={3 / 5} position="relative">
          {/* <AspectRatio ration={3 / 5} position="relative" > */}
          <Image
            src="https://www.rodanandfields.com/en-us/medias/HOL-Hair-Smooth-HP-Module-US-CAN-AUS2.jpg?context=bWFzdGVyfHJvb3R8NTY2MjZ8aW1hZ2UvanBlZ3xoYzAvaDExLzE1ODg5Mzg4NjM0MTQyLmpwZ3w1ZTMxZWJjNWE4YmQ2ZmM0NjEzMWQzOGVmYzA5MmIyNGRkOTAwMmJmNzQ4Y2M0ZjNhN2MwYTU5NTY5MWU4ZDA2"
            borderRadius="lg"
            objectFit="fill"
            h="100%"
          />
          <Box position="absolute" color="white" top="75%" left="10%">
            <Text fontSize="20px" fontWeight="550">
              SHOP HAIRCARE OFFERS
            </Text>
            <Text fontSize="24px" fontWeight="550">
              Holiday Specials + Free
            </Text>
            <Text fontSize="24px" fontWeight="550" lineHeight={0.5}>
              Gifts
            </Text>
          </Box>
          {/* </AspectRatio> */}
        </Box>
        <Box ration={3 / 5} position="relative">
          {/* <AspectRatio borderRadius="lg" ration={3 / 5} position="relative"> */}
          <Image
            src="https://www.rodanandfields.com/en-us/medias/HOL-Skincare-1-HP-Module-US-CAN-AUS2.jpg?context=bWFzdGVyfHJvb3R8NTQ4ODR8aW1hZ2UvanBlZ3xoNWEvaGQwLzE1ODg5Mzg4Njk5Njc4LmpwZ3w1ZTNjODZhYzM0NTM1N2M4MGViYjYyMWRkZmYyNDU3MGU5MDdkZGQxZDIyZWI4ZmQwYmI4ZjVjOGRmOTg0NDdl"
            borderRadius="lg"
            objectFit="fill"
            h="100%"
          />
          <Box position="absolute" color="white" top="75%" left="10%">
            <Text fontSize="20px" fontWeight="550">
              SHOP HOLIDAY SKIN
            </Text>
            <Text fontSize="24px" fontWeight="550">
              Skib Bestsellers + Free
            </Text>
            <Text fontSize="24px" fontWeight="550" lineHeight={0.5}>
              Gifts
            </Text>
          </Box>
          {/* </AspectRatio> */}
        </Box>
        <Box ration={3 / 5} position="relative">
          {/* <AspectRatio ration={3 / 5} position="relative"> */}
          <Image
            src="https://www.rodanandfields.com/en-us/medias/HOL-Skincare-2-HP-Module-US2.jpg?context=bWFzdGVyfHJvb3R8NjgyMzV8aW1hZ2UvanBlZ3xoNzcvaGEzLzE1ODg5Mzg4NzY1MjE0LmpwZ3xjMWM0YWNhZjIyMjg2OTgwODA5MzgyOWNlYzc5OTE5MDBhNjZiYWIzYTQ2NDI5ZTRmMTZjNmJhOTBjNTVmOGJm"
            borderRadius="lg"
            objectFit="fill"
            h="100%"
          />
          <Box position="absolute" color="white" top="75%" left="10%">
            <Text fontSize="20px" fontWeight="550">
              SHOP HOLIDAYS EYES
            </Text>
            <Text fontSize="24px" fontWeight="550">
              Eye Bestsellers + Free
            </Text>
            <Text fontSize="24px" fontWeight="550" lineHeight={0.5}>
              Gifts
            </Text>
          </Box>
          {/* </AspectRatio> */}
        </Box>
      </Stack>
      {/* ============================================================== */}
      {/* Find Consultant */}
      <Box w="100%" bg="whatsapp.100" p={5}>
        <Box
          w="80%"
          bg="white"
          m="auto"
          borderRadius="md"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
        >
          <Box>
            <Heading
              as="h2"
              p={5}
              textAlign="right"
              margin="auto"
              fontSize={["1.5rem", "2rem"]}
              marginTop={5}
            >
              need a skin or hair consultation?
            </Heading>
          </Box>
          <Box margin="auto" textAlign="left" p={5}>
            <List>
              <ListItem>
                <ListIcon />
                Get customized product recommendations
              </ListItem>
              <ListItem>
                <ListIcon />
                Learn more about our products
              </ListItem>
              <ListItem>
                <ListIcon />
                Receive ongoing skin + hair care advice
              </ListItem>
            </List>
          </Box>
          <Box margin="auto">
            <Button>Find a Consultant</Button>
          </Box>
        </Box>
      </Box>
      {/* Cards for Items */}
      <HomeCard />
    </>
  );
};
export default Home;
