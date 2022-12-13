import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import DATA from "../shop.json";

export default function ShopCarouselGallery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5.2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  };

  return (
    <Container maxW={"6xl"}>
      <Stack>
        <Box>
          <HStack align="baseline">
            <Heading
              fontSize={"30px"}
              fontStyle="italic"
              textAlign={"left"}
              ml={"15px"}
            >
              T-SHIRTS
            </Heading>
            <NavLink to="products" style={{ color: "#ed64a6" }}>
              VIEW ALL
            </NavLink>
          </HStack>

          <Carousel responsive={responsive}>
            {DATA.Tshirts.map((el) => (
              <NavLink to={`products/${el.id}`} key={el.image}>
                <Stack m={"20px"} fontSize="18px" textAlign="left">
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
      </Stack>
    </Container>
  );
}
