import React from 'react';
import { Flex, Heading, HStack, Link } from "@chakra-ui/react";

export const Title = () => {
  return (
    <Flex
      px="200px"
      py="20px"
      width="full"
      bg="blackAlpha.800"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Heading
          color="whiteAlpha.900"
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
        >
          GAMING GODS
        </Heading>
        <HStack color="whiteAlpha.700" spacing="40px">
          <Link>HOME</Link>
          <Link>GAMES</Link>
          <Link>PROFILE</Link>
          <Link>LOG IN</Link>
          <Link>SIGN UP</Link>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Title;