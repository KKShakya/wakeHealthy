import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Divider,
  VStack,
  HStack,
  Stack,
  Image,
  Box,
  ButtonGroup,
  Select,
  Link,
  useToast,
} from "@chakra-ui/react";
import { SmallCloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  get_cart,
  delete_from_cart,
  update_cart,
} from "../../store/Cart/cart.action";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CheckoutModal from "./ShopComponents/CheckoutModal";

export default function CartDrower({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const { CART, item_deleted } = useSelector((store) => store.cart);
  const toast = useToast();

  useEffect(() => {
    dispatch(get_cart());
  }, []);

  let cartTotal = CART.reduce((acc, el) => acc + +el.price * el.quantity, 0);

  const handleQuantity = (e, id) => {
    let quantity = e.target.value;
    dispatch(update_cart(id, quantity));
  };

  return (
    <>
      <Text onClick={onOpen} w={"100%"} p="10px">
        {title}
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Yout Cart</DrawerHeader>
          <Divider />
          <DrawerBody>
            <VStack gap={"5px"}>
              {CART.map((product) => (
                <Box key={product.id}>
                  <HStack gap={"5px"}>
                    <Image src={product.image} w="35%" p={"5px"} />
                    <Stack>
                      <HStack justify={"space-between"}>
                        <Text>{product.brand}</Text>
                        <DeleteIcon
                          cursor={"pointer"}
                          color="gray"
                          onClick={() => {
                            dispatch(delete_from_cart(product.id));
                          }}
                        />
                      </HStack>
                      <Text fontSize="20px">{product.title}</Text>
                      <Text>Size : {product.size}</Text>
                      <Text>Price : ₹ {product.price}</Text>
                      <HStack>
                        <Text>Quantity</Text>
                        <Select
                          w={"auto"}
                          onChange={(e) => handleQuantity(e, product.id)}
                          value={product.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Select>
                      </HStack>
                    </Stack>
                  </HStack>
                  <Divider />
                </Box>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent={"space-between"}>
            <Button>Cart Total : ₹ {cartTotal}</Button>
            <CheckoutModal cartTotal={cartTotal} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
