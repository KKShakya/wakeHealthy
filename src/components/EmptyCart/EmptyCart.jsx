import { Box, Text,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./EmptyCart.css"

const EmptyCart = ({text,link}) => {
  return (
    <Box className='emptycart_box' textAlign="center"  m="auto">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_220,q_auto:eco,dpr_1,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg" alt="emptycart_image"  width="200px"/>
        <Text fontSize="17px">Your cart is empty</Text>
        <Text fontSize="12px" width="170px" ml="30px">Looks like you haven't made any purchases yet</Text>

        <Link to={`/${link}`}><button >{text}</button></Link>
    </Box>
  )
}

export default EmptyCart