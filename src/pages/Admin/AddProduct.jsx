import {
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_shop } from "../../redux/Shop/shop.action";

// export default function AddProduct() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   let dispatch = useDispatch();
//   const [inputVal, setInputVal] = useState({ title: "", image: "", price: "" });

//   const handleInput = (e) => {
//     let { name, value } = e.target;
//     setInputVal({ ...inputVal, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let { title, price } = inputVal;
//     let product = {
//       ...inputVal,
//       id: title + Math.floor(Math.random() * 10),
//       size: ["XS", "S", "M", "L", "XL", "XXL"],
//       rating: "5",
//       strike: +price + 200,
//     };
//     console.log(product);
//     dispatch(add_to_shop(product));
//   };

//   return <></>;
// }

export default function AddProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let dispatch = useDispatch();
  const [inputVal, setInputVal] = useState({ title: "", image: "", price: "" });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { title, price } = inputVal;
    let product = {
      ...inputVal,
      id: title + Math.floor(Math.random() * 10),
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      rating: "5",
      strike: +price + 200,
    };
    console.log(product);
    dispatch(add_to_shop(product));
    setInputVal({ image: "", price: "" });
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        ADD PRODUCT
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input
                name="title"
                type="text"
                value={inputVal.title}
                placeholder="product title"
                onChange={handleInput}
                required
              />
              <Input
                name="image"
                type="url"
                value={inputVal.image}
                placeholder="product image"
                onChange={handleInput}
                required
              />
              <Input
                name="price"
                type="number"
                value={inputVal.price}
                placeholder="product price"
                onChange={handleInput}
                required
              />
              <Button type="submit" colorScheme={"green"} w="100%">
                ADD PRODUCT
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
