import {
  Box,
  Flex,
  Grid,
  Text,
  GridItem,
  Stack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import MaskCard from "./BlogChild/MaskCard";
import SkinCarePostCard from "./BlogChild/SkinCarePostCard";
const SkinPostData = [
  {
    id: 1,
    Image:
      "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/10/rodan-fields-haircare-science.jpg",
    date: "October 21st, 2022",
    description: "The Science Behind Rodan + Fields Haircare Products",
  },
  {
    id: 2,
    Image:
      "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/10/hair-breakage-causes.jpg",
    date: "October 21st, 2022",
    description: "How to Stop Hair Breakage",
  },
  {
    id: 3,
    Image:
      "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/10/rodan-fields-scalp-treatment.jpg",
    date: "October 21st, 2022",
    description: "What Is a Scalp Treatment?",
  },
];
const maskData = [
  {
    id: 1,
    image: "https://www.rodanandfields.com/en-us/assets/blog/rechargeMask.jpg",
    title: "RECHARGE",
    description:
      "Detoxify with Charcoal while Mango Seed Butter, Coconut + Avocado Oil moisturize",
  },
  {
    id: 2,
    image: "https://www.rodanandfields.com/en-us/assets/blog/reverseMask.jpg",
    title: "REVERSE",
    description:
      "Fueled with Retinal to dial up skin’s radiance instantly while it evens skin tone over time",
  },
  {
    id: 3,
    image: "https://www.rodanandfields.com/en-us/assets/blog/sootheMask.jpg",
    title: "SOOTHE",
    description:
      "Get softer, fresher-feeling skin instantly while calming sensitivity + redness over time",
  },
  {
    id: 4,
    image: "https://www.rodanandfields.com/en-us/assets/blog/redefineMask.jpg",
    title: "REDEFINE",
    description:
      "Smooth skin with exfoliating Jojoba Beads while improving fine lines + wrinkles over time",
  },
  {
    id: 5,
    image: "https://www.rodanandfields.com/en-us/assets/blog/unblemishMask.jpg",
    title: "UNBLEMISH",
    description:
      "Reduce oil + shine instantly & prevent breakouts over time with acne-fighting formula",
  },
];
export default function Blog() {
  return (
    <Box>
      {/* Crousel */}
      <Box>
        <Flex mt="50px" mb="50px">
          <Box bg="#faf6f5" pl="100px" pt="130px">
            <Text>DOCTOR'S NOTES</Text>
            <Heading fontWeight="400" mt="20px" mb="20px" w="75%">
              Introducing Rodan + Fields Haircare
            </Heading>
            {/* <Text w="64%" mb="20px">
              DEEP WRINKLES AND UNDER EYE BAGS CAN APPEAR AS WE AGE, BUT THERE IS
              A WAY TO TREAT THEM.
            </Text> */}
            <a
              href="https://www.rodanandfields.com/en-us/blog/doctors-notes/instant-firming-products-eye-bags-wrinkles/"
              style={{ borderBottom: "1px solid black" }}
            >
              READ MORE
            </a>
          </Box>
          <Image
            w="50%"
            h="550px"
            src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/05/Face-Firming-Treatment-for-Under-Eye-Bags-Wrinkles.jpg"
            alt="error"
          />
        </Flex>
        <Flex>
          <Button w="20px"></Button>
        </Flex>
      </Box>
      {/* skin post */}
      <Box align="center">
        <Text fontSize="32px">Skincare Blog Posts</Text>
        {/* arrrow button */}
        {/* <Box>
            <ArrowLeftIcon />
            <ArrowRightIcon />
          </Box> */}
        <Grid templateColumns="repeat(3, 1fr)" p="16">
          {SkinPostData?.map((item) => {
            return (
              <GridItem>
                <SkinCarePostCard
                  key={item.id}
                  image={item.Image}
                  date={item.date}
                  description={item.description}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      ​{/* pro tips  */}
      <Flex>
        <Image
          w="75%"
          h="550px"
          src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/09/facial-masks.jpg"
          alt="error"
        />
        <Box bg="#faf6f5" pl="30px" pt="130px">
          <Text>PRO TIPS</Text>
          <Heading fontWeight="400" mt="20px" mb="20px" w="60%">
            Why You Should Add a Facial Mask to Your Skincare Routine
          </Heading>
          <Text w="60%" mb="20px">
            TIPS ON HOW TO USE FACIAL MASKS & FINDING THE RIGHT ONE FOR YOUR
            SKIN CONCERN
          </Text>
          <a
            href="https://www.rodanandfields.com/en-us/blog/pro-tips/why-you-should-add-a-facial-mask-to-your-skincare-routine/"
            style={{ borderBottom: "1px solid black" }}
          >
            READ MORE
          </a>
        </Box>
      </Flex>
      ​{/* meet your mask  */}
      <Box align="center" mt="80px">
        <Heading fontWeight="400">Meet Your Mask</Heading>
        <Text>
          FIND THE IDEAL MASK FOR YOUR SKIN CONCERN AND MULTI-MASK LIKE A
          PROFESSIONAL
        </Text>
        <Flex p="30px" gap={4} mt="15px">
          {maskData?.map((item) => {
            return (
              <MaskCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </Flex>
      </Box>
      ​{/* Doctor's note */}
      <Flex mt="50px">
        <Box bg="#faf6f5" pl="100px" pt="130px">
          <Text>DOCTOR'S NOTES</Text>
          <Heading fontWeight="400" mt="20px" mb="20px" w="65%">
            Instant Firming Treatment for Under Eye Bags and Deep Wrinkles
          </Heading>
          <Text w="65%" mb="20px">
            DEEP WRINKLES AND UNDER EYE BAGS CAN APPEAR AS WE AGE, BUT THERE IS
            A WAY TO TREAT THEM.
          </Text>
          <a
            href="https://www.rodanandfields.com/en-us/blog/doctors-notes/instant-firming-products-eye-bags-wrinkles/"
            style={{ borderBottom: "1px solid black" }}
          >
            READ MORE
          </a>
        </Box>
        <Image
          w="78%"
          h="550px"
          src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/05/Face-Firming-Treatment-for-Under-Eye-Bags-Wrinkles.jpg"
          alt="error"
        />
      </Flex>
      ​{/* Blog Category */}
      <Stack mt="50px" align="center" mb="50px">
        <Text fontWeight="400" fontSize="32px">
          Blog Categories
        </Text>
        <Flex align="center" gap="100px">
          <Box mt="35px" align="center">
            <Image
              w="150px"
              mb="20px"
              src="https://www.rodanandfields.com/en-us/assets/blog/doctors-notes.svg"
              alt="category"
            />
            <Text
              borderBottom="1px solid transparent"
              _hover={{ cursor: "pointer", borderBottom: "1px" }}
            >
              DOCTOR'S NOTES
            </Text>
          </Box>
          <Box mt="35px" align="center">
            <Image
              w="150px"
              mb="20px"
              src="https://www.rodanandfields.com/en-us/assets/blog/lifestyle.svg"
              alt="category"
            />
            <Text
              borderBottom="1px solid transparent"
              _hover={{ cursor: "pointer", borderBottom: "1px" }}
            >
              LIFESTYLE
            </Text>
          </Box>
          <Box mt="35px" align="center">
            <Image
              w="150px"
              mb="20px"
              src="https://www.rodanandfields.com/en-us/assets/blog/pro-tips.svg"
              alt="category"
            />
            <Text
              borderBottom="1px solid transparent"
              _hover={{ cursor: "pointer", borderBottom: "1px" }}
            >
              PRO TIPS
            </Text>
          </Box>
          <Box mt="35px" align="center">
            <Image
              w="150px"
              mb="20px"
              src="https://www.rodanandfields.com/en-us/assets/blog/science-of-skincare.svg"
              alt="category"
            />
            <Text
              borderBottom="1px solid transparent"
              _hover={{ cursor: "pointer", borderBottom: "1px" }}
            >
              SCIENCE OF SKINCARE
            </Text>
          </Box>
          <Box mt="35px" align="center">
            <Image
              w="150px"
              mb="20px"
              src="https://www.rodanandfields.com/en-us/assets/blog/skincare-guides.svg"
              alt="category"
            />
            <Text
              borderBottom="1px solid transparent"
              _hover={{ cursor: "pointer", borderBottom: "1px" }}
            >
              SKINCARE GUIDES
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
