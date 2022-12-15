import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Quote = () => {
 
  return (
    <Box textAlign="left" p="20px 10px" fontFamily="Arial" >
        <Text color="#6E6E6E"  fontSize={{ base: '24px', md: '40px', lg: '60px' }}><b>THE BEST</b> </Text>
        <Text color="#CCCCCC"  fontSize={{ base: '24px', md: '30px', lg: '48px' }}><b>DOCTOR GIVES</b> </Text>
        <Text color="#CCCCCC"  fontSize={{ base: '10px', md: '20px', lg: '30px' }}><b>THE LEAST MEDICINE</b> </Text>

        

    </Box>
  )
}

export default Quote