import React, { useRef } from "react";
import { Box, Button, Flex, Input, Text,Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CenterCarouselData } from "./FitnesscardData";




function CenterCarousel() {

 const videoRef = useRef();

  // const handlePlay = () => {
  
  //   console.log(videoRef.id);
  //   videoRef.current.play();
  // }
  // const handlePause = () => {
  //   videoRef.current.pause();
  // };

  return (
    <Box bg="#15171c" pt="100px">
      <Flex color="#fff" justify={"space-between"} w="70%" m="auto">
        <Flex gap="15px" fontSize="2rem">
          <Text>Center</Text>
          <Input variant="flushed" value="HSR LAYOUT" />
        </Flex>
        <Box color="#307aff" fontWeight={"bold"}>
          VIEW ALL
        </Box>
      </Flex>

      {/* //////////////////////////// */}
      <Box w="80%" m="auto">
        <Carousel stopOnHover="true">
          {CenterCarouselData.map((card) => (
            <Box w="50%" m="auto" p="10px" key={card.id}>
              {/* video */}
              <Box>
                <Image src={card.video} />
              </Box>

              <Box bg="#2f3237" py="20px" borderRadius={"0px 0px 10px 10px"}>
                <Flex
                  justify={"space-around"}
                  borderBottom={"1px solid Gray"}
                  p="10px"
                >
                  <Box>
                    <Text fontSize="2rem" color="#fff">
                      {card.title}
                    </Text>
                    <Text color="gray">HSR Layout • Gym</Text>
                  </Box>
                  <Button bg="gray" color="#fff" mt="2%">
                    TRY FOR FREE
                  </Button>
                </Flex>
                <Text color="gray">
                  Unlimited access starting at {card.price} / mo{" "}
                </Text>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

export default CenterCarousel;
