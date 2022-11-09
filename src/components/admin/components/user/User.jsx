import React from 'react'
import useShowPassword from "../../hooks/useShowPassword";
import {
  Tr,
  Td,
} from "@chakra-ui/react";

const User = ({prop}) => {

    const { hide, handleShow } = useShowPassword();

  return (
    <Tr>
      <Td>{prop.id}</Td>
      <Td>{prop.name}</Td>
      <Td>{prop.email}</Td>
      <Td className={hide} onClick={handleShow}>
        {prop.password}
      </Td>
      <Td>{prop.name}</Td>
      <Td>{prop.email}</Td>
    </Tr>
  );
}

export default User
