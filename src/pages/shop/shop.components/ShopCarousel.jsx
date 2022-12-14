import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Link,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ShopCarousel() {
  // const [slider, setSlider] = (useState < Slider) | (null > null);
  let [slider, setSlider] = useState(0);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f2d18fc0-3016-454f-91ef-03bcc756779d.png",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/d4779345-45f8-404f-ac87-9bec7a99db34.png",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/eef4c65e-f578-4c9b-9106-3a6b30e091dc.png",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"l"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Link href="#">
              {/* This is the block you need to change, to customize the caption */}
              <Container
                size="container.lg"
                height={{ base: "100", sm: "150", md: "200", lg: "300" }}
                position="relative"
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="40%"
                  left="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    color="white"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  >
                    {card.title}
                  </Heading>

                  <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
