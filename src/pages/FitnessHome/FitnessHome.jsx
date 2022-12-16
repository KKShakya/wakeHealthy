import React from "react";
import { Box, Flex, Link, Button, Image } from "@chakra-ui/react";
import { At_Home_Card, Card_With_Carousel } from "./CardLayouts";

const FitnessNavbar = () => {
  return (
    <Box>
      <Flex
        justify={"space-around"}
        h="60px"
        w="100%"
        mx="auto"
        alignItems={"center"}
        className="navabr_home"
        bg="#393a3b"
        zIndex={"1"}
      >
        {/* ?logo */}
        <Box></Box>

        {/* menus */}
        <Flex justify={"space-between"} gap="6em" color="white" ml="120px">
          <Link href="/fitness" color="#fff" textDecoration={"none"}>
            ELITE Pass
          </Link>
          <Link href="/proPass" color="#fff" textDecoration={"none"}>
            PRO Pass
          </Link>
          <Link href="/HomePass" color="#fff" textDecoration={"none"}>
            Home Pass
          </Link>
          <Link href="/transform" color="#fff" textDecoration={"none"}>
            Transform
          </Link>
          <Link href="/gyms" color="#fff" textDecoration={"none"}>
            Luxury Gyms
          </Link>
        </Flex>

        {/* cart-login */}
        <Button variant="solid" bg="#4d4e4f" color="#fff">
          Compare Plans
        </Button>
      </Flex>
    </Box>
  );
};

function FitnessHome() {
  return (
    <Box>
      <FitnessNavbar />
      <Flex>
        <Box className="bgImage_scroll">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/7996a88c-8958-4bba-9bbd-bbf0433598ee.png"
            alt="bgImage"
          />
        </Box>
      </Flex>
      <At_Home_Card />

      <Card_With_Carousel/>
    </Box>
  );
}

export default FitnessHome;
