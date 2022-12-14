import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel ,Box,Text} from '@chakra-ui/react'
import React from 'react'
import { VscCircleFilled } from 'react-icons/vsc'
import { useToast } from '@chakra-ui/react'

const Accordion_Item = ({item}) => {

   
    const toast = useToast()

    const handleClick =()=>{
     
        toast({
            title: 'Thanks for your feedback.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            
          })
    }


  return (
          <AccordionItem >

                <h2>
                    <AccordionButton h="60px">
                        <Box 
                            as="span" 
                            flex='3' 
                            display='flex' 
                            flexDirection="row" 
                            alignItems="center" 
                            textAlign='left' >
                                 
                                 <VscCircleFilled/>  
                                 
                                 <Text 
                                    pl="15px" 
                                    color="#FFFFFFCC" 
                                    fontSize={{ "base": '15px', "md": '18px', "lg": '22px' }}
                                   >{item.que}  
                                </Text>  
                         </Box>

                        <AccordionIcon />

                    </AccordionButton>
                </h2>

                <AccordionPanel 
                    pb={3}  
                    pl="50px" 
                    textAlign="left" 
                    color="#FFFFFFCC" 
                    fontSize={{ "base": '14px', "md": '16px', "lg": '18px' }}
                    w={{ "base": '90%', "md": '70%', "lg": '60%' }}>

                    {item.ans}
                    <br />
                    <br />
                    <Box w="300px" display="flex" justifyContent="space-around"  alignItems="center" >
                        
                        <Text fontSize="15px" color="#888E9E">Do you find this helpfull ?</Text>
                        <Text fontSize="15px" color="#888E9E" onClick={handleClick}>YES</Text>
                        <Text fontSize="15px" color="#888E9E" onClick={handleClick}>NO</Text>

                    </Box>
                    
                </AccordionPanel>

        </AccordionItem>
  )
}

export default Accordion_Item  