import React, { useState } from "react";
import { Icon, InputGroup } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spacer,
  InputRightElement,
} from "@chakra-ui/react";

const initialState = {
  email: "",
  password: "",
};

export default function SignInMob() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = login(formData);
    console.log(data);
  };

  const login = (formData) => {
    return axios.post("https://reqres.in/api/login", {
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"}>
        <Stack align={"center"}>
          <Heading fontWeight={350} fontSize={"4xl"}>
            SIGN IN
          </Heading>
        </Stack>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={4}
          w="350px"
        >
          <Stack spacing={6}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                rounded={"4px"}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <Flex>
                <Box>
                  <FormLabel>Password</FormLabel>
                </Box>
                <Spacer />
                <Box>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Box>
              </Flex>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  rounded={"4px"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputRightElement
                  onClick={handleClick}
                  _hover={{ cursor: "pointer" }}
                >
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={2}>
              <Text fontSize="12px" color={"gray"}>
                This site is protected by reCAPTCHA and the{" "}
                <Link color={"blue.400"}>Google Privacy Policy</Link> and{" "}
                <Link color={"blue.400"}>Terms of Service</Link> apply.
              </Text>
              <Text fontSize="12px">
                We updated our <Link color={"blue.400"}>Terms & Condition</Link>
                on 8/3/21 By clicking "SIGN IN" you agree to our updated terms,
                in addition to our
                <Link color={"blue.400"}> Privacy Policy</Link>
              </Text>
              <Button
                onClick={handleSubmit}
                rounded={"4px"}
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "Gray",
                }}
              >
                SIGN IN
              </Button>
              <Button
                rounded={"4px"}
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "red.300",
                }}
              >
               <Link href="../Signup/SignUp.jsx">Create an account</Link> 
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
