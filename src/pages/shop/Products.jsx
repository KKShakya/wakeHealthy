import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ShopNavbar from "./ShopComponents/ShopNavbar";

function getByCategeory({ categeory }, sort, order) {
  return fetch(
    `http://localhost:8080/${categeory}?_sort=${sort}&_order=${order}`
  ).then((res) => res.json());
}

export default function Products() {
  const params = useParams();
  const [DATA, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("rating");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    getByCategeory(params, sort, order)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [sort, order, params]);

  let handleSorting = (sortBy) => {
    setOrder(order == "desc" ? "asc" : "desc");
    setSort(sortBy);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ShopNavbar />
          <Container maxW={"6xl"}>
            <Box>
              <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1278,ar_1036:120/dpr_2/image/vm/deec1a00-cc0f-4eca-b639-7e53e8b811b0.png" />
              <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1312,ar_1312:560/dpr_2/image/vm/ee3aafaf-b0ac-4a08-8b80-a8f21c893eff.png" />
            </Box>
            <br />
            <HStack justify={"space-between"}>
              <HStack>
                <NavLink to="/store">{"Home > "}</NavLink>
                <Text>{params.categeory}</Text>
              </HStack>
              <ButtonGroup size={"sm"} variant="outline">
                <Button variant="ghost">Sort By</Button>
                <Button onClick={() => handleSorting("price")}>price</Button>
                <Button onClick={() => handleSorting("rating")}>rating</Button>
              </ButtonGroup>
            </HStack>
            <br />
            <Grid gridTemplateColumns={"repeat(4,1fr)"} gap="20px">
              {DATA.map((product) => (
                <NavLink to={`${product.id}`} key={product.id}>
                  <Stack fontSize="18px" textAlign="left">
                    <Image src={product.image} alt="t-shirts" />
                    <HStack justify={"space-between"}>
                      <Text>{product.brand}</Text>
                      <Badge
                        fontWeight={"bold"}
                        colorScheme={
                          product.rating > 4
                            ? "green"
                            : product.rating > 3
                            ? "yellow"
                            : "red"
                        }
                        p="1"
                      >
                        ★ {product.rating}
                      </Badge>
                    </HStack>

                    <Text fontWeight={"bold"}>{product.title}</Text>
                    <HStack>
                      <Text fontWeight={"bold"}>₹ {product.price}</Text>
                      <strike>{product.maxPrice}</strike>
                      <Text fontWeight={"bold"} color="pink.400">
                        {(product.maxPrice - product.price) / 10}% off
                      </Text>
                    </HStack>
                  </Stack>
                </NavLink>
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

// json-server --watch shop.json --port 8080
