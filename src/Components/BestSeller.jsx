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
  },
  {
    id: 5,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/ENG010-What-sIncluded-570x570.png?context=bWFzdGVyfGltYWdlc3wxODU2NXxpbWFnZS9wbmd8aW1hZ2VzL2g5YS9oNjUvMTQ5NjkwODY1NDE4NTQucG5nfGNlNDBkMDdkYzlkMDFmZDQ1MDg4ZDFmMDA0MmUzYzc2NjgwNmQ3ZDgxNWExYmY3YWRmYzcwYzYyOWY3NTkyZmQ",
    title: "R+F Instant Targeted Firming Gel",
    desc:
      "Multi-targeted skincare treatment that instantly and visibly firms, tightens + smooths.",
    price: "$105",
    rating: "3.2",
    comments: "674",
    tag: "NEW ARRIVAL"
  },
  {
    id: 6,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
    title: " REDEFINE Regimen",
    desc:
      "Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles.",
    price: "$220",
    rating: "4.7",
    comments: "7881",
    tag: "BEST ARRIVAL"
  },
  {
    id: 7,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/AAAPS01-Regimen-Explainer-AMP-MD-System-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODcyNnxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oNDEvMTQ2MDQwOTQ0MDY2ODYucG5nfGYyNGNkZTQ1ODc2Zjg3OGYzMjZjNDFmMTI4NTdmNzNkOWM0MmIzZTZhMzRkMDE0OTMwNjRkOTZiMDdiZTYyMjk",
    title: " REDEFINE AMP MD System",
    desc: "Amp up your routine with micro-exfoliation + skin-fortifying serum.",
    price: "$227",
    rating: "4.7",
    comments: "7881",
    tag: "BEST ARRIVAL"
  },
  {
    id: 8,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/IRS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3w0NzYwNXxpbWFnZS9wbmd8aW1hZ2VzL2gzMy9oMmIvMTM3NTgzODU3MTcyNzgucG5nfDU3MDNlODNlMjk0MDZiYWEwODU1NTZhMDg3NDBkNTU4M2EwNGJiY2M1OTZmN2RlMWNlM2UwYmEyZDg5YzViNDM",
    title: "  REDEFINE Intensive Renewing Serum",
    desc:
      "Wake up to vibrant skin! This supercharged serum empowers skin’s own renewing process.",
    price: "$102",
    rating: "4.8",
    comments: "4221",
    tag: "BEST ARRIVAL"
  },
  {
    id: 9,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5",
    title: " Rodan + Fields Active Hydration Body Replenish",
    desc:
      "Instantly and continuously hydrates the body for younger-looking, younger-acting skin. ",
    price: "$66",
    rating: "4.9",
    comments: "7471",
    tag: "BEST ARRIVAL"
  },
  {
    id: 10,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/ENPS125-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODU1NXxpbWFnZS9wbmd8aW1hZ2VzL2gyNi9oZjgvMTQ1MzIxNjc2MzA4NzgucG5nfGM0YTc0NjM0YWIzM2QxZDZlOTc0NTdmYjA4M2EyNDA5NGJhODg3ZDQwMGJjZjdiMTZlYTI2MjYwNjI2Y2JhZGE",
    title: "  Rodan + Fields Enhancements Micro-Dermabrasion Paste",
    desc:
      "Exfoliates away dead skin cells for smoother, vibrant-looking skin after just one use.  ",
    price: "$83",
    rating: "4.8",
    comments: "7402",
    tag: "BEST ARRIVAL"
  },
  {
    id: 11,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
    title: "   REVERSE Regimen",
    desc:
      "Brightens + refines skin’s surface while tackling the look of fine lines + dark spots.",
    price: "$195",
    rating: "4",
    comments: "2123",
    tag: "BEST VALUE"
  },
  {
    id: 12,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
    title: "  UNBLEMISH Regimen",
    desc:
      " Helps clear and prevent adult acne while visibly minimizing pores + fine lines.",
    price: "$190",
    rating: "4",
    comments: "2123",
    tag: "BEST VALUE"
  },
  {
    id: 13,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
    title: "  SOOTHE Regimen",
    desc:
      " Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier.",
    price: "$185 ",
    rating: "4.3",
    comments: "775",
    tag: "BEST VALUE"
  },
  {
    id: 14,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
    title: "  RECHARGE Regimen",
    desc:
      " Defends against lifestyle stressors that leave skin looking dull, blotchy + dehydrated. ",
    price: "$134 ",
    rating: "4.6",
    comments: "875",
    tag: "BEST VALUE"
  },
  {
    id: 15,
    imgUrl:
      "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
    title: "  SPOTLESS Regimen",
    desc:
      " For teens + young adults: Clears existing blemishes + prevents new ones from forming. ",
    price: "$89 ",
    rating: "4.6",
    comments: "1875",
    tag: "BEST VALUE"
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
const BestSeller = () => {
  return (
    <>
      <Box h={150} maxH={250} bg="#FFFAD7">
        <Heading as="h3" m="auto" textAlign="center" p={5}>
          Best Sellers
        </Heading>
        <Text as="p" fontSize={["sm", "md", "lg"]} m="auto" p={1}>
          Shop bestselling products including derm-designed skin + hair
          Regimens, face serums, hair styling treatments and more.
        </Text>
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr 1fr 1fr"]}
        p={5}
        gap={5}
      >
        {data.map((el) => (
          <Box p={2} key={el.id} rounded="lg" shadow="lg" position="relative">
            <Image roundedTop="lg" src={el.imgUrl} />
            <Heading
              as="h3"
              fontSize="md"
              fontWeight="semibold"
              lineHeight="tight"
     
            >
              {el.title}
            </Heading>
            <Text fontSize={"1em"} textAlign="left" p={2}>
              {el.desc}
            </Text>
            <Text fontSize="lg" fontWeight="500" textAlign="left" p={2}>
              Retail Price {el.price}
            </Text>
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={el.rating} numReviews={el.comments} />
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default BestSeller;
