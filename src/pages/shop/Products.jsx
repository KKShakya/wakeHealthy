import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import Loading from "./shop.components/Loading";

function getByCategeory({ categeory }) {
  return fetch(`http://localhost:8080/${categeory}`).then((res) => res.json());
}

export default function Products() {
  const params = useParams();
  const [DATA, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getByCategeory(params)
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container maxW={"6xl"}>
          <Box>
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1278,ar_1036:120/dpr_2/image/vm/deec1a00-cc0f-4eca-b639-7e53e8b811b0.png" />
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1312,ar_1312:560/dpr_2/image/vm/ee3aafaf-b0ac-4a08-8b80-a8f21c893eff.png" />
          </Box>
          <br />
          <HStack>
            <NavLink to="/store">{"Home > "}</NavLink>
            <Text>{params.categeory}</Text>
          </HStack>
          <br />
          <HStack>
            <Button size={"sm"} variant="outline">
              Button
            </Button>
            <Button size={"sm"} variant="outline">
              Button
            </Button>
            <Button size={"sm"} variant="outline">
              Button
            </Button>
            <Button size={"sm"} variant="outline">
              Button
            </Button>
          </HStack>
          <br />
          <Grid gridTemplateColumns={"repeat(4,1fr)"} gap="20px">
            {DATA.map((el) => (
              <NavLink to={`${el.id}`} key={el.id}>
                <Stack fontSize="18px" textAlign="left">
                  <Image src={el.image} alt="t-shirts" />
                  <Text>{el.brand}</Text>
                  <Text fontWeight={"bold"}>{el.title}</Text>
                  <HStack>
                    <Text fontWeight={"bold"}>₹ {el.price}</Text>
                    <strike>{el.strike}</strike>
                    <Text fontWeight={"bold"} color="pink.400">
                      {el.discount}% off
                    </Text>
                  </HStack>
                </Stack>
              </NavLink>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

// json-server --watch shop.json --port 8080