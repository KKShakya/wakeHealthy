import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Stack,
 Box,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/Auth/auth.action';

export default function OtpVerification({loginCreds}) {
 
 const dispatch  = useDispatch();

 const [OTP,setOtp] = useState("");

const handleSubmit = (e)=>{
e.preventDefault();
if(OTP==="1234" && OTP!=="")
{
  dispatch(signIn(loginCreds));
  alert("Account created succcessfully");
}else{
  alert("Please Enter the correct otp");
}
}
console.log(loginCreds);
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={"black"}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={"black"}
        rounded={'xl'}
        color="#fff"
        p={5}
        my={5}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Enter OTP
          </Heading>
        </Center>
        <Box
          fontSize={{ base: 'sm', sm: 'md' }}
          color="#fff" ml="10px">
          We have sent code to your number
        </Box>
        <FormControl>
          <Center>
            <HStack>
              <PinInput onChange={(e)=>setOtp(e)}  otp>
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
            bg={'#b3b3b3'}
            color={'black'}
            _hover={{
              bg: '#fff',
              color:"red",
            }}
            onClick={handleSubmit}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}