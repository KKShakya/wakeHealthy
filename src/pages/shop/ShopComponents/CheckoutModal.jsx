import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  Stack,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { setItem } from "../../../utils/localStorage";
import { useToast } from "@chakra-ui/react";

export default function CheckoutModal({ cartTotal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(1);
  const toast = useToast();
  const [inputVal, setInputVal] = useState({
    name: "",
    address: "",
    account: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem("userInfo", inputVal);
    setStep(2);
    if (step == 2) {
      toast({
        title: "Order Placed",
        description: `for ${inputVal.name} at ${inputVal.address} `,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setStep(1);
    }
  };

  const handleInput = (e) => {
    let { placeholder, value } = e.target;
    setInputVal({ ...inputVal, [placeholder]: value });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        Buy Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delivery Info ({step}/2)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {step == 1 ? (
              <form onSubmit={handleSubmit}>
                <FormLabel>personal info</FormLabel>
                <Input
                  type="text"
                  placeholder="name"
                  value={inputVal.name}
                  onChange={handleInput}
                  required
                />
                <Input
                  type="text"
                  placeholder="address"
                  value={inputVal.address}
                  onChange={handleInput}
                  required
                />
                <Button type="submit" colorScheme={"red"} w="100%">
                  NEXT
                </Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormLabel>payment</FormLabel>
                <Input
                  type="text"
                  placeholder="account"
                  value={inputVal.account}
                  onChange={handleInput}
                  required
                />
                <Input
                  type="password"
                  placeholder="password"
                  value={inputVal.password}
                  onChange={handleInput}
                  required
                />
                <Button
                  type="submit"
                  colorScheme={"red"}
                  w="100%"
                  onClick={onClose}
                >
                  PLACE ORDER [ ₹ {cartTotal} ]
                </Button>
              </form>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
