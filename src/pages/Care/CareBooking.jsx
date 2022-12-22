
import "../../Styles/CareBooking.css"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import React, { useState  } from 'react'
import { FiCheck } from "react-icons/fi";

import { Box,Text, Toast, useToast } from '@chakra-ui/react'
import { BiChevronRight,BiRupee } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { MdShop } from "react-icons/md";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent,
    ModalHeader, 
    ModalOverlay, 
    useDisclosure ,
    
  } from '@chakra-ui/react'

  
import { useParams } from "react-router-dom";
import TestCarousel from "../../components/CarePageComponent/Carousel/TestCarousel";
import Information from "../../components/CarePageComponent/Information/Information";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

const CareBooking = () => {

   const [TestData,SetTestData]=useState({})

   const { isOpen, onOpen, onClose } = useDisclosure()
   const toast = useToast()
   const { currentUser } = useSelector((store) => store.auth);

   console.log(currentUser)

   const [ShowADDbtn,setShowADDbtn]=useState(true)
  


        let param=useParams()

        let {Booking_id}=param

        React.useEffect(()=>{
            axios.get(`https://wake-healthy.vercel.app/Lab_Test_Card/${Booking_id}`)
            .then((data)=>{
                
                            SetTestData(data.data)
                         
            })

        },[])

       

        const HandleADD_Btn =(item)=>{
            setShowADDbtn(false)
            toast({
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                     <p>{item.title} - {item.Test}</p>
                     <p>For {currentUser}  | Male</p>

                    </Box>
                  ),
                position: 'top-right',
                isClosable: true,
                status: "success",
                duration: 2000,
              })

              axios.post(" https://wakehealhty-update.onrender.com/CareCart",{...item,"id":uuidv4()})
        }

  return (
    <Box className='Booking_main_div'>

         <Box className="Book_div">   
                    <Box className="image_div">                   
                        <img src={TestData.image} alt="" />
                    </Box>
           
           
                <Box className="Book_now_div">

                            <Breadcrumb ml="30px" spacing='4px' fontSize="13px" separator={<BiChevronRight color='gray.500' />}>
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
                                    <Text fontSize={{ base: '14px', md: '17px', lg: '20px' }} >{TestData.title}</Text>

                                    <Box display="flex" flexDirection="row" >
                                        <Text display="flex" justifyContent="center" alignItems="center" color="#888E9E"><BiRupee/><del>{TestData.Price}</del>   </Text>
                                        <Text display="flex" justifyContent="center" alignItems="center"><BiRupee/>{TestData.Offer_price}  </Text>
                                    </Box>
                                </Box>

                                <Box p="0 12px">

                                <Text fontSize={{ base: '10px', md: '11px', lg: '13px' }} color="#888E9E" textAlign="left">{TestData.desp}</Text> 
                                </Box>


                                <Box className="card_bottom_div" >
                                        <Box >  
                                            <Text fontSize="13px" display="flex"  flexDirection="row" alignItems="center" color="#888E9E" > <BsStopwatch/>{TestData.Test}  </Text>
                                            <Text fontSize="13px" display="flex"  flexDirection="row"  alignItems="center" color="#888E9E" ><MdShop/>  {TestData.time}</Text> 
                                        </Box>
                                            
                                    {
                                        ShowADDbtn?   
                                        <button   className="butnow_btn" onClick={()=>HandleADD_Btn(TestData)} ><b>ADD</b>  </button>:
                                        <Box display="flex"  flexDirection="row" alignItems="center">
                                            <FiCheck color="green.200"/>
                                            <Text color="green.300">Added</Text>
                                        </Box>
                                    }
                                         
                                            
                                </Box>

                            </Box>
                </Box>
         </Box>

         <Box className="TestCarousel_div">

                    <Box className="Test_Include_box">
                        <TestCarousel/>
                    </Box>
                    
                    <Box className="Healthians_box">
                        <Box w="100%" p="10px" display="flex" flexDirection="row">
                             <Box w="40%" display="flex" justifyContent="space-around" gap="10px" fontSize={{ base: '10px', md: '12px', lg: '15px' }} color="#5A5A5A">
                                    <Text>Fulfilled By</Text>
                                    <img src="https://cdn-media.cure.fit/image/carefit/healthians_logo.png" alt="image_abc" width="60px" />

                            </Box>

                           <Box w="60%" textAlign="right" color="#FF3238"  fontSize="13px">
                              <Text onClick={onOpen}>Know More</Text>
                              <Modal onClose={onClose} size={"xl"} isOpen={isOpen} p="20px">
                                <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader> 
                                            <img src="https://cdn-media.cure.fit/image/carefit/healthians_logo.png" alt="pic" width="100px" />
                                        </ModalHeader>
                                        <ModalCloseButton />
                                        
                                        <ModalBody>
                                            <Box>
                                                <Text>About</Text>
                                                <Text color="#5A5A5A" fontSize="12px">Healthians is India’s largest provider of health test at-home service, 
                                                    creating a new benchmark in quality. 600+ trained technicians. 46 touch-point technology
                                                    for assured quality collection & testing. DMLT & WHO certified phlebotomist
                                                </Text>

                                            </Box>
                                            <Box display="flex" flexDirection="row" mt="13px" alignItems="center">
                                                <img src="https://cdn-media.cure.fit/image/carefit/diagnostics/bloodsample.png" alt="picc" width="40px"/>
                                                <Text fontSize="12px" color="#5A5A5A">Sample collected by and processed by Healthians and its partner labs</Text>
          
                                            </Box>

                                            <Box display="flex" flexDirection="row" mt="13px" alignItems="center">
                                                <img src="https://cdn-media.cure.fit/image/carefit/digital.png" alt="picc" width="40px"/>
                                                <Text fontSize="12px" color="#5A5A5A">Schedule, track and view your reports on the care.fit app</Text>
          
                                            </Box>
                                            
                                        
                                        </ModalBody>
                                       
                                    </ModalContent>
                                </Modal>

                           </Box>
                        

                        </Box>

                        <Box  mt="20px" textAlign="left" ml="40px" color="#5A5A5A" fontSize={{ base: '10px', md: '12px', lg: '15px' }} >

                        <ul>
                            <li>DMLT and WHO certified phlebotomists</li>
                            <li>46 touch-point technology for assured quality collection & testing</li>
                        </ul>
                        </Box>
                        
                            
                        
                        

                    </Box>
           

          </Box>

          <Information />
         <Footer />

 </Box>
   
  )
}

export default CareBooking

