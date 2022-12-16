import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
 Box,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

export default function OtpVerification() {
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
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={"#fff"}>
          username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
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
            bg={'#b3b3b3'}
            color={'black'}
            _hover={{
              bg: '#fff',
              color:"red",
            }}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}