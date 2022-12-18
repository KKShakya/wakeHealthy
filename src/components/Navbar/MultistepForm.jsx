import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Flex,
  Input,
  Image,
  Center,
} from "@chakra-ui/react";
import logo from "../../Images/Logo_Login.png";
import { MdKeyboardArrowDown, MdOutlineMailOutline } from "react-icons/md";
import { BsGoogle, BsFacebook, BsArrowLeftShort } from "react-icons/bs";
// import { Link, Navigate } from "react-router-dom";
import OtpVerification from "./OtpVerification";

const Form1 = ({ handleNext, handleLogin }) => {
  const [user, setUser] = useState({ name: "", number: "" });
  const handleClick = (e) => {
    e.preventDefault();
    handleNext(2);
    handleLogin(user);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    handleNext(3);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  const { name, number } = user;

  return (
    <Flex flexDirection={"column"} mt="10%" color="#fff">
      {/* Image logo */}
      <Flex justify={"center"} w="30%" m="auto">
        <Flex justify={"center"} align="center" w="100px" h="100px">
          <Image src={logo} alt="logo" />
        </Flex>
      </Flex>

      {/* form starts from here */}
      {/* phone number */}

      <Flex borderBottom={"2px solid #fff"} mt="15%" gap="10px">
        <Input
          type="text"
          variant="unstyled"
          placeholder="Name"
          onChange={handleChange}
          value={name}
          name="name"
        />
      </Flex>
      <Flex borderBottom={"2px solid #fff"} mt="15%" gap="10px">
        <Flex>
          +91 <MdKeyboardArrowDown />
        </Flex>
        <Input
          type="text"
          variant="unstyled"
          placeholder="Enter your phone number"
          onChange={handleChange}
          value={number}
          name="number"
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
        <Box as="button" color="black" onClick={handleClick} disabled={name==="" || number.length<10 || number.length>10}>
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



// this form is for signin with other platforms
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
const Form3 = ({ handleNext, handleLogin }) => {
  const [user2, setUser2] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser2({ ...user2, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext(2);
    handleLogin(user2);
  };

  const { name, email } = user2;
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
          name="name"
          type="text"
          variant="unstyled"
          placeholder="Name"
          _focus={{ outline: "none" }}
          value={name}
          onChange={handleChange}
        />
      </Flex>

      <Flex borderBottom={"2px solid #fff"} mt="10%" gap="10px">
        <Input
          name="email"
          type="email"
          variant="unstyled"
          placeholder="Email ID"
          _focus={{ outline: "none" }}
          value={email}
          onChange={handleChange}
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
        <Box
          as="button"
          color="black"
          _hover={{ color: "red" }}
          onClick={handleSubmit}
        >
          CONTINUE
        </Box>
      </Flex>
    </Flex>
  );
};

export default function MultistepForm() {

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [loginCreds, setLoginCreds] = useState({});

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
          <Form1 handleNext={setStep} handleLogin={setLoginCreds} />
        ) : step === 2 ? (
          <OtpVerification loginCreds={loginCreds} />
        ) : step === 3 ? (
          <Form2 handleNext={setStep} />
        ) : (
          <Form3 handleLogin={setLoginCreds} handleNext={setStep} />
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
