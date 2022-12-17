import {
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const DATA = [
  {
    title: "cult transform",
    desc: "Get coached to lose weight for good",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png",
  },
  {
    title: "The .fit way",
    desc: "Making healthy easy, one day at a time",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png",
  },
  {
    title: "Workout Gear",
    desc: "Everything you need for your workout",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png",
  },
  {
    title: "Sugar.fit",
    desc: "Reverse Type 2 Diabetes and Prediabetes",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png",
  },
];

export default function FitnessDivs() {
  return (
    <div style={{backgroundColor:"#1A202C"}}>
    <Container  maxW={"5xl"}>
      <Flex flexWrap={"wrap"} justify={"center"} gap="50px" p={"20px"}>
        {DATA.map((el) => (
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Stack
              w="450px"
              h="300px"
              backgroundImage={el.image}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius={"25px"}
              color="white"
              p={"20px"}
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.02)" }}
            >
              <HStack justify={"space-between"}>
                <Heading size={"lg"} color={"white"}>
                  {el.title}
                </Heading>
                <ChevronRightIcon
                  fontSize={"xl"}
                  bg="gray"
                  borderRadius={"full"}
                />
              </HStack>
              <Text textAlign={"left"} opacity="80%">
                {el.desc}
              </Text>
            </Stack>
          </Link>
        ))}
      </Flex>
    </Container>
    </div>
  );
}
