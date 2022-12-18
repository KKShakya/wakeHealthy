// krishna kumar shakya todo






import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,} 
        from "@chakra-ui/react";



import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";



import CartItem from "./CarePageComponent/CartItem/CartItem";
import { useEffect } from "react";
import axios from "axios";
import EmptyCart from "./EmptyCart/EmptyCart";


import Login from "./Navbar/login";



import { BaseMenu, LocationMenu } from "./Navbar/Menu";

import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/Auth/auth.action";
import Logo from "../Images/Logo.png";

export const LogoutUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { currentUser } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log("fhdsjkfgsdgfhdsjgfhs")
    dispatch(signout());
    //  console.log(currentUser);
  };
  return (
    <>
      <Button onClick={onOpen} borderRadius="50%">
        {currentUser[0]}
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent bg="black" border="1px solid #fff">
          <ModalCloseButton color={"#fff"} />
          <ModalBody>
            {/* this is from component */}
            <Flex m="10%" flexDirection={"column"} gap="20px">
              <Center color="#fff">Are You Sure You Want To Log Out?</Center>
              <Center fontSize="2rem" color="#fff">{currentUser}</Center>

              <Center>
                <Box
                  as="button"
                  bg="red"
                  color="#fff"
                  onClick={handleSubmit}
                  p="10px"
                  borderRadius="8px"
                >
                  Log Out
                </Box>
              </Center>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Navbar = () => {

  const { currentUser } = useSelector((store) => store.auth);
  // console.log(currentUser);

  const [CartItems, SetCartItems] = useState([]);

  const [RenderCartItems,SetRenderCartItems] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const OpenCartDrawer = () => {
    axios

      .get(` https://wakehealhty-update.onrender.com/CareCart`)

      .then((response) => SetCartItems(response.data));
    onOpen();
  };

  useEffect(() => {
    axios

      .get(`https://wakehealhty-update.onrender.com/CareCart`)

      .then((response) => SetCartItems(response.data));
  }, [RenderCartItems]);


  return (
    <Box>
      <Flex
        justify={"space-around"}
        h="60px"
        w="100%"
        mx="auto"
        alignItems={"center"}
        className="navabr_home"
        bgGradient={
          " linear-gradient(to bottom, #171A26, rgba(23, 26, 38, 0.0001))"
        }
        bg="#161821"
        zIndex={"1"}
      >

        <Box display={{ base: "flex",  md: "flex",lg:"none"}}>

          <BaseMenu />
        </Box>

        {/* ?logo */}
        <Link href="/" color="#fff" textDecoration={"none"}>
          <Box w="60px">
            <Image src={Logo} />
          </Box>
        </Link>

        {/* menus */}

        <Flex
          justify={"space-between"}
          gap="4em"
          textTransform={"uppercase"}
          color="white"
          ml="120px"

          display={{ base: "none", sm: "none", md: "none",lg:"inherit" }}

        >
          <Link href="/fitness" color="#fff" textDecoration={"none"}>
            Fitness
          </Link>
          <Link href="/care" color="#fff" textDecoration={"none"}>
            Care
          </Link>
          <Link href="/mind" color="#fff" textDecoration={"none"}>
            Mind
          </Link>
          <Link href="/store" color="#fff" textDecoration={"none"}>
            Store
          </Link>
        </Flex>

        {/* cart-login */}
        <Flex justify={"space-between"} gap="1em">
          <Flex
            justify={"center"}
            alignItems="center"
            gap="10px"
            display={{ base: "none", sm: "none", md: "inherit" }}
          >
            <Box mt="3px" color="#999d9d">
              <LocationMenu />
            </Box>
            <IoLocationOutline color="#fff" h="26px" w="26px" />
          </Flex>
          <Flex
            justify={"center"}
            alignItems="center"
            display={{ base: "none", sm: "none", md: "inherit" }}
          >
            <Button
              p="7px 15px"
              colorScheme={"#161821"}
              color="#fff"
              border="1px solid white"
              borderRadius={"5px"}
              onClick={() =>
                (document.documentElement.scrollTop = document.scrollHeight)
              }
            >
              GET APP
            </Button>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            {currentUser === "" ? <Login /> : <LogoutUser />}
          </Flex>
          <Flex justify={"center"} alignItems="center">

            <IoCartOutline color="#fff" onClick={OpenCartDrawer} />
           
            <Drawer onClose={onClose} isOpen={isOpen} size={"xs"} bg="black">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader> Your Cart</DrawerHeader>
                <DrawerBody>
                  <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                      <Tab>Lab Test {CartItems.length}</Tab>
                      <Tab>Cults Soprt</Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        {CartItems.length !== 0 ? (
                          CartItems.map((item) => (
                            <CartItem key={item.id} cartitem={item} SetRenderCartItems={SetRenderCartItems} RenderCartItems={RenderCartItems}/>
                          ))
                        ) : (
                          <EmptyCart
                            text={"BOOK TEST ON CARE.FIT"}
                            link={"care"}
                          />
                        )}
                      </TabPanel>
                      <TabPanel>
                        <EmptyCart text={"EXPLORE CULTSPORT"} link={"store"} />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </DrawerBody>
              </DrawerContent>
            </Drawer>



          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
