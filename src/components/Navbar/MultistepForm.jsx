import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import logo from "../../Images/Logo.png";
import { useToast } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdOutlineMailOutline } from "react-icons/md";
import { BsGoogle, BsFacebook, BsArrowLeftShort } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import OtpVerification from "./OtpVerification";

const Form1 = ({ handleNext }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    handleNext(2);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    handleNext(3);
  };

  return (
    <Flex flexDirection={"column"} mt="10%" color="#fff">
      {/* Image logo */}
      <Flex justify={"center"} w="30%" m="auto">
        <Flex justify={"center"} align="center">
          <Image src={logo} alt="" />
        </Flex>
      </Flex>

      {/* form starts from here */}
      {/* phone number */}
      <Flex borderBottom={"2px solid #fff"} mt="15%" gap="10px">
        <Flex>
          +91 <MdKeyboardArrowDown />
        </Flex>
        <Input
          type="text"
          variant="unstyled"
          placeholder="Enter your phone number"
        />
      </Flex>

      {/* Clickable button */}
      <Flex
        justify={"center"}
        align="center"
        bg="#fff"
        mt="10%"
        p="8px"
        borderRadius={"5px"}
      >
        <Box as="button" color="black" onClick={handleClick}>
          CONTINUE
        </Box>
      </Flex>

      {/* next step */}
      <Flex
        as="button"
        justify={"space-between"}
        align="center"
        bg="#1a1a1a"
        mt="10%"
        p="8px 10px"
        borderRadius={"5px"}
        to="/otp"
        onClick={handleClick2}
      >
        <Box color="#fff">or connect with</Box>
        <Flex gap="10px">
          <Box color="#fff">
            <BsGoogle />
          </Box>
          <Box color="#fff">
            <BsFacebook />
          </Box>
          <Box color="#fff">
            <MdOutlineMailOutline />
          </Box>
        </Flex>
      </Flex>

      {/* disclaimer */}
      <Box color="#8d8d8d" fontSize="12px" mt="10%" align="center">
        * By Continuing you agree to the Terms of Services and Privacy policy.
      </Box>
    </Flex>
  );
};

const Form2 = ({ handleNext }) => {
  const handleEmailSignin = (e) => {
    e.preventDefault();
    handleNext(4);
  };
  return (
    <Flex flexDirection={"column"} mt="10%" color="#fff">
      {/* Image logo */}
      <Flex justify={"center"} w="30%" m="auto">
        <Flex justify={"center"} align="center">
          <Image src={logo} alt="" />
        </Flex>
      </Flex>

      {/* Clickable button */}
      <Flex
        justify={"center"}
        align="center"
        bg="#1a1a1a"
        mt="10%"
        p="8px 10px"
        borderRadius={"5px"}
        gap="10px"
      >
        <Box float="left">
          {" "}
          <BsGoogle />
        </Box>
        <Box as="button" color="#fff">
          Sign in with Google
        </Box>
      </Flex>

      {/* next step */}
      <Flex
        justify={"center"}
        align="center"
        bg="#1a1a1a"
        mt="6%"
        p="8px 10px"
        borderRadius={"5px"}
        gap="10px"
      >
        <BsFacebook />
        <Box color="#fff" as="button">
          Sign in with Facebook
        </Box>
      </Flex>

      {/* next step with email */}
      <Flex
        justify={"center"}
        align="center"
        bg="#1a1a1a"
        mt="6%"
        p="8px 10px"
        borderRadius={"5px"}
        gap="10px"
      >
        <MdOutlineMailOutline />
        <Box color="#fff" as="button" onClick={handleEmailSignin}>
          Sign in with Email
        </Box>
      </Flex>

      {/* disclaimer */}
      <Box color="#8d8d8d" fontSize="12px" mt="10%" align="center">
        * By Continuing you agree to the Terms of Services and Privacy policy.
      </Box>
    </Flex>
  );
};

// form for email and password signin
const Form3 = () => {
  return (
    <Flex flexDirection={"column"} mt="10%" color="#fff">
      {/* Image logo */}
      <Flex justify={"center"} w="30%" m="auto">
        <Flex justify={"center"} align="center">
          <Image src={logo} alt="" />
        </Flex>
      </Flex>

      <Center fontSize={"18px"} mt="10%">
        Log In to Account
      </Center>

      {/* form starts from here */}

      <Flex borderBottom={"2px solid #fff"} mt="10%" gap="10px">
        <Input
          type="email"
          variant="unstyled"
          placeholder="Email ID"
          _focus={{ outline: "none" }}
        />
      </Flex>

      {/* password */}
      <Flex borderBottom={"2px solid #fff"} mt="10%" gap="10px">
        <Input type="password" variant="unstyled" placeholder="password" />
      </Flex>

      {/* Clickable button */}
      <Flex
        justify={"center"}
        align="center"
        bg="#fff"
        mt="10%"
        p="8px"
        borderRadius={"5px"}
      >
        <Box as="button" color="black" _hover={{ color: "red" }}>
          CONTINUE
        </Box>
      </Flex>
    </Flex>
  );
};

export default function MultistepForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [number, setNumber]  = useState(0);
  return (
    <>
      <Box
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        bg="black"
      >
      
        {step === 1 ? (
          <Form1 handleNext={setStep} />
        ) : step === 2 ? (
          <OtpVerification />
        ) : step === 3 ? (
          <Form2 handleNext={setStep} />
        ) : (
          <Form3 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                position="absolute"
                top="8%"
                left="2%"
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                variant="ghost"
                w="7rem"
                mr="5%"
              >
                <BsArrowLeftShort color="#fff" h="18px" />
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
