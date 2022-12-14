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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_cart } from "../../store/Cart/cart.action";

export default function CartDrower() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { CART } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cart());
  }, []);

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
                      <Text>{product.brand}</Text>
                      <Text fontSize="20px">{product.title}</Text>
                      <Text>Size : {product.size}</Text>
                      <Text fontSize="20px">₹ {product.price}</Text>
                      <ButtonGroup
                        size={"sm"}
                        colorScheme={"red"}
                        variant="outline"
                      >
                        <Button>-</Button>
                        <Button>{product.quantity}</Button>
                        <Button>+</Button>
                      </ButtonGroup>
                    </Stack>
                  </HStack>
                  <Divider />
                </Box>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme={"red"} w={"100%"}>
              Buy Now
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
