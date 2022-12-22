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
  VStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_shop } from "../../redux/Shop/shop.action";

export default function UpdateProduct({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { SHOP } = useSelector((store) => store.shop);
  const [inputVal, setInputVal] = useState({ image: "", price: "" });
  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    let updated = { ...product, image: inputVal.image, price: inputVal.price };
    dispatch(update_shop(updated));
    setInputVal({ image: "", price: "" })
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  return (
    <>
      <Button onClick={onOpen} color="red">
        Update This Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack>
                <Input
                  type={"url"}
                  placeholder="enter image url to change"
                  name="image"
                  onChange={handleInput}
                  value={inputVal.image}
                  required
                />
                <Input
                  type={"number"}
                  placeholder="enter price to change"
                  name="price"
                  onChange={handleInput}
                  value={inputVal.price}
                  required
                />
                <Button type={"submit"} colorScheme="red" w={"100%"}>
                  Update
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

// export function UpdateCart() {
//   return (

//   );
// }
