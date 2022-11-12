import { useLocation } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Paymentform from "./Paymentform";
import { useState } from "react";
// const Cart = (props) => {
// const location = useLocation();
// const data = location.state?.cart;
// console.log("cartPage-data", data); //it is an array of object
//   return (
//     <>
//       Cart Page
//       <h2>{data ? data.length : "No come"}</h2>
//       <>{data && data.map((el) => <h2>{el.title}</h2>)}</>
//     </>
//   );
// };
// export default Cart;
// ===========================CART==========================
const Cart = () => {
  //==========================
  const location = useLocation();
  const data = location.state?.cart;
  console.log("cartPage-data", data); //it is an array of object
  return (
    <SimpleGrid columns={2} gap={2} p={3} gridTemplateColumns={["1.1fr 0.9fr"]}>
      <Stack
        spacing={4}
        width={"100%"}
        direction={"column"}
        // border="5px solid red"
      >
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around"
          }}
          direction={{
            base: "column",
            md: "row"
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%"
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              Items ready to <Text color="purple.400">Deliver</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%"
            }}
          >
            <Text textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <Stack>
          {data &&
            data.map((el) => (
              <PackageTier
                title={el.title}
                key={el.id}
                price={el.formattedPrice}
                img={el.imageUrl}
                data={data} //sending whole data
              />
            ))}
        </Stack>
      </Stack>
      <Box p={2}>
        <Heading as="h2" size={"lg"}>
          Shipping Information
        </Heading>
        <Paymentform />
      </Box>
    </SimpleGrid>
  );
};

export default Cart;
//========================================================================================
const PackageTier = ({ data, title, price, checked, img, key }) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";
  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";
  // -------------------------
  // const [manipulateItem, setmanipulateItem] = useState([]);
  // const [quantity, setQuantity] = useState(price);
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around"
      }}
      direction={{
        base: "column",
        md: "row"
      }}
      alignItems={{ md: "center" }}
    >
      <SimpleGrid columns={1} gap={2} p={3}>
        <Heading
          as="h4"
          fontWeight="400"
          size={["sm", "md", "lg"]}
          margin="auto"
        >
          {title}
        </Heading>
        <Box margin="auto">
          <Image
            boxSize="200px"
            borderRadius="full"
            bgColor="pink.100"
            src={img}
            alt={title}
          />
        </Box>
      </SimpleGrid>

      <Heading margin="auto" fontSize={["xl", "2xl", "3xl"]}>
        {price}
      </Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          +
        </Button>
        <Badge fontSize={["sm", "md", "lg"]}>QUANTITY:</Badge>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          -
        </Button>
      </Stack>
    </Stack>
  );
};
