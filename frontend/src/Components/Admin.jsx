import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spacer,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../utilis/Auth";
const Admin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [admin_email, setAdmin_email] = useState("");
  const [admin_password, setAdmin_password] = useState("");
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/adminProfile";
  const handleadmin = (e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/adminLogin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        admin_email,
        admin_password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "AdminRegister");
        if (data.status === "ADMIN-OK") {
          alert("ADMIN Login Successful");
          setUser(data.data);
          auth.login(data.data);
          navigate(redirectPath, { replace: true });
        }
      })
      .catch(() => alert("ERROR"));
  }
  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"}>
          <Stack align={"center"}>
            <Heading fontWeight={350} fontSize={"4xl"}>
              Welcome Admin
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
                <Input type="email" rounded={"4px"} 
                onChange={(e) => setAdmin_email(e.target.value)}
                name="email" />
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
                    onChange={(e) => setAdmin_password(e.target.value)}
                  />
                  <InputRightElement _hover={{ cursor: "pointer" }}>
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
                  We updated our{" "}
                  <Link color={"blue.400"}>Terms & Condition</Link>
                  on 8/3/21 By clicking "SIGN IN" you agree to our updated
                  terms, in addition to our
                  <Link color={"blue.400"}> Privacy Policy</Link>
                </Text>
                <Button
                 onClick={handleadmin}
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
                  <NavLink to="/signup">Create an account</NavLink>
                  {/* <Link href="../Signup/SignUp.jsx">Create an account</Link> */}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
export default Admin;
