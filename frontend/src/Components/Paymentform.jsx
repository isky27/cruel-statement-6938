import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
const Paymentform = () => {
  const [value, setValue] = useState("");
  const [street, setStreet] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const handleStreet = (street) => setStreet(street.target.value);
  return (
    <>
      <Text fontSize={["sm", "md", "lg"]} fontWeight="500" p={2}>
        FULL NAME
      </Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Your First and Last Name"
        size="sm"
        textAlign="center"
        p={2}
        borderRadius="md"
      />
      <Text
        fontSize={["sm", "md", "lg"]}
        fontWeight="500"
        p={2}
        textAlign="center"
      >
        STREET ADDRESS
      </Text>
      <Input
        value={street}
        onChange={handleStreet}
        placeholder="Your complete Address"
        size="sm"
        p={2}
        textAlign="center"
        borderRadius="md"
      />
      <Input
        size="sm"
        width="auto"
        placeholder="Zip Code"
        p={2}
        textAlign="center"
        marginTop={2}
        borderRadius="md"
      />
      <InputGroup size="sm">
        <Input placeholder="Your mail addresss" borderRadius="md" />
        <InputRightAddon children="@gmail.com" />
      </InputGroup>
      <SimpleGrid
        columns={2}
        margin="auto"
        p={2}
        gridTemplateColumns={["1fr", "1fr 1fr"]}
      >
        <Input htmlSize={4} width="auto" placeholder="Credit Card Number" />
        <Input htmlSize={4} width="auto" placeholder="Name on card" />
        <Box>
          <Heading as="h4" fontSize={["sm", "md", "lg"]} fontWeight="500" p={2}>
            Expiry date
          </Heading>
          <Input
            htmlSize={4}
            placeholder="Select Date"
            size="md"
            type="month"
          />
        </Box>
        <Box>
          <Heading as="h4" fontSize={["sm", "md", "lg"]} fontWeight="500" p={2}>
            CVV/CVC
          </Heading>
          <Input
            htmlSize={4}
            width="auto"
            placeholder=" CVV"
            fontSize={["sm", "md", "lg"]}
          />
        </Box>
      </SimpleGrid>
    </>
  );
};
export default Paymentform;
