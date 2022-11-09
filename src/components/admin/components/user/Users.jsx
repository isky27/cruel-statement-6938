import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import axios from 'axios';
import "./user.css"
import useShowPassword from '../../hooks/useShowPassword';
import User from './User';

const Users = () => {

    const [users, setUers] = useState([])

    const {hide,handleShow} = useShowPassword()

    const getUsers = async() =>{
         let response = await axios.get("http://localhost:8080/users");
         let data = response.data;
         setUers(data)
    }
 
   useEffect(()=>{
    getUsers()
   },[]) 

   console.log(users)
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((el)=>{
              return (
                <User key={el.id} prop={el}/>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users
