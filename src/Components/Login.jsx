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
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utilis/Auth";

export const Login = () => {
  // chakra bg component
  const x1 = useColorModeValue("gray.50", "gray.800");
  const x2 = useColorModeValue("white", "gray.700");
  //component state
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/profile";
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "UserRegister");
        if (data.status === "OK") {
          alert("Login Successful");

          // window.localStorage.setItem("token", data.data);
          setUser(data.data);
          // auth.login(user);
          // ====================IMP===============
          //passing auth token
          auth.login(data.data);
          navigate(redirectPath, { replace: true });
          // window.localStorage.setItem("isLoggedIn", true);
        }
      })
      .catch(() => alert("ERROR"));
    // auth.login(user);
    // navigate(redirectPath, { replace: true });
  };

  return (
    // <Flex minH={"100vh"} align={"center"} justify={"center"} bg={x1}>
    //   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
    //     <Stack align={"center"}>
    //       <Heading fontSize={"4xl"}>Sign in to your account</Heading>
    //       <Text fontSize={"lg"} color={"gray.600"}>
    //         to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
    //       </Text>
    //     </Stack>
    //     <Box rounded={"lg"} bg={x2} boxShadow={"lg"} p={8}>
    //       <Stack spacing={4}>
    //         <FormControl id="email">
    //           <FormLabel>Email address</FormLabel>
    //           <Input type="email" onChange={(e) => setEmail(e.target.value)} />
    //         </FormControl>
    //         <FormControl id="password">
    //           <FormLabel>Password</FormLabel>
    //           <Input
    //             type="password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </FormControl>
    //         <Stack spacing={10}>
    //           <Stack
    //             direction={{ base: "column", sm: "row" }}
    //             align={"start"}
    //             justify={"space-between"}
    //           >
    //             <Checkbox>Remember me</Checkbox>
    //             <Link color={"blue.400"}>Forgot password?</Link>
    //           </Stack>
    //           <Button
    //             bg={"blue.400"}
    //             color={"white"}
    //             _hover={{
    //               bg: "blue.500"
    //             }}
    //             onClick={handleLogin}
    //           >
    //             Sign in
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleLogin}
                rounded={"4px"}
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "Gray"
                }}
              >
                SIGN IN
              </Button>
              <Button
                rounded={"4px"}
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "red.300"
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
  );
};
