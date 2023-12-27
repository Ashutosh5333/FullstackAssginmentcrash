import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const Homepage = () => {
  return (
    <>
      {/* <Flex w="95vw"   m="auto" mt="10" display={{base:"row",md:"flex", lg:"flex"}}   justifyContent={"space-between"} gap={"5"}>
        
        <Box  w={{base:"90vw",md:"90vw",lg:"90vw"}} m="auto" >
          <Dashboard/>
        </Box>
      </Flex> */}

      <Box textAlign="center" py={10}>
        <VStack spacing={6}>
          <Heading>Welcome to Our Website!</Heading>
          <Image
            src="https://images.unsplash.com/photo-1703593191806-962b4f2802e4?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Beautiful Landscape"
            // maxWidth="800px"
            width="100%"
            height="auto"
          />
          </VStack>
      </Box>
    </>
  );
};

export default Homepage;
