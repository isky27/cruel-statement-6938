import {
  Text,
  Image,
  SimpleGrid,
  Box,
  Center,
  useColorModeValue
} from "@chakra-ui/react";
const data = [
  {
    id: 1,
    name: "Lines, Wrinkles or Loss of Firmness",
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/Fine-Lines-Wrinkles-Card.jpg?context=bWFzdGVyfHJvb3R8NTgzMDF8aW1hZ2UvanBlZ3xoODYvaGY2LzEyODg5MTg4MjA0NTc0LmpwZ3wzYjIwYmU0ZWI3NWZkYjFmNzJjNjVmZWNhYmJmN2RlODdjYjFmNTU0ODZjZWE0YjQ5NWIzNWQzYmQyN2UxZjli"
  },
  {
    id: 2,
    name: "Adult Acne + Visible Signs of Aging",
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/Acne-Breakouts-Card.jpg?context=bWFzdGVyfHJvb3R8NjU4Mjd8aW1hZ2UvanBlZ3xoMTEvaDJhLzEyODg5MTg4MjcwMTEwLmpwZ3wxMTg2NjQ4NjM0Y2QyZDY4MDdmZDU4ZmI0ZDkxMTlhM2UxMDgyYTFkMGVkOWMzMTBkYzY3ZTJmNGEzNzVlZDhm"
  },
  {
    id: 3,
    name: "Discoloration or Uneven Tone",
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/Uneven-Tone-Brown-Spots-Card.jpg?context=bWFzdGVyfHJvb3R8NTc4OTV8aW1hZ2UvanBlZ3xoY2UvaDY0LzEyODg5MTg4MzM1NjQ2LmpwZ3w0ZjUyN2U3MWE1YzYwNmNmYzgxZTQ3MTAxNmU3ZGIyNjA4NmU1MTQ2Mjc4NWU2NWRhOTFmNDU3NGRmNmI0MDFi"
  },
  {
    id: 4,
    name: "Redness, Dryness or Sensitivity",
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/Sensitivity-Visible-Redness-Card.jpg?context=bWFzdGVyfHJvb3R8NjE5MTd8aW1hZ2UvanBlZ3xoNTgvaGM3LzEyODg5MTg4NDAxMTgyLmpwZ3wwN2M4ZTJmMGExMDI1ZTM2MjE4M2I3MzFlZWI5NDJkZDYzZmMzMDdhMDMyNGFjODUyY2MwMWUzMDk5MDVjZWZk"
  },
  {
    id: 5,
    name: "Dry, Frizzy, Dull Hair with Damage or Breakage",
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/HP-Smooth-Concern-6-grid-438x438.jpg?context=bWFzdGVyfHJvb3R8MjE5Njh8aW1hZ2UvanBlZ3xoNDUvaDUwLzE1ODg5Mzg0MTQ0OTI2LmpwZ3xhNmY5NjEzM2M1MmUyM2Y5ZTk0MWYzYWU5NGIwZmY0NzUyNTMzNmZkYTQxZThkYTlhZmE5ZDlkMTM5YTRiNzM1"
  },
  {
    id: 6,
    name: "Thin, Flat Hair with Damage or Breakage",
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/Volume-Concern-6-grid-438x438.jpg?context=bWFzdGVyfHJvb3R8MjAyMzJ8aW1hZ2UvanBlZ3xoNTIvaDlhLzE1ODg5Mzg0Mjc1OTk4LmpwZ3xlNzFmZmYyMmE4MjkzNDQ0ZmY2MGFmYzE0MmQxODdlYzQ4ZTE2NmUyZjQ2N2YwMzdiOTdiNjM1YmZlMGU2ZmUx"
  }
];
const Haircare = () => {
  return (
    <SimpleGrid
      display="grid"
      p={5}
      spacing={4}
      gridTemplateColumns={["1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr 1fr 1fr"]}
    >
      {data.map((el) => (
        <Box boxShadow={"2xl"} rounded={"lg"} pos={"relative"} zIndex={1} key={el.id} >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={el.imgUrl}
          />
          <Text
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
            align={"center"}
            fontWeight={500}
            p={4}
          >
            {el.name}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default Haircare;
