import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ShopCarousel from "./shop.components/shop.carousel";
import ShopCarouselGallery from "./shop.components/CarouselGallery";
import ShopNavbar from "./shop.components/ShopNavbar";

export default function ShopHome() {
  return (
    <Box>
      <ShopNavbar />
      <ShopCarousel />
      <ShopCarouselGallery />
    </Box>
  );
}
