import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Spacer,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
const links = [
  { id: "1", title: "SKINCARE", path: "/skincare" },
  { id: "2", title: "HAIRCARE", path: "/haircare" },
  { id: "3", title: "BEST SELLER", path: "/best_seller" },
  { id: "4", title: "SPECIAL OFFERS", path: "/special_offer" },
  { id: "5", title: "ABOUT", path: "/about" },
  {id:"6",title:"Admin",path:"/admin"}
];

function Navbar() {
  return (
    <div>
      <Stack
        w={"-moz-max-content"}
        direction="column"
        spacing={1}
        align="center"
        justifyContent="space-around"
        position="-webkit-sticky"
      >
        <Box
          w="100%"
          display="flex"
          justifyContent="space-evenly"
          alignContent="center"
        >
          <Text
            as="h2"
            fontSize={["14px", "16px", "22px"]}
            justifyContent="center"
            margin="auto"
            textTransform="capitalize"
          >
            Find a consulatant
          </Text>
          <Box w="250px">
            <NavLink to="/">
              <Image
                objectFit="fill"
                src="https://i.postimg.cc/rpt4V8hH/Web-capture-8-11-2022-20428-app-logo-com.jpg"
              />
            </NavLink>
          </Box>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            margin="auto"
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              margin="auto"
            >
              Sign In &nbsp; <FaUserAlt />
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              margin="auto"
              _hover={{
                bg: "pink.300"
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
        <hr />
        <Box fontSize={["18px", "24px", "32px"]} direction="row">
          {links.map((link) => (
            <NavLink
              eventKey={`link-${link.id}`}
              key={link.path}
              to={link.path}
              end
            >
              <Button
                colorScheme="cyan"
                variant="ghost"
                textTransform="capitalize"
              >
                {link.title}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Stack>
    </div>
  );
}

export default Navbar;
