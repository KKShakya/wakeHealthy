import React from "react";
import { Box, Flex, Link, Button, Image, Grid, Text } from "@chakra-ui/react";
import { AtHomeCard, CardWithCarousel } from "./CardLayouts";

import style from "../../Styles/FitnessHome.module.css";
import { CultpassCard } from "./FitnesscardData";

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
        <Box className={style.bgImage_scroll} position={"relative"} w="100%">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/7996a88c-8958-4bba-9bbd-bbf0433598ee.png"
            alt="bgImage"
          />
          {/* butotn on image */}
          <Button
            bg="#fff"
            color="red"
            _hover={{ color: "black" }}
            className={style.image_btn}
          >
            Try for free
          </Button>
          {/* culpass boxes */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
            className={style.bgImage_grid}
            gap="20px"
          >
            {CultpassCard.map((card)=>(
              <Flex
              className={style.bgImage_Flex}
                justify={"center"}
                align="center"
                key={card.id}
              >
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                  alt="cultpass"
                />
                <Image
                  src={card.img}
                  alt="cultpass"
                />
                <Text color="#fff">Starting at {card.price} / month</Text>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Flex>

      {/* <AtHomeCard /> */}

      {/* <CardWithCarousel/> */}
    </Box>
  );
}

export default FitnessHome;
