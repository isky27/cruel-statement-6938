import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utilis/Auth";
import { Box, Button, Stack, Text, Image } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
const links = [
  { id: "1", title: "HOME", path: "/" },
  { id: "2", title: "ABOUT", path: "/about" },
  { id: "3", title: "PRODUCTS", path: "/products" },
  { id: "4", title: "PROFILE", path: "/profile" },
  { id: "5", title: "BEST SELLER", path: "/best-seller" }
];
function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    // <div>
    //   <NavLink to="/"> Home</NavLink>
    //   <NavLink to="/about">About</NavLink>
    //   <NavLink to="/products">Product</NavLink>
    //   <NavLink to="/profile">Profile</NavLink>
    //   {!auth.user && <NavLink to="/login">Login</NavLink>}
    // </div>
    // ====================================================================
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
          {auth.user ? (
            <>
              {
                <>
                  <NavLink to="/profile">
                    <Button
                      as={"a"}
                      fontSize={"sm"}
                      fontWeight={400}
                      variant={"link"}
                      margin="auto"
                    >
                      {auth.user} &nbsp; <FaUserAlt />
                    </Button>
                  </NavLink>
                  <NavLink to="/cart">
                    <Button
                      as={"a"}
                      fontSize={"sm"}
                      fontWeight={400}
                      variant={"link"}
                      margin="auto"
                    >
                      Cart &nbsp; <FaUserAlt />
                    </Button>
                  </NavLink>
                  <NavLink to="/signup">
                    <Button
                      display={{ base: "none", md: "inline-flex" }}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={"white"}
                      bg={"pink.400"}
                      margin="auto"
                      _hover={{
                        bg: "pink.300"
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </NavLink>
                </>
              }
            </>
          ) : (
            <>
              <NavLink to="/login">
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  margin="auto"
                >
                  Login &nbsp; <FaUserAlt />
                </Button>
              </NavLink>
              {/* to cart page later use it in protected route */}
              <NavLink to="/cart">
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  margin="auto"
                >
                  Cart &nbsp; <FaUserAlt />
                </Button>
              </NavLink>
              {/*  */}
              <NavLink to="/admin">
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  margin="auto"
                >
                  Admin Login &nbsp; <FaUserAlt />
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  margin="auto"
                  _hover={{
                    bg: "pink.300"
                  }}
                >
                  Sign Up
                </Button>
              </NavLink>
            </>
          )}
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
  );
}
export default Navbar;
