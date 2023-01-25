import React from "react";
import UserAvatar from "../components/Avatar";



import {
  ChakraProvider,
  Flex,
  Heading,
  Tag,
  Box,
  Stack,
  Textarea,
  Container,
  Text,
} from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";


const Profile = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const userData = data?.user || {};
  console.log(userData);

  return (
    
    <ChakraProvider resetCSS>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        border="md"
        borderRadius="md"
        backgroundColor="blackAlpha.400"
        mt={40}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
          m={4}
          backgroundColor="transparent"
          border="md"
          borderRadius="md"
        >
          Welcome {userData.firstName} {userData.lastName}!
        </Text>
      </Flex>
      <Text
        color="whiteAlpha.500"
        p={3}
        fontWeight="bold"
        textAlign="center"
        m={3}
      >
        GG's! Get gaming!
      </Text>
      <Stack flexDirection="column" alignItems="stretch" spacing={10}>
        <Box
          backgroundColor="blackAlpha.400"
          boxShadow="2xl"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="md"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            pb={2}
            border="sm"
            borderRadius="sm"
          >
            <Heading
              size="lg"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {' '}
              {userData.firstName} {userData.lastName}!
            </Heading>
          </Flex>
          <UserAvatar display="flex" size="xl" m={4} />
          <Container m={4}>
            <Text textAlign="left">Status Message:</Text>
            <Textarea backgroundColor="whiteAlpha.400" />
          </Container>
          <Container
            m={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text textAlign="center" fontSize="2xl">
              See more of what this gamer has to show off!
            </Text>
          </Container>
        </Box>
        <Box
          backgroundColor="blackAlpha.400"
          borderRadius="lg"
          boxShadow="2xl"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="block"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            border="md"
            borderRadius="md"
          >
            <Text
              display="flex"
              justifyContent="center"
              fontWeight="bold"
              fontSize="4xl"
              pb={3}
            >
              Godly Gamer Stuff
            </Text>
          </Flex>
          <Stack spacing={4} ml={4} mt={4} alignItems="stretch">
            <Stack spacing={2} textAlign="left">
              <Tag
                size="md"
                variant="subtle"
                colorScheme="red"
                display="inline"
                boxShadow="2xl"
                alignItems="center"
              >
                About Me
              </Tag>
              <Text fontSize="md" color="gray.600"></Text>
              <Textarea
                border="md"
                borderRadius="md"
                boxShadow="2xl"
                textAlign="left"
                fontSize="md"
                backgroundColor="whiteAlpha.400"
              />
            </Stack>
            <Stack spacing={2} textAlign="left">
              <Tag size="md" variant="subtle" colorScheme="yellow">
                God Tier Games
              </Tag>
              <Flex
                flexDirection="column"
                alignItems="center"
                m={2}
                backgroundColor="whiteAlpha.400"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="space-between"
                  backgroundColor="gray.400"
                />
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </ChakraProvider>
  
  );
};

export default Profile;
