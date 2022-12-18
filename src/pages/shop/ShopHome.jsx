import React from "react";
import { Box } from "@chakra-ui/react";
import ShopCarousel from "./ShopComponents/ShopCarousel";
import ShopCarouselGallery from "./ShopComponents/CarouselGallery";
import ShopNavbar from "./ShopComponents/ShopNavbar";
import Footer from "../../components/Footer";

export default function ShopHome() {
  return (
    <Box>
      <ShopNavbar />
      <ShopCarousel />
      <ShopCarouselGallery />
      <Footer />
    </Box>
  );
}
