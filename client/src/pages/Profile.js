import React from "react";
import UserAvatar from "../components/Avatar";
import {
  ChakraProvider,
  Center,
  Flex,
  Heading,
  Tag,
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Textarea,
  Container,
  Icon,
  Avatar,
  Tooltip,
  StackProps,
  Divider,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiFillGithub } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

// export default function Profile() {
//   return <div> Hello World this is the Profile page </div>;
// }

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
        mt={4}
        backgroundColor="whiteAlpha.50"
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          border="sm"
          borderRadius="lg"
          backgroundColor="#f7f3f3"
          p={2}
          boxShadow="lg"
        >
          <Heading>Welcome Gamer!</Heading>
        </Flex>
      </Flex>
      <Container
        color="blackAlpha.800"
        mt={10}
        backgroundColor="#f7f3f3"
        border="md"
        borderRadius="md"
        boxShadow="xl"
        opacity={1}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <UserAvatar />
          <Container />
        </Box>
        <Box mt={4} color="whiteAlpha.500">
          <Heading></Heading>
          <Heading
            textAlign="center"
            fontSize="2xl"
            backgroundColor="whiteAlpha.100"
            color="blackAlpha.900"
            as="h2"
            borderRadius="md"
            border="sm"
            boxShadow="sm"
            display="flex"
            justifyContent="center"
            alignItems="center"
            m={1}
          >
            GG's {userData.firstName} {userData.lastName}
          </Heading>
        </Box>
        <Box m={2} backgroundColor="whiteAlpha.100">
          <Textarea pb={4} mb={2} />
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Profile;
