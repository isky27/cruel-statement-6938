import { GridItem, SimpleGrid, Box } from "@chakra-ui/react";
import React, { useContext } from "react";

import { Cartcontext } from "../utilis/Context";
import Filters from "./Filters";

import SingleProductCard from "./SingleProductCard";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = useContext(Cartcontext);

  //  console.log(data)
  const filtered = () => {
    let arr = products;
    if (byFastDelivery) {
      arr = arr.filter((x) => x.fastDelivery);
    }
    if (!byStock) {
      arr = arr.filter((x) => x.inStock !== 0);
    }
    if (sort === "lowToHigh") {
      arr = arr.sort((a, b) => a.price - b.price);
    }
    if (sort === "highToLow") {
      arr = arr.sort((a, b) => b.price - a.price);
    }
    if (byRating) {
      arr = arr.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      arr = arr.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }
    return arr;
  };

  return (
    <Box w="100%" p={4} border="0">
      {/* Filters  here fix it then add it later */}
      {/* <Box>
          <Filters />
        </Box> */}
      {/* ----------------------------- */}
      <SimpleGrid
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr 1fr 1fr"]}
        spacing={4}
      >
        {filtered().map((prod) => (
          <SingleProductCard key={prod.id} prod={prod} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
