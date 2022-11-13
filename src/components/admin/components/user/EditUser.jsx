import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
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
    id:0,
    name:"",
    email:"",
    password:""
}

const EditUser = () => {

  const {id} = useParams();

  const [formData, setFormData] = useState(initialUser);

  const navigate = useNavigate()
  
  const getSingleUser =(id)=>{
    try {
       axios.get(`http://localhost:8080/users/${id}`)
        .then(response=>{
          const data = response.data;
          setFormData(data)
        })
    } catch (error) {
        console.log(error.message)
    }
  }

  const changeUser = async(id,obj)=>{
    try {
       await axios.patch(`http://localhost:8080/users/${id}`,obj);
    } catch (error) {     
      console.log(error.message)
    }
  }

  useEffect(() => {
    getSingleUser(id)
  }, [id]); 

 const handleChange = (e) => {
   const {name,value} = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   changeUser(id,formData)
   .then(()=>navigate("/Users"))
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
          Edit User
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

export default EditUser;
