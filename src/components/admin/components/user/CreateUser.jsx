import React, {useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const initialUser = {
  name: "",
  email: "",
  password: "",
};

const CreateUser = () => {

     const [formData,setFormData] = useState(initialUser);

     const navigate = useNavigate();

     const addUser = async (obj) => {
       try {
         await axios.post(`http://localhost:8080/users`, {...obj, id:Date.now()});
        } catch (error) {
            console.log(error.message)
        }
       };

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value,
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       console.log(formData);
       addUser(formData)
       .then(()=>setFormData(initialUser)).then(()=>navigate("/Users"));
     };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Add User
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter email"
            _placeholder={{ color: "gray.500" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Enter password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            onClick={handleSubmit}
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default CreateUser;
