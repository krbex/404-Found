import React from 'react';
import {
  Box,
  Text,
  Center,
  Heading
} from '@chakra-ui/react';

const AboutUs = () => (
  <Center as="section" bg="gray.100" h="50vh">
    <Box maxW="420px" bg="black" p="6">
      <Heading my="4" size="lg" color="white">
        Why we Sell Games
      </Heading>
      <Text color="white">
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
      </Text>
    </Box>

  </Center>
)

export default AboutUs
