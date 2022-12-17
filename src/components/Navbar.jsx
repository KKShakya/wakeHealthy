// krishna kumar shakya todo

import React, { useState } from "react";
import { Box,
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
            TabPanel } 
            from "@chakra-ui/react";

import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import CartItem from "./CarePageComponent/CartItem/CartItem";
import { useEffect } from "react";
import axios from "axios";




// import { useDisclosure } from "@chakra-ui/react";

import Login from "./Navbar/login";
import { LocationMenu } from "./Navbar/Menu";

const Navbar = () => {

  const [CartItems,SetCartItems]=useState([])
 

  const { isOpen, onOpen, onClose } = useDisclosure()

  const OpenCartDrawer =()=>{
    axios.get(` http://localhost:8080/Lab_Test_Cart`).then((response)=>SetCartItems(response.data))
    onOpen()
  }

  useEffect(()=>{
        axios.get(` http://localhost:8080/Lab_Test_Cart`).then((response)=>SetCartItems(response.data))
  },[])
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
        {/* ?logo */}
        <Link href="/" color="#fff" textDecoration={"none"}>
          Logo
        </Link>

        {/* menus */}
        <Flex
          justify={"space-between"}
          gap="4em"
          textTransform={"uppercase"}
          color="white"
          ml="120px"
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
          <Flex justify={"center"} alignItems="center" gap="10px">
            <Box mt='3px' color="#999d9d"><LocationMenu/></Box>
            <IoLocationOutline  color="#fff" h="26px" w="26px"/>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            <Button
              p="7px 15px"
              colorScheme={'#161821'}
              color="#fff"
              border="1px solid white"
              borderRadius={"5px"}
            >
              GET APP
            </Button>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            
            <Login/>
          </Flex>
          <Flex justify={"center"} alignItems="center">
            <IoCartOutline color="#fff" onClick={OpenCartDrawer}/>
                    <Drawer onClose={onClose} isOpen={isOpen} size={"xs"} bg="black">
                        <DrawerOverlay />
                          <DrawerContent>
                              <DrawerCloseButton />
                              <DrawerHeader> Your Cart</DrawerHeader>
                              <DrawerBody>
                                  <Tabs isFitted variant='enclosed'>
                                         
                                          <TabList mb='1em'>
                                            <Tab>Lab Test</Tab>
                                            <Tab>Cults Soprt</Tab>
                                          </TabList>
                                          
                                          <TabPanels>
                                            <TabPanel>
                                               {
                                                 CartItems.map((item)=>(
                                                   <CartItem  key={item.id} cartitem={item}/>
                                                 ))
                                                 }
                                              
                                            </TabPanel>
                                            <TabPanel>
                                              <p>two!</p>
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
