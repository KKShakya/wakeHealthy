import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function getById({ categeory, product_id }) {
  return fetch(`http://localhost:8080/${categeory}/${product_id}`).then((res) =>
    res.json()
  );
}

export default function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getById(params)
      .then((res) => {
        setLoading(false);
        setProduct(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Flex
          direction={{ base: "column", sm: "row" }}
          align={"top"}
          fontSize="18px"
          textAlign="left"
          gap="20px"
          p={"20px"}
        >
          <Grid
            gap="20px"
            w={{ base: "100%", sm: "60%" }}
            gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          >
            <Image src={product.image} alt="t-shirts" />
            <Image src={product.image} alt="t-shirts" />
            <Image src={product.image} alt="t-shirts" />
            <Image src={product.image} alt="t-shirts" />
          </Grid>

          <Stack w={{ base: "100%", sm: "40%" }} gap={"30px"}>
            <Stack gap={"5px"}>
              <Text>{product.brand}</Text>
              <Heading>{product.title}</Heading>
              <HStack fontSize="22px">
                <Text fontWeight={"bold"} color="pink.400">
                  ₹ {product.price}
                </Text>
                <strike>₹ {product.strike}</strike>
                <Badge
                  fontWeight={"bold"}
                  bg="orange"
                  color={"white"}
                  p="1"
                  fontSize="18px"
                >
                  {product.discount}% off
                </Badge>
              </HStack>
              <Text>
                Make Your Move with the Signature Branding Logo Play Tshirt. Add
                the extra groovy vibe your Dance workout wardrobe.
              </Text>
            </Stack>

            {/* <Button key={el} variant={"outline"} borderRadius="full">
                      {el}
                    </Button> */}

            <Stack gap={"5px"}>
              <Text>Choose Size</Text>
              <HStack justify="space-evenly">
                {console.log(product.size[0])}
              </HStack>
              <HStack justify="center">
                <Button colorScheme={"red"} borderRadius="full" w={"150px"}>
                  Add To Cart
                </Button>
                <Button colorScheme={"red"} borderRadius="full" w={"150px"}>
                  Buy Now
                </Button>
              </HStack>
            </Stack>

            <Stack>
              <Text fontWeight={"bold"}>PRODUCT DETAILS</Text>
              <Box>
                <li>Colour: Grey</li>
                <li>Fabric: 100% Polyester</li>
                <li>Breathable fabric</li>
                <li>Supersoft, Light weight</li>
                <li>Flydry, Moisture Wicking</li>
                <li>Medium to Light intensity activities</li>
              </Box>
            </Stack>

            <InputGroup size={"lg"}>
              <Input
                placeholder="Enter your pincode"
                focusBorderColor="black"
              />
              <InputRightElement width="4.5rem" color={"red"} fontWeight="bold">
                CHECK
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Flex>
      )}
    </>
  );
}
