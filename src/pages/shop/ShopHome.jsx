import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import ShopCarousel from "./shop.components/ShopCarousel";
import ShopCarouselGallery from "./shop.components/CarouselGallery";
import CartDrower from "./CartDrower";

export default function ShopHome() {
  return (
    <Box>
      {/* <ShopNavbar /> */}
      <ShopCarousel />
      <ShopCarouselGallery />
    </Box>
  );
}
