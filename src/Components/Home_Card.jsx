import { Image, Heading, Text, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const data = [
  {
    id: 1,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/STSHD04-458x458-mobile-1.png?context=bWFzdGVyfGltYWdlc3wxNDgxMXxpbWFnZS9wbmd8aW1hZ2VzL2g0NS9oYTYvMTU4ODA4MTMyMTU3NzQucG5nfDZhYWVjMThlNjY5Yzc5NzFmMjRmZTI2ZTAxOTU3MmVlYTI3ODI5ZjgxYmI4MDc5ZjBjYzdhMjZjZjM5MzFkZTY",
    title: "REFRESH + Dry Shampoo",
    desc:
      "Absorbs oil,adds volume+balance the scalp for refreshed hair in between washes",
    price: "$39",
    rating: "5.0",
    comments: "11",
    tag: "NEW ARRIVAL"
  },
  {
    id: 2,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/ENFM030-Thumbnail-458x458.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGQ2LzE0ODgyMTk1ODk4Mzk4LmpwZ3wyYThhMjQ0NTc4YjI1ZmQ1ODY3MDE5NGMyYjk3MjA2MTRmNDQ2MzdmOGVhYzMxYTFmMDk1YmIyY2Q5NDhjMzIw",
    title: "Total RF Serum",
    desc:
      "Energize millions of surface skin cells by 200% to address all key signs of skin aging",
    price: "$175",
    rating: "4.5",
    comments: "3639",
    tag: "BEST SELLER"
  },
  {
    id: 3,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE",
    title: "R+F Lash Boost",
    desc:
      "Nightly conditioning serum gives the apprerance of longer, darker-looking skin lashes",
    price: "$155",
    rating: "4.6",
    comments: "8603",
    tag: "BEST SELLER"
  },
  {
    id: 4,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/AAEY015-458x458.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDljLzEzOTc3NTQ0NDI1NTAyLmpwZ3xiNzQ3NjJkOWU1Y2QxOWM5ZDQ4ZGQzZDA1ZjdkNzBhZmRhMjdkYzE5MTU0MWZiZjY5MDc3NzEyMjBkM2E1YThj",
    title: "Redefine Multi-Function Eye Cream",
    desc:
      "Visibly firm + improves all eye area wrinkles to restore youthful, natural contour",
    price: "$70",
    rating: "4.6",
    comments: "10283",
    tag: "NEW ARRIVAL"
  }
];

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const HomeCard = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="grid"
      gridTemplateColumns={["1fr", "1fr 1fr 1fr 1fr"]}
      p={5}
      gap={5}
    >
      {data.map((el) => (
        <Box
          border="2px solid red"
          p={2}
          key={el.id}
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image roundedTop="lg" src={el.imgUrl} />
          <Heading
            as="h3"
            fontSize="md"
            fontWeight="semibold"
            lineHeight="tight"
          
          >
            {el.title}
          </Heading>
          <Text fontSize={"1em"} textAlign="left" p={4}>
            {el.desc}
          </Text>
          <Text fontSize="lg" fontWeight="500" textAlign="left" p={4}>
            Retail Price {el.price}
          </Text>
          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={el.rating} numReviews={el.comments} />
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
export default HomeCard;
