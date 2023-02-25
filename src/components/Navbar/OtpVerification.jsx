import { Center, Heading, useToast } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Flex,
  Stack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { signIn } from "../../redux/Auth/auth.action";


export default function OtpVerification() {
  const toast = useToast()
  const { phoneConfirmObj } = useSelector(store => store.auth)
  const dispatch = useDispatch();
 console.log(phoneConfirmObj)
  const [OTP, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(phoneConfirmObj)
    if (OTP !== "" || OTP !== null) {

      try {

         await  phoneConfirmObj.confirmObj.confirm(OTP);

        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 1500,
          position:"top",
          isClosable: true,
        })
        dispatch(signIn())
      } catch (error) {
           console.log(error.message)
           toast({
            title: `${error.message}`,
            status: 'error',
            duration: 1500,
            position:"top",
            isClosable: true,
          })
      }

    } else {
      toast({
        title: 'Please Enter the correct OTP.',
        status: 'error',
        duration: 1500,
        position: "top",
        isClosable: true,
      })
    }
  };
  // console.log(loginCreds);
  return (
    <Flex align={"center"} justify={"center"} bg={"black"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={"black"}
        rounded={"xl"}
        color="#fff"
        p={5}
        my={5}
      >
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Enter OTP
          </Heading>
        </Center>
        <Box fontSize={{ base: "sm", sm: "md" }} color="#fff" ml="10px">
          We have sent code to your number
        </Box>
        <FormControl>
          <Center>
            <HStack>
              <PinInput onChange={(e) => setOtp(e)} otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            type="submit"
            bg={"#b3b3b3"}
            color={"black"}
            _hover={{
              bg: "#fff",
              color: "red",
            }}
            onClick={handleSubmit}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
