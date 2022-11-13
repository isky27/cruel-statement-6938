import React, { useState } from "react";
import {InputGroup } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  InputRightElement,
} from "@chakra-ui/react";
import { useAuth } from "../utilis/Auth";
import { useLocation, useNavigate } from "react-router";

const initialState = {
  username: "",
  password: "",
};

export default function AdminLogin() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState(initialState);
    const auth = useAuth();
 const navigate = useNavigate();
 const location = useLocation();
 const redirectPath = location.state?.path || "/profile";

 
  const handleChange = (event) => {
    const { value, name } = event.target;
    // setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = login(formData);
    // console.log(data);
     fetch("http://localhost:8010/admin/login", {
       method: "POST",
       crossDomain: true,
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
         "Access-Control-Allow-Origin": "*",
       },
       body: JSON.stringify({
         email,
         password,
       }),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data, "UserRegister");
       });
  };

  const login = (formData) => {
    // const res = axios.post("http://localhost:8010/admin/login", {
    //   username: formData.username,
    //   password: formData.password,
    // });
    // const data = res.data
    //     console.log(data);
        // if (data.token) {
        //   alert("Login Successful");
        //   console.log(data.admin)
        //   auth.login(data.admin);
        //   navigate(redirectPath, { replace: true });
        //   // window.localStorage.setItem("isLoggedIn", true);
        // }
  };

  return (
    <Flex mt={10}>
      <Stack spacing={8} mx={"auto"}>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={4}
          w="350px"
        >
          <Stack spacing={6}>
            <FormControl id="username">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                rounded={"4px"}
                name="username"
                // value={formData.username}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <Flex>
                <Box>
                  <FormLabel>Password</FormLabel>
                </Box>
              </Flex>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  rounded={"4px"}
                  name="password"
                  // value={formData.password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <Button
                onClick={handleSubmit}
                rounded={"4px"}
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "Gray",
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
