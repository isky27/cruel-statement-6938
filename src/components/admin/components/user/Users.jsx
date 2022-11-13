import React, { useEffect, useState } from 'react'
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
import { Link } from "react-router-dom";
import axios from 'axios';
import User from './User';

const Users = () => {

    const [users, setUsers] = useState([])

    const getUsers = async() =>{
         let response = await axios.get("http://localhost:8080/users");
         let data = response.data;
         setUsers(data)
       }

   useEffect(()=>{
    getUsers()
   },[])
   
   let no =1

  return (
    <Box>
      <Heading textAlign={"center"}>Users</Heading>
      <Flex justify={"right"} my={3} marginRight={6}>
        <Button colorScheme="blue">
          <Link to="/Users/createuser">Create</Link>
        </Button>
      </Flex>
      <Flex justifyContent="center">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>User Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((el) => {
                return (
                  <User key={el.id} prop={el} no={no++} refetch={getUsers} />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
}

export default Users
