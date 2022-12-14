import React from 'react';
import { Box, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Menu, Button, Input} from '@chakra-ui/react';
import {CiSearch} from'react-icons/ci';
export const LocationMenu = ()=> {
  return (

     <Menu >
  <MenuButton as={Box} colorScheme='#999d9d' >
    Banglore
  </MenuButton>
  <MenuList p="10px" bg="#171a26" right="-90px" position={"fixed"}>
    <MenuGroup >
      <Button border="1px solid gray" bg="#171a26">
      <CiSearch/>
      <Input placeholder='Search Your location' variant='unstyled'/>
      </Button>
    </MenuGroup>

    <MenuGroup title='Popular'>
    <MenuDivider />
    </MenuGroup>
    <MenuGroup title='others'>
    <MenuDivider />
     
    </MenuGroup>
  </MenuList>
</Menu>
  
  )
}


export const baseMenu = ()=> {
  return (
    <div>Menu</div>
  )
}