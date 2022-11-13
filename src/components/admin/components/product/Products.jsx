import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Button,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response = await axios.get("http://localhost:8080/products");
    let data = response.data;
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let no = 1;
  return (
    <Box>
      <Heading textAlign={"center"}>Products</Heading>
      <Flex justify={"right"} my={3} marginRight={6}>
        <Button colorScheme="blue">
          <Link to="/Products/addProduct">Create</Link>
        </Button>
      </Flex>
      <Flex justifyContent="center">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>Prod Id</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((el) => {
                return (
                  <Product
                    key={el.id}
                    prop={el}
                    no={no++}
                    refetch={getProducts}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default Products;
