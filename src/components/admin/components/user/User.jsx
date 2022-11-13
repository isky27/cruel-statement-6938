import React,{useState} from 'react'
import {
  Tr,
  Td,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import "./user.css";
import axios from 'axios';

const User = ({ prop, no, refetch }) => {
  const [hide, setHide] = useState("notShow");

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:8080/users/${id}`).then(()=>refetch());
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleShow = () => {
    if (hide === "show") {
      setHide("notShow");
    } else {
      setHide("show");
    }
  };

  return (
    <Tr>
      <Td>{no}</Td>
      <Td>{prop.id}</Td>
      <Td>{prop.name}</Td>
      <Td>{prop.email}</Td>
      <Td className={hide} onClick={handleShow}>
        {prop.password}
      </Td>
      <Td>
        <Link to={`/users/edituser/${prop.id}`}>
          <EditIcon color="blue.500"/>
        </Link>
      </Td>
      <Td>
        <DeleteIcon color="red.500" onClick={() => handleDelete(prop.id)} />
      </Td>
    </Tr>
  );
};

export default User
