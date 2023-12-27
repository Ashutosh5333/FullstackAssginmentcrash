import React from 'react'
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Dashboard from '../components/Dashboard';

const Homepage = () => {
    
  return (
    <>
       <Flex w="95vw"   m="auto" mt="10" display={{base:"row",md:"flex", lg:"flex"}}   justifyContent={"space-between"} gap={"5"}>
        
        <Box  w={{base:"90vw",md:"90vw",lg:"90vw"}} m="auto" >
          <Dashboard/>
        </Box>
      </Flex>

    </>
  )
}

export default Homepage