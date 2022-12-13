import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import ShopCarousel from "./shop.components/shop.carousel";
import ShopCarouselGallery from "./shop.components/CarouselGallery";
import ShopNavbar from "./shop.components/ShopNavbar";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./shop.components/SingleProduct";

export default function ShopHome() {
  return (
    <Box>
      {/* <ShopNavbar /> */}
      <ShopCarousel />
      <ShopCarouselGallery />
    </Box>
  );
}
