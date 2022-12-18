import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Image,
  Grid,
  Text,
  Center,
  Card,
  Heading,
} from "@chakra-ui/react";
import { BigCard1, BigCard2, CardWithCarousel } from "./CardLayouts";
import Carousel from "react-multi-carousel";
import { AtHome, CultpassCard, TrainerData } from "./FitnesscardData";
import CenterCarousel from "./CenterCarousel";
import style from "../../Styles/FitnessHome.module.css";
import table from "../../Images/table.png";
import bottomfitness from "../../Images/bottomfitness.png"
import FAQ from "../../components/CarePageComponent/FAQ/FAQ";
import FitnessFaq from "./FitnesssFaq";
import Footer from "../../components/Footer";




const FitnessNavbar = () => {
  return (
    <Box display={{ base: "none", md: "none", lg: "none", xl: "flex" }}>
      <Flex
        justify={"space-around"}
        h="60px"
        w="100%"
        mx="auto"
        alignItems={"center"}
        className="navabr_home"
        bg="#393a3b"
        zIndex={"1"}
      >
        {/* ?logo */}
        <Box></Box>

        {/* menus */}
        <Flex justify={"space-between"} gap="6em" color="white" ml="120px">
          <Link href="/fitness" color="#fff" textDecoration={"none"}>
            ELITE Pass
          </Link>
          <Link href="/proPass" color="#fff" textDecoration={"none"}>
            PRO Pass
          </Link>
          <Link href="/HomePass" color="#fff" textDecoration={"none"}>
            Home Pass
          </Link>
          <Link href="/transform" color="#fff" textDecoration={"none"}>
            Transform
          </Link>
          <Link href="/gyms" color="#fff" textDecoration={"none"}>
            Luxury Gyms
          </Link>
        </Flex>

        {/* cart-login */}
        <Button variant="solid" bg="#4d4e4f" color="#fff">
          Compare Plans
        </Button>
      </Flex>
    </Box>
  );
};

function FitnessHome() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box>
      <FitnessNavbar />

      <Flex>
        <Box className={style.bgImage_scroll}></Box>
      </Flex>
      {/* culpass boxes */}

      <Box bg="#04143e" px="120px">
        <Grid
          templateColumns={{ md: "1fr", lg: "repeat(3,1fr)" }}
          className={style.bgImage_grid}
          gap="20px"
        >
          {CultpassCard.map((card) => (
            <Flex
              className={style.bgImage_Flex}
              justify={"center"}
              align="center"
              key={card.id}
            >
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                alt="cultpass"
              />
              <Image src={card.img} alt="cultpass" />
              <Text color="#fff">Starting at {card.price} / month</Text>
            </Flex>
          ))}
        </Grid>
      </Box>

      {/* video for different located centers */}
      <CenterCarousel />

      <Box bg="#161b22" mt="-2%">
        <Box w="90%" m="auto" color="#fff" p="100px">
          <Center>AT-CENTER</Center>
          <Center fontSize={"4rem"}>Trainer-led group classes</Center>
          <Box mt="5%">
            <Carousel
              responsive={responsive}
              showDots={true}
              infinite={true}
              arrows={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {TrainerData.map((card) => (
                <Box className={style.carousel1} key={card.id}>
                  <Image src={card.img} />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Box>

      <Box bg="#161b22" mt="-2%">
        <Box w="90%" m="auto" color="#fff" p="100px">
          <Center>AT-HOME</Center>
          <Center fontSize={"3rem"}>
            Unlimited home workouts with calorie tracking
          </Center>
          <Box mt="5%">
            <Carousel
              responsive={responsive}
              showDots={true}
              infinite={true}
              arrows={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {AtHome.map((card) => (
                <Box w="80%" h="500px">
                  <Flex
                    justify="center"
                    align="center"
                    bg="#2d3745"
                    flexDirection={"column"}
                    gap="10px"
                    borderRadius={"10px"}
                  >
                    <Image
                      src={card.img}
                      width="100%"
                      height="200px"
                      borderRadius={"10px"}
                    />

                    <Text color="#686d74">{card.name}</Text>
                    <Heading as="h4" color="#fff">
                      {card.title}
                    </Heading>
                    <Text color="#686d74" transform="uppercase">
                      {card.txt}
                    </Text>
                    <Button color="black" mb="10px">
                      Book
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Box>

      <Box bg="#15171c" p="40px">
        <Image src={table} w="95%" m="auto" />
      </Box>

      <Box bg="#161b22" mt="-2%">
        <Box w="80%" m="auto" color="#fff" p="100px">
          <Center fontSize={"3rem"} fontWeight="bold">
            FREE TRIALS
          </Center>
          <Flex
            mt="5%"
            gap="20px"
            flexDirection={{ sm: "column", md: "column", lg: "row" }}
          >
            <Box>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png"
                className={style.free_trials_img}
              />
            </Box>
            <Box mt="-2%">
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png"
                h="430px"
              />
            </Box>
            <Box>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png"
                className={style.free_trials_img}
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* cardWithout cROUSELS */}
     <BigCard1 direction="row"/>
     <BigCard2 direction="row-reverse"/>
      



{/* //////////////////////////////////// */}
      {/* ////////////////////////////// */}
      <Box bg="#15171c" p="4em">
        <Image src={bottomfitness} w="80%" m="auto" />
      </Box>
    
     <Box mt="-3%">
      {/* <FitnessFaq /> */}
     </Box>
    
    <Footer />
    </Box>

    
  );
}

export default FitnessHome;
