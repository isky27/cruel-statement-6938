import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import WinningCard from "./AboutChild/WinningCard";
import RfDiffCard from "./AboutChild//RfDiffCard";
const winningData = [
  {
    id: 1,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_3_Image1_AU_728x358_d752333011.jpg&w=1920&q=75",
    title: "Our Inspirational Founders",
    description:
      "World-renowned, Stanford-trained, board-certified dermatologists, Dr. Katie Rodan + Dr. Kathy Fields ambition has addressed a variety of dermatology concerns + transformed the lives of millions of people."
  },
  {
    id: 2,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_3_Image2_728x358_1653e865b8.jpg&w=1920&q=75",
    title: "30 Years of Derm Expertise",
    description:
      "We partner with leading experts to create derm-designed solutions that address the root causes of skin + hair concerns for visible, transformational results."
  },
  {
    id: 3,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_3_Image3_728x358_eb7e52f840.jpg&w=1920&q=75",
    title: "Our Consultant Community",
    description:
      "We believe in empowering a growing movement of people looking for a potential earning opportunity that is rewarding, fun + flexible and helping them start a business that fits their lives, their schedule and their goals."
  }
];

const RfDiffData = [
  {
    id: 1,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_2_Image1_1126x358_0281185636.jpg&w=1920&q=75",
    title: "Award-Winning Products",
    description:
      "As an industry leader we consistently push the category forward with our advanced, proprietary technologies + innovations that are clinically tested to transform the skin + hair and enhance the confidence of millions."
  },
  {
    id: 2,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_2_Image2_1126x358_631ca0cb11.jpg&w=1920&q=75",
    title: "Proven by Millions of People",
    description:
      "Our transformative results aren’t just clinically tested in the lab but are proven in the real world by millions of people across all skin types, ages, ethnicities and life stages who love their skin + hair."
  },
  {
    id: 3,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_2_Image3_1126x358_9540992b14.jpg&w=1920&q=75",
    title: "Derm-Designed Regimens",
    description:
      "Our derm-designed Regimens target your primary concerns in just a few steps to take the guesswork out of skin + hair care to address the root of the issue, not just the symptoms of it."
  },
  {
    id: 4,
    image:
      "https://www.rodanandfields.com.au/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FFlex_2_Image4_1126x358_7c0f80d689.jpg&w=1920&q=75",
    title: "Our Unique Multi-Step Science",
    description:
      "Purposefully layering high quality, scientifically-backed ingredients into proprietary formulations, and applied to the skin in just the right order so that each step effectively builds on the last."
  }
];
const milestonesData = [
  {
    id: 1,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image1_728x358_a870f3e9d6.jpg&w=1920&q=75",
    title: "1995",
    description:
      "After meeting at Stanford University School of Medicine in the 1980s, Dr. Katie Rodan and Dr. Kathy Fields develop Proactiv Solution."
  },
  {
    id: 2,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image2_728x358_03b0636530.jpg&w=1920&q=75",
    title: "2000",
    description:
      "The Doctors launch R+F with Regimens for a range of skin concerns like signs of aging. R+F is acquired by Estee Lauder Companies, Inc. in 2003."
  },
  {
    id: 3,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image3_728x358_bbc9fe103e.jpg&w=1920&q=75",
    title: "2007",
    description:
      "The Doctors announce a company buy-back from The Estee Lauder Companies, Inc."
  },
  {
    id: 4,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image4_728x358_ee9b4e7af4.jpg&w=1920&q=75",
    title: "2008",
    description:
      "Relaunching in 2008 powered by a direct sales model, the Doctors empower others to become entrepreneurs as R+F Independent Consultants. The company’s charitable arm is established with the mission to serve youth with life-changing empowerment programs where they live."
  },
  {
    id: 5,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image5_728x358_aeec8abbcf.jpg&w=1920&q=75",
    title: "2016 - 2017",
    description:
      "R+F launches blockbuster product innovation with the introduction of Lash Boost + Active Hydration Serum. Media recognizes the incredible results R+F products offer with awards from Allure, CEW and Essence."
  },
  {
    id: 6,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image6_728x358_3dd4b08157.jpg&w=1920&q=75",
    title: "2018",
    description:
      "The Doctors share their entrepreneurial journey with MSNBC and speak to how they revolutionized the skincare industry while empowering people with a business opportunity."
  },
  {
    id: 7,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image7_728x358_8787a94a8e.jpg&w=1920&q=75",
    title: "2021",
    description:
      "R+F commits $5M in philanthropic funding to advance its mission to DO GOOD, reaching more underserved young people in partnership with their Consultant community."
  },
  {
    id: 8,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image8_US_728x358_ce36026388.jpg&w=1920&q=75",
    title: "2022",
    description:
      "R+F secures multiple #1 accolades for its unique business model, dermatology-inspired skincare and innovative Regimens + products that provide real results."
  },
  {
    id: 9,
    image:
      "https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FMilestone_Image9_728x358_e204ebd7d1.jpg&w=1920&q=75",
    title: "2022",
    description:
      "R+F builds upon its legacy and dermatological expertise and launches into haircare."
  }
];
function About() {
  return (
    <>
      {/* A Legacy of Derm */}
      <Stack
        w="100%"
        direction={["column", "row"]}
        spacing="150px"
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        mb="70px"
      >
        <Box w="20%">
          <Heading fontWeight={500}>
            A Legacy of Derm-Designed Innovation
          </Heading>
          <Text>
            Rodan + Fields was founded by world-renowned Dermatologists with a
            proven record of building successful skincare businesses. As a
            company, we’re committed to industry-leading innovation,
            transformative results + empowering a global community of
            entrepreneurs. Now, we enter a new era with the launch of R+F
            Haircare, rooted in skincare science.
          </Text>
        </Box>
        <Box w="60%">
          <Image
            src="https://github.com/shubhamkr2/UploadImages/blob/main/Screenshot%20(1471).png?raw=true"
            alt="Error"
          />
        </Box>
      </Stack>
      ​{/* winning list */}
      <div
        style={{
          marginBottom: "70px",
          padding: "25px 0px 30px 20px",
          height: "520px",
          alignItems: "center",
          justify: "center",
          backgroundColor: "#fef9f2"
        }}
      >
        <Text textAlign={"center"} fontWeight="600" fontSize="22px">
          OUR WINNING FORMULA
        </Text>
        <Grid p={10} templateColumns="repeat(3, 1fr)">
          {winningData?.map((item) => {
            return (
              <GridItem h="300px">
                <WinningCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </GridItem>
            );
          })}
        </Grid>
      </div>
      ​{/* THE R+F DIFFERENCE */}
      <div
        style={{
          padding: "25px 0px 25px 20px",
          alignItems: "center",
          marginBottom: "70px",
          justify: "center",
          backgroundColor: "#fef9f2"
        }}
      >
        <Text textAlign={"center"} fontWeight="600" fontSize="22px">
          THE R+F DIFFERENCE
        </Text>
        <Grid rowGap={16} p={10} templateColumns="repeat(2, 1fr)">
          {RfDiffData?.map((item) => {
            return (
              <GridItem h="300px">
                <RfDiffCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </GridItem>
            );
          })}
        </Grid>
      </div>
      ​{/* A Curated Personalized */}
      <Stack
        direction={["column", "row"]}
        align={"center"}
        justify={"center"}
        bg="#fef9f2"
        w="90%"
        m="auto"
        pr={16}
        mb="70px"
        columnGap={12}
      >
        <Image
          w="550px"
          src="https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FModule_Promo_Banner_1168x704_862adb4c18.jpg&w=1920&q=75"
        />
        <Box>
          <Text fontSize="28px" pb={4}>
            A Curated Personalized Service
          </Text>
          <Text color={"gray"}>
            We believe that personalized service is the best way to find the
            right products for you. That’s why our Independent Consultants are
            available to discuss your skin + hair concerns, make thoughtful
            product suggestions and guide you through our innovative Solution
            Tool technology so you can receive customized recommendations + find
            the perfect Regimens. We know you’ll love your real results, that’s
            why all of our products are backed by a 60-Day Money Back Guarantee.
          </Text>
        </Box>
      </Stack>
      ​{/* OUR BIGGEST MILESTONES */}
      <div
        style={{
          marginBottom: "70px",
          padding: "25px 0px 30px 20px",
          alignItems: "center",
          justify: "center",
          backgroundColor: "#fef9f2"
        }}
      >
        <Text textAlign={"center"} fontWeight="600" fontSize="22px">
          OUR BIGGEST MILESTONES
        </Text>
        <Grid p={10} rowGap={10} templateColumns="repeat(3, 1fr)">
          {milestonesData?.map((item) => {
            return (
              <GridItem>
                {/* using winnig card because both are same */}
                <WinningCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
export default About;
