import React from 'react'
import { Tr, Td, Image, Tooltip} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";



const Product = ({ prop, no, refetch }) => {
  const handleDelete = (id) => {
    try {
      axios
        .delete(`http://localhost:8080/products/${id}`)
        .then(() => refetch());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Tr>
      <Td>{no}</Td>
      <Td>{prop.id}</Td>
      <Tooltip
        label={<Image maxHeight={"150px"} src={prop.image_url} />}
        hasArrow
        arrowSize={15}
      >
        <Td>
          <Image maxHeight={"50px"} src={prop.image_url} />
        </Td>
      </Tooltip>

      <Tooltip label={prop.name} hasArrow arrowSize={15} bg="blue.600">
        <Td
          maxWidth={"200px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
        >
          {prop.name}
        </Td>
      </Tooltip>
      <Tooltip label={prop.description} hasArrow arrowSize={15} bg="blue.600">
        <Td
          maxWidth={"200px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
        >
          {prop.description}
        </Td>
      </Tooltip>
      <Td>$ {prop.price}</Td>
      <Td>
        <Link to={`/products/editProduct/${prop.id}`}>
          <EditIcon color="blue.500" />
        </Link>
      </Td>
      <Td>
        <DeleteIcon color="red.500" onClick={() => handleDelete(prop.id)} />
      </Td>
    </Tr>
  );
};

export default Product
