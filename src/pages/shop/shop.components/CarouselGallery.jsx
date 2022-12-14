import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

import React from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import DATA from "../shop.json";

export default function ShopCarouselGallery() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 519, min: 0 },
      items: 1.2,
    },
  };

  return (
    <Stack>
      <Box>
        <br />
        <HStack align="baseline">
          <Heading
            fontSize={"30px"}
            fontStyle="italic"
            textAlign={"left"}
            ml={"15px"}
          >
            T-SHIRTS
          </Heading>
          <NavLink to="products/Tshirts" style={{ color: "#ed64a6" }}>
            VIEW ALL
          </NavLink>
        </HStack>

        <Carousel responsive={responsive}>
          {DATA.Tshirts.map((el) => (
            <NavLink to={`products/Tshirts/${el.id}`} key={el.image}>
              <Stack m={"15px"} fontSize="18px" textAlign="left">
                <Image src={el.image} alt="t-shirts" />
                <Text>{el.brand}</Text>
                <Text fontWeight={"bold"}>{el.title}</Text>
                <HStack>
                  <Text fontWeight={"bold"}>₹ {el.price}</Text>
                  <strike>{el.strike}</strike>
                  <Text fontWeight={"bold"} color="pink.400">
                    {el.discount}% off
                  </Text>
                </HStack>
              </Stack>
            </NavLink>
          ))}
        </Carousel>
      </Box>

      <Box>
        <HStack align="baseline">
          <Heading
            fontSize={"30px"}
            fontStyle="italic"
            textAlign={"left"}
            ml={"15px"}
          >
            Cycles
          </Heading>
          <NavLink to="products/Cycles" style={{ color: "#ed64a6" }}>
            VIEW ALL
          </NavLink>
        </HStack>
        <Carousel responsive={responsive}>
          {DATA.Cycles.map((el) => (
            <NavLink to={`products/Cycles/${el.id}`} key={el.image}>
              <Stack m={"15px"} fontSize="18px" textAlign="left">
                <Image src={el.image} alt="t-shirts" />
                <Text>{el.brand}</Text>
                <Text fontWeight={"bold"}>{el.title}</Text>
                <HStack>
                  <Text fontWeight={"bold"}>₹ {el.price}</Text>
                  <strike>{el.strike}</strike>
                  <Text fontWeight={"bold"} color="pink.400">
                    {el.discount}% off
                  </Text>
                </HStack>
              </Stack>
            </NavLink>
          ))}
        </Carousel>
      </Box>

      <Box p={"50px"}>
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1312,ar_1312:560/dpr_2/image/vm/12349520-7d24-4470-911c-d8b9c78f23f8.png" />
      </Box>
    </Stack>
  );
}
