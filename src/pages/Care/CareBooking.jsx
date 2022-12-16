
import "../../Styles/CareBooking.css"
import axios from "axios"
import React, { useState,Component  } from 'react'

import { Box,Text } from '@chakra-ui/react'
import { BiChevronRight,BiRupee } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { MdShop } from "react-icons/md";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    
  } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import TestCarousel from "../../components/CarePageComponent/Carousel/TestCarousel";

const CareBooking = () => {

   const [TestData,SetTestData]=useState({})
   const [Loading,SetLoading]=useState(true)


let param=useParams()

let {Booking_id}=param

React.useEffect(()=>{
    axios.get(`http://localhost:8080/Lab_Test_Card/${Booking_id}`)
    .then((data)=>{
        
                    SetTestData(data.data)
                    SetLoading(false)
    })

},[])

  return (
    <Box className='Booking_main_div'>

         <Box className="Book_div">
            <Box className="image_div">
                <img src={TestData.image} alt="" />
            </Box>
           
           
                <Box className="Book_now_div">

                            <Breadcrumb spacing='4px' fontSize="13px" separator={<BiChevronRight color='gray.500' />}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink color="#00000080" href='#'>Home</BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink color="#00000080" href='/care'>Care   </BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem >
                                        <BreadcrumbLink color="#00000080" href='#'>Diagnostic Test</BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink color="#000000" href='#'>{TestData.title}</BreadcrumbLink>
                                    </BreadcrumbItem>
                            
                            </Breadcrumb>

                            <Box className="Booking_card">
                            
                                <Box className="card_top_div">
                                    <Text >{TestData.title}</Text>

                                    <Box display="flex" flexDirection="row" >
                                        <Text display="flex" justifyContent="center" alignItems="center" color="#888E9E"><BiRupee/><del>{TestData.Price}</del>   </Text>
                                        <Text display="flex" justifyContent="center" alignItems="center"><BiRupee/>{TestData.Offer_price}  </Text>
                                    </Box>
                                </Box>

                                <Box p="0 12px">

                                <Text fontSize="13px" color="#888E9E" textAlign="left">{TestData.desp}</Text> 
                                </Box>


                                <Box className="card_bottom_div" >
                                        <Box >  
                                            <Text fontSize="13px" display="flex"  flexDirection="row" alignItems="center" color="#888E9E" > <BsStopwatch/>{TestData.Test}  </Text>
                                            <Text fontSize="13px" display="flex"  flexDirection="row"  alignItems="center" color="#888E9E" ><MdShop/>  {TestData.time}</Text> 
                                        </Box>
                                            
                                    
                                            <button   className="butnow_btn" ><b>BUY NOW</b>  </button>
                                            
                                </Box>

                            </Box>
                </Box>
         </Box>

         <Box className="TestCarousel_div">
            <TestCarousel/>

         </Box>
    </Box>
  )
}

export default CareBooking


