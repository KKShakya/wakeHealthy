// krishna kumar shakya todo
import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  return (
    <Box>
      <Flex
        justify={"space-around"}
      
        h="60px"
        w="100%"
        mx="auto"
        alignItems={"center"}
        className="navabr_home"
        bgGradient={
          " linear-gradient(to bottom, #171A26, rgba(23, 26, 38, 0.0001))"
        }
        bg="#161821"
      >
        {/* ?logo */}
        <Link href="/" color="#fff" textDecoration={"none"}>
          Logo
        </Link>

        {/* menus */}
        <Flex
          justify={"space-between"}
          gap="4em"
          textTransform={"uppercase"}
          color="white"
          ml="120px"
        >
          <Link href="/fitness" color="#fff" textDecoration={"none"}>
            Fitness
          </Link>
          <Link href="/care" color="#fff" textDecoration={"none"}>
            Care
          </Link>
          <Link href="/mind" color="#fff" textDecoration={"none"}>
            Mind
          </Link>
          <Link href="/store" color="#fff" textDecoration={"none"}>
            Store
          </Link>
        </Flex>

        {/* cart-login */}
        <Flex justify={"space-between"} gap="1em">
          <Flex justify={"center"} alignItems="center" gap="10px">
            <Box mt='3px' color="#999d9d">Banglore</Box>
            <IoLocationOutline  color="#fff" h="26px" w="26px"/>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            <Button
              p="7px 15px"
              bg="transparent"
              color="#fff"
              borderColor="#fff"
              borderRadius={"5px"}
            >
              GET APP
            </Button>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            <AiOutlineUser color="#fff"/>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            <IoCartOutline color="#fff"/>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
