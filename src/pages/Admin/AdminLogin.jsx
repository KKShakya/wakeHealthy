import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export default function AdminLogin() {
  const [inputVal, setInputVal] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const toast = useToast();

  const handleInput = (e) => {
    let { placeholder, value } = e.target;
    setInputVal({ ...inputVal, [placeholder]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://reqres.in/api/login", inputVal);
      navigate("/admin");
    } catch (err) {
      toast({
        title: err.response.data.error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Heading>Admin Login</Heading>
          <Input
            placeholder="email"
            value={inputVal.email}
            onChange={handleInput}
            type={"email"}
          />
          <Input
            placeholder="password"
            value={inputVal.password}
            onChange={handleInput}
            type={"password"}
          />
          <Button type="sumit" colorScheme={"red"}>
            Submit
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}
