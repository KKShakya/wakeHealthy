import React from "react";
import { NavLink } from "react-router-dom";
import {
  border,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
  Link,
  useColorModeValue,
  useDisclosure,
  Icon,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import { CiHeart, CiFaceSmile, CiBag1 } from "react-icons/ci";

export default function ShopNavbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"sticky"} top="0" bg={"white"} boxShadow={"lg"}>
      <Flex justify={"space-evenly"} align={"center"}>
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
          alt="logo"
          h={8}
          m={4}
        />
        <DesktopNav />
        <Flex align={"center"} h={"16"} justify={"space-around"}>
          <NavLink
            to="/login"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CiFaceSmile />
          </NavLink>

          <NavLink
            to="/signup"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CiHeart />
          </NavLink>
          <NavLink
            to="/signup"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CiBag1 />
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} align={"center"}>
      {NAV_LINKS.map((navItem) => (
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <NavLink to="products">
              <Heading
                size={"xs"}
                borderBottom="3px solid white"
                p={{ lg: "5", md: "2" }}
              >
                {navItem.title}
              </Heading>
            </NavLink>
          </PopoverTrigger>

          {navItem.children && (
            <PopoverContent
              boxShadow={"xl"}
              p={4}
              minW={"sm"}
              mt={-1}
              border="0"
            >
              <Grid gridTemplateColumns={"repeat(2,1fr)"}>
                {navItem.children.map((child) => (
                  <DesktopSubNav key={child.subtitle} {...child} />
                ))}
              </Grid>
            </PopoverContent>
          )}
        </Popover>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ title, to, subtitle }) => {
  return (
    <Link
      href={to}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {title}
          </Text>
          <Text fontSize={"sm"}>{subtitle}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

let NAV_LINKS = [
  {
    title: "men",
    to: "men",
    children: [
      { subtitle: "T-Shirt", to: "#" },
      { subtitle: "Jeans", to: "#" },
      { subtitle: "Formal Shirt", to: "#" },
      { subtitle: "Formal Trouser", to: "#" },
      { subtitle: "Casual Shirt", to: "#" },
      { subtitle: "Casual Trouser", to: "#" },
    ],
  },
  {
    title: "women",
    to: "women",
    children: [
      { subtitle: "T-Shirt", to: "#" },
      { subtitle: "Casual Shirt", to: "#" },
      { subtitle: "Formal Shirt", to: "#" },
    ],
  },
  { title: "cycles", to: "cycles" },
  { title: "accessories", to: "accessories" },
  { title: "suppliments", to: "suppliments" },
  { title: "equipment", to: "equipment" },
];
