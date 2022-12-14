
import "../../Styles/CareBooking.css"
import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight,BiRupee } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { MdShop } from "react-icons/md";



import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const CareBooking = () => {
  return (
    <Box className='Booking_main_div'>

         <Box className="Book_div">
            <Box className="image_div">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/WomensHealthScreening_Hero.png" alt="" />
            </Box>
           
           
            <Box className="Book_now_div">

                    <Breadcrumb spacing='4px' fontSize="13px" separator={<BiChevronRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink color="#00000080" href='#'>Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink color="#00000080" href='#'>Care   </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem >
                                <BreadcrumbLink color="#00000080" href='#'>Diagnostic Test</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color="#000000" href='#'>Thyroid Screening (T3,T4,TSH)</BreadcrumbLink>
                            </BreadcrumbItem>
                    
                    </Breadcrumb>

                        <Box className="Booking_card">
                        
                                    <Box className="card_left_div">
                                        <Text fontSize="20px">Thyroid Screening (T3,T4,TSH)</Text>
                                        <Text fontSize="13px" color="#888E9E" mt="15px">Get your elders' health checked today.</Text>
                                        <Text fontSize="13px"  display="flex"  alignItems="center" color="#888E9E" mt="15px"> <BsStopwatch/>  18 Test</Text>

                                        <Text fontSize="13px" display="flex" mt="10px" alignItems="center" color="#888E9E" ><MdShop/>  Report Ready in 72 Hours</Text>

                                    </Box>


                                    <Box className="card_right_div">
                                        <Box pb="40px" textAlign="top" h="50%" display="flex" justifyContent="space-around" alignItems="center" >  
                                            
                                            <Text display="flex" justifyContent="center" alignItems="center" color="#888E9E"><BiRupee/>5000  </Text>
                                            <Text display="flex" justifyContent="center" alignItems="center"><BiRupee/>9000  </Text>

                                        </Box>
                                        
                                        <Box h="50%"  >
                                        <button   className="butnow_btn" ><b>BUY NOW</b>  </button>
                                        </Box>
                                            

                                    </Box>

                        </Box>
            </Box>
         </Box>
    </Box>
  )
}

export default CareBooking