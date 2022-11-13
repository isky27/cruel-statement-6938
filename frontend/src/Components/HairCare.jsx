import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { HairCareCard } from "./HairCareChild/HairCareCard";
const hairCareData = [
  {
    id: 1,
    image:
      "https://www.rodanandfields.com/en-us/medias/HSMRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wxOTkwNnxpbWFnZS9wbmd8aW1hZ2VzL2g0Yi9oZmYvMTU4ODA4MDgwMDU2NjIucG5nfGRiMjBjZTMwMzYxMzc4YjUxMzZhNWI5NWU2N2Y5YjA4ODBiNmI1YmM1MTI4NTM5ZjdlZDhkOWI3YjU2ZDRlNTI",
    title: "Smooth+ Regimen + Refresh+ Dry Shampoo Special",
    description:
      "Buy the Smooth+ Regimen + Dry Shampoo and get Define+ Curl Cream + scalp massager free.",
    price: "161",
    value: "232",
    rating: {
      rating: true,
      no_of_person: 5678,
    },
  },
  {
    id: 2,
    image:
      "https://www.rodanandfields.com/en-us/medias/HVLRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMTU0NnxpbWFnZS9wbmd8aW1hZ2VzL2gyMi9oNTMvMTU4ODA4MTI3NTcwMjIucG5nfDkwMWFkZmIwZjI2N2QyZGQ5YzdlMzhkNDY4ZWViNTUyMjI3MzEwOGE3M2U0MDRiMGQ1NmRhYThkOWRjMjdmYWI",
    title: "Volume+ Regimen + Refresh+ Dry Shampoo Special",
    description:
      "Buy the Volume+ Regimen + Dry Shampoo and get Define+ Curl Cream + scalp massager free.",
    price: "161",
    value: "232",
    rating: {
      rating: true,
      no_of_person: 7656,
    },
  },
  {
    id: 3,
    image:
      "https://www.rodanandfields.com/en-us/medias/HSMRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMzg4NHxpbWFnZS9wbmd8aW1hZ2VzL2g5Mi9oYmUvMTU4ODA4MDgyMDIyNzAucG5nfDI1OTVmZjA0YmE3YzkyMTFiYTc5ZGRhODU4YTQ1ZWMyNTFjNDM3OWNmNzQ3ZTg2ZDIzNmI3NGRjMGRiNGFmZjk",
    title: "Smooth+ Regimen + Total RF Serum Special",
    description:
      "Buy the Smooth+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.",
    price: "297",
    value: "368",
    rating: {
      rating: true,
      no_of_person: 2124,
    },
  },
  {
    id: 4,
    image:
      "https://www.rodanandfields.com/en-us/medias/HVLRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyNjY4M3xpbWFnZS9wbmd8aW1hZ2VzL2gyZS9oOWQvMTU4ODA4MTI4ODgwOTQucG5nfGM3YmRkZmM2MTYyM2VkYzBiNWRhMjc4MDExMDA5OGZhYjZjNzRjNzA3MWM3OTU4ZjcwZGQ2M2JmNWNkYTU1ODk",
    title: "Volume+ Regimen + Total RF Serum Special",
    description:
      "Buy the Volume+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.",
    price: "297",
    value: "368",
    rating: {
      rating: true,
      no_of_person: 234,
    },
  },
  {
    id: 5,
    image:
      "https://www.rodanandfields.com/en-us/medias/HSMRG001-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3wyMjc5NHxpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oYTgvMTU4ODA4MTEyNDk2OTQucG5nfDNjYTkwNDcyOTA0ODYyN2QyZTYzNWQ5OGExOGMwZjQwNmZiYTZlMjA4NGVjZTkzZjUxZjQ2MjgyMzgwOWE4N2E",
    title: "SMOOTH+ Regimen",
    description:
      "3 step Regimen to hydrate + repair for softer, smoother hair with less frizz and damage.",
    price: "122",
    value: "154",
    rating: {
      rating: true,
      no_of_person: 16,
    },
  },
  {
    id: 6,
    image:
      "https://www.rodanandfields.com/en-us/medias/HVLRG001-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3wyMDQxN3xpbWFnZS9wbmd8aW1hZ2VzL2hlOS9oNTUvMTU4ODA4MTIwNjg4OTQucG5nfDk5NDY3YzcwOTlkMDg3ZjAxMGM3NTY4ZDdmZDMyNjViYmEzN2NhNDViMjU3NTNlNzE5ODQyNTEwZDJkNzUxMzI",
    title: "VOLUME+ Regimen",
    description:
      "3 step Regimen to boost thickness + minimize hair fall due to breakage for added volume.",
    price: "122",
    value: "154",
    rating: {
      rating: true,
      no_of_person: 15,
    },
  },
];
export default function HairCare() {
  return (
    <>
      <Box w="100%" h="230px" bg="#cabbbc" position="relative">
        <Box position="absolute" left="10%" top="15%">
          <Text fontSize="32px" lineHeight={2}>
            Haircare Regimens
          </Text>
          <Text fontSize="19px" w="625px">
            Haircare Regimens that get to the root of hair concerns as they
            re-energize + nourish the scalp for healthier-looking, stronger,
            more beautiful hair.
          </Text>
        </Box>
      </Box>
      <Grid display="grid" gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}>
        {hairCareData?.map((item) => {
          return (
            <GridItem s={4} gap={5} p={4}>
              <HairCareCard
                h={350}
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                value={item.value}
                rating={item.rating}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
