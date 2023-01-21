import { Button, HStack,Box,Image } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartDrower from "../CartDrower";
import Logo from "../../../Images/Logo1.png";
export default function ShopNavbar() {
  return (
    <HStack
      position={"sticky"}
      top="0"
      bg={"white"}
      as={"navbar"}
      gap={"50px"}
      justify="center"
      zIndex={"1001"}
      fontWeight="bold"
      boxShadow={"lg"}
    >
      <NavLink to={"/"}><Box w={[12,30,38]} ><Image w="100%" src={Logo} alt='img' borderRadius={'10%'}/></Box></NavLink>
      <NavLink to={"/store/products/Tshirts"}>T-SHIRTS</NavLink>
      <NavLink to={"/store/products/Cycles"}>CYCLES</NavLink>
      <Link>
        <CartDrower title="CART" />
      </Link>
    </HStack>
  );
}
