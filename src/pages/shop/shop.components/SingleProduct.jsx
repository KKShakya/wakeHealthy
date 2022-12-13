import {
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUserById(id) {
  return fetch(`http://localhost:8080/Tshirts/${id}`).then((res) => res.json());
}

export default function SingleProduct() {
  const params = useParams();
  const [el, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(params.product_id)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <Container maxW={"6xl"}>
      {loading ? (
        console.log(loading)
      ) : (
        <HStack
          align={"top"}
        //   justify={"space-evenly"}
          fontSize="18px"
          textAlign="left"
          gap={"20px"}
        >
          <Flex flexWrap={"wrap"} gap="20px">
            <Image src={el.image} alt="t-shirts" w={"40%"} />
            <Image src={el.image} alt="t-shirts" w={"40%"} />
            <Image src={el.image} alt="t-shirts" w={"40%"} />
          </Flex>

          <Stack>
            <Text>{el.brand}</Text>
            <Heading>{el.title}</Heading>
            <HStack>
              <Text fontWeight={"bold"}>₹ {el.price}</Text>
              <strike>{el.strike}</strike>
              <Text fontWeight={"bold"} color="pink.400">
                {el.discount}% off
              </Text>
            </HStack>
          </Stack>
        </HStack>
      )}
    </Container>
  );
}
