import React from "react";
import {
  Box,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Menu,
  Button,
  Input,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Drawer,
  useDisclosure,
  Flex,
  VStack,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { HamburgerIcon } from "@chakra-ui/icons";
import Login from "./login";
import { useSelector } from "react-redux";
import { LogoutUser } from "../Navbar";

/////////////////////////////////
////////////////////////////

export const LocationMenu = () => {
  return (
    <Menu>
      <MenuButton as={Box} colorScheme="#999d9d">
        Banglore
      </MenuButton>
      <MenuList
        p="10px"
        bg="#171a26"
        right="-90px"
        position={"fixed"}
        maxH="60vh"
        overflowY={"scroll"}
      >
        <MenuGroup>
          <Button border="1px solid gray" bg="#171a26">
            <CiSearch />
            <Input placeholder="Search Your location" variant="unstyled" />
          </Button>
        </MenuGroup>

        <MenuGroup title="Popular">
          <MenuDivider />
          <MenuItem bg="none">Banglore</MenuItem>
          <MenuItem bg="none">Chennai</MenuItem>
          <MenuItem bg="none">KolKata</MenuItem>
          <MenuItem bg="none">Delhi</MenuItem>
          <MenuItem bg="none">Indore</MenuItem>
        </MenuGroup>
        <MenuGroup title="others">
          <MenuDivider />
          <MenuItem bg="none">Imphal</MenuItem>
          <MenuItem bg="none">Ranchi</MenuItem>
          <MenuItem bg="none">Jabalpur</MenuItem>
          <MenuItem bg="none">Patna</MenuItem>
          <MenuItem bg="none">Nashik</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

///////////////////////////////////////

/////////////////////

////////////////////

////////////////

/////////////

// this is a drwaer that will open in navbr aif screen size is small

export const BaseMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useSelector((store) => store.auth);
  return (
    <>
      <Button color="#fff" onClick={onOpen} h="30px" w="30px" bg="#161821">
        <HamburgerIcon color="#fff" />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} w={{base:"10%",sm:"20%",md:"inherit"}}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="#fff" />
          <DrawerHeader bg="#161821" color="#fff">
            Help YourSelf !
          </DrawerHeader>

          <DrawerBody bg="#161821" color="#fff">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
             align="start"
            >
              <Flex
              justify={"space-between"}
              gap="2em"
              textTransform={"uppercase"}
              flexDirection={"column"}
              color="white"
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

            <Flex justify={"space-between"} gap="1em"   flexDirection="column">
       
         
          <Flex justify={"center"} alignItems="center">
            {currentUser === "" ? <Login /> : <LogoutUser />}
          </Flex>
          <Flex justify={"center"} alignItems="center">
            cart
          </Flex>
        </Flex>
            </VStack>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
