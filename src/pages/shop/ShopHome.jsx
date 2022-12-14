import React from "react";
import { Box } from "@chakra-ui/react";
import ShopCarousel from "./ShopComponents/ShopCarousel";
import ShopCarouselGallery from "./ShopComponents/CarouselGallery";

export default function ShopHome() {
  return (
    <Box>
      {/* <ShopNavbar /> */}
      <ShopCarousel />
      <ShopCarouselGallery />
    </Box>
  );
}
