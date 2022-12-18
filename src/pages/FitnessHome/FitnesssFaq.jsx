// // // this FAQ  Component to do by Sumit ss

// import React from "react";
// import"../../components/CarePageComponent/FAQ/FAQ.css";
// import { Accordion, Box, Text } from "@chakra-ui/react";
// import Accordion_Item from "../../components/CarePageComponent/FAQ/Accordion_Item";
// import data from '../../../db.json'


// const FitnessFaq = () => {
//   const [AccordionItems, SetAccordionItem] = React.useState([]);

//   React.useEffect(() => {
//    SetAccordionItem(data.Home_FAQ);
//   }, []);

//   return (
//     <div className="faq_div">
//       <Box
//         className="Faq_heading"
//         h={{ base: "60px", md: "90px", lg: "110px" }}
//       >
//         <Text fontSize={{ base: "18px", md: "22px", lg: "30px" }}>
//           <b>FAQS</b>{" "}
//         </Text>
//         <Text
//           fontSize={{ base: "10px", md: "15px", lg: "20px" }}
//           color="#6A6A6A"
//         >
//           7 Question
//         </Text>
//       </Box>


//       <div className="Accordion">
//         <Accordion allowToggle>
//           {AccordionItems.map((item) => (
//             <Accordion_Item item={item} key={Math.random() * 100000} />
//           ))}
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default FitnessFaq;
