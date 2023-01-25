import React from 'react';
import { Box, Heading, Flex, AspectRatio, Center } from "@chakra-ui/react";
import Landing from '../Landing';
import  "animate.css"  
export const IntroTitle = () => {
  return (
    <Center>
    <Box w="1200px" bg="blackAlpha.800" px="200px" py="60px" mb="120px">
      <Flex   pb="px">
        
        <Heading  className='SlidingText' as= 'I' fontSize={54} textAlign="center" letterSpacing="3px" color="whiteAlpha.900">
          Welcome Gamers...
        </Heading>
        
      </Flex>
      
      <AspectRatio w="full" ratio={16 / 9} mb="-200px">
        <Landing />
      </AspectRatio>
    </Box>
    </ Center>
    
  );
};
