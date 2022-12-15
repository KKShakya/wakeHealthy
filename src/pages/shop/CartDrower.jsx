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

export default function CartDrower() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const { CART, TOTAL } = useSelector((store) => store.cart);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    dispatch(get_cart());
  }, []);

  useEffect(() => {
    setCartTotal((prev)=>prev+TOTAL)
    console.log(TOTAL);
  }, [TOTAL]);

  const handleQuantity = (e, product) => {
    let quantity = e.target.value;
    let updated = { ...product, quantity };
    dispatch(update_cart(updated));
  };

  const handleTotal = () => {};

  return (
    <>
      <Text onClick={onOpen}>View Cart</Text>
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
                          onClick={() => dispatch(delete_from_cart(product.id))}
                        />
                      </HStack>
                      <Text fontSize="20px">{product.title}</Text>
                      <Text>Size : {product.size}</Text>
                      <Text>Price : ₹ {product.price}</Text>
                      <HStack>
                        <Text>Quantity</Text>
                        <Select
                          w={"auto"}
                          onChange={(e) => handleQuantity(e, product)}
                          value={product.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Select>
                      </HStack>
                    </Stack>
                  </HStack>
                  <Divider />
                </Box>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme={"red"} w={"100%"} onClick={handleTotal}>
              Buy Now ( {CART.length} items )
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
