import {
  Text,
  Divider,
  VStack,
  HStack,
  Stack,
  Image,
  Box,
  Heading,
  Grid,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import {
  delete_from_shop,
  get_shop,
  update_shop,
} from "../../redux/Shop/shop.action";

export default function Admin() {
  const { SHOP } = useSelector((store) => store.shop);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_shop());
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update_shop(inputVal));
  };

  return (
    <VStack justify={"center"}>
      <Heading>Admin</Heading>
      <AddProduct />
      <Link href="/">
        <Button>Logout</Button>
      </Link>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="20px"
        p={"20px"}
      >
        {SHOP.map((product) => (
          <Box
            key={product.id}
            border="2px solid red"
            textAlign={"left"}
            p="10px"
          >
            <HStack gap={"5px"}>
              <Image src={product.image} w="35%" p={"5px"} />
              <Stack>
                <HStack justify={"space-between"}>
                  <Heading>ID: {product.id}</Heading>
                  <DeleteIcon
                    cursor={"pointer"}
                    color="red"
                    onClick={() => {
                      dispatch(delete_from_shop(product.id));
                    }}
                  />
                </HStack>
                <Text fontSize="20px">{product.title}</Text>
                <Text>Price : ₹ {product.price}</Text>
                <UpdateProduct product={product} />
              </Stack>
            </HStack>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}
