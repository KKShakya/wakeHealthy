import { Image, Stack } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Stack height="100vh" justify={"center"}>
      <Image src="https://miro.medium.com/max/1100/1*r4K1PRHfbKG7NpoRx22K4A.gif" />
    </Stack>
  );
}
