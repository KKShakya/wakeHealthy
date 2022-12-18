import React from "react";
import { Box, Image, Heading, Text, Flex, Button } from "@chakra-ui/react";

export const AtHomeCard = () => {
  return (
    <Box width="20%">
      <Flex
        justify="center"
        align="center"
        bg="#2d3745"
        flexDirection={"column"}
        gap="10px"
        borderRadius={"10px"}
      >
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/e32fbb9b-ffd5-4c45-9fe0-1500fd03a222"
          width="100%"
          height="200px"
          borderRadius={"10px"}
        />

        <Text color="#686d74">Chaya P</Text>
        <Heading as="h4" color="#fff">
          Bolly Express Bolly 1
        </Heading>
        <Text color="#686d74" transform="uppercase">
          Dance . Beginner . 30 min
        </Text>
        <Button leftIcon={""} mb="10px">
          Book
        </Button>
      </Flex>
    </Box>
  );
};

export const CardWithCarousel = ({ direction = "row" }) => {
  return (
    <Box>
      <Flex flexDirection={{ base: "column", sm: "column", md: direction }} bg="#0a1017" color="#fff" p="1em" justify="space-around">
        {/* for data */}
        <Box >
          <Flex flexDirection={"column"} gap="4rem" justify={"flex-start"}>
            <Image />
            <Heading color="#fff">
              Unlimited acess to Everything you like
            </Heading>

            <Flex flexDirection={"column"} justify="flex-start">
              <Text ml="-100px">umlimited acesss</Text>
              <Flex gap={"10px"} align="center">
                <Text>icon</Text>
                <Text>unlimited acess to gym</Text>
              </Flex>
              <Flex gap={"10px"} align="center">
                <Text>icon</Text>
                <Text>unlimited acess to gym</Text>
              </Flex>
              <Flex gap={"10px"} align="center">
                <Text>icon</Text>
                <Text>unlimited acess to gym</Text>
              </Flex>
            </Flex>

            <Text>starting at price {}/ year</Text>
            <Flex gap="20px">
              <Button variant="solid" transform={"uppercase"} bg="#23282f" color="#fff">Try for Free</Button>
              <Button variant="solid" transform={"uppercase"} color="red" bg="#fff">Buy now</Button>
            </Flex>

            <Flex gap={"10px"}>
              <Image />
              <Text>sale now</Text>
            </Flex>
          </Flex>
        </Box>

        {/* for Image carousel*/}
        <Box>
          <Image  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"/>
        </Box>
      </Flex>
    </Box>
  );
};
