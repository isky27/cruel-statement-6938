import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tooltip,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const initialProduct = {
  id: 0,
  image_url:"",
  name: "",
  description: "",
  price: 0,
};

const EditProduct = () => {

    const { id } = useParams();

    const [formData, setFormData] = useState(initialProduct);

    const navigate = useNavigate();

    const getSingleProduct = (id) => {
      try {
        axios.get(`http://localhost:8080/products/${id}`).then((response) => {
          const data = response.data;
          setFormData(data);
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    const changeProduct = async (id, obj) => {
      try {
        await axios.patch(`http://localhost:8080/products/${id}`, obj);
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      getSingleProduct(id);
    }, [id]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      changeProduct(id, formData).then(() => navigate("/Products"));
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
          Edit Product
        </Heading>
        <FormControl id="url" isRequired>
          <FormLabel>Image-URL</FormLabel>
          <Tooltip
            hasArrow
            label={<Image maxHeight={"120px"} src={formData.image_url} />}
            bg="red.600"
          >
            <Input
              placeholder="Enter Image Url"
              _placeholder={{ color: "gray.500" }}
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </Tooltip>
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input
            placeholder="Enter product name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Product Description</FormLabel>
          <Tooltip hasArrow label={formData.description} bg="blue.600">
            <Input
              placeholder="Enter product description"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Tooltip>
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input
            placeholder="Enter price"
            _placeholder={{ color: "gray.500" }}
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default EditProduct;
