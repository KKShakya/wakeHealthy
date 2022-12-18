import React from "react";
import { Box, Image, Heading, Text, Flex, Button } from "@chakra-ui/react";

export const BigCard1 = ({ direction = "row" }) => {
  return (
    <Box>
      <Flex
        flexDirection={{ base: "column", sm: "column", md: direction }}
        bg="#0a1017"
        color="#fff"
        p="3em"
        justify="space-around"
      >
        {/* for data */}
        <Box p="20px" w="40%">
          <Flex flexDirection={"column"} gap="4rem" justify={"flex-start"}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_294,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite.png"
              w="50%"
              m="auto"
            />
            <Heading color="#fff">
              Unlimited acess to Everything in Your city
            </Heading>

            <Flex flexDirection={"column"} justify="flex-start" gap="20px">
              <Flex gap={"20px"} align="center">
                <Image src="https://static.cure.fit/assets/images/orangeTick.png" />
                <Text color="#a6a8ab">At-center group classes</Text>
              </Flex>
              <Flex gap={"20px"} align="center">
                <Image src="https://static.cure.fit/assets/images/orangeTick.png" />
                <Text color="#a6a8ab">All ELITE & PRO gyms</Text>
              </Flex>
              <Flex gap={"20px"} align="center">
                <Image src="https://static.cure.fit/assets/images/orangeTick.png" />
                <Text color="#a6a8ab">At-home live workouts</Text>
              </Flex>
            </Flex>

            <Flex gap="20px">
              <Button
                variant="solid"
                transform={"uppercase"}
                bg="#23282f"
                color="#fff"
              >
                Try for Free
              </Button>
              <Button
                variant="solid"
                transform={"uppercase"}
                color="red"
                bg="#fff"
              >
                Buy now
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* for Image carousel*/}
        <Box w="50%">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
            borderRadius={"10px"}
          />
        </Box>
      </Flex>
    </Box>
  );
};


export const BigCard2 = ({direction="row"})=>{
  return(
    <Box>
    <Flex
      flexDirection={{ base: "column", sm: "column", md: direction }}
      bg="#0a1017"
      color="#fff"
      p="3em"
      justify="space-around"
    >
      {/* for data */}
      <Box p="20px" w="40%">
        <Flex flexDirection={"column"} gap="4rem" justify={"flex-start"}>
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_265,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro.png"
            w="50%"
            m="auto"
          />
          <Heading color="#fff">
            Unlimited access to PRO in Your city
          </Heading>

          <Flex flexDirection={"column"} justify="flex-start" gap="20px">
            <Flex gap={"20px"} align="center">
              <Image src="https://static.cure.fit/assets/images/orangeTick.png" />
              <Text color="#a6a8ab">All PRO gyms</Text>
            </Flex>
            <Flex gap={"20px"} align="center">
              <Image src="https://static.cure.fit/assets/images/orangeTick.png" />
              <Text color="#a6a8ab">At-home live workouts</Text>
            </Flex>
            <Flex gap={"20px"} align="center">
              <Image src="https://static.cure.fit/assets/images/orangeTick.png" />
              <Text color="#a6a8ab">
                2 Sessions/month at ELITE gyms & group classes
              </Text>
            </Flex>
          </Flex>

          <Flex gap="20px">
            <Button
              variant="solid"
              transform={"uppercase"}
              bg="#23282f"
              color="#fff"
            >
              Try for Free
            </Button>
            <Button
              variant="solid"
              transform={"uppercase"}
              color="red"
              bg="#fff"
            >
              Buy now
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* for Image carousel*/}
      <Box w="50%">
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
          borderRadius={"10px"}
        />
      </Box>
    </Flex>
  </Box>
);
}