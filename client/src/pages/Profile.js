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
    <Container opacity={1} display="flex">
      <Center
        mt={10}
        display="flex"
        maxWidth={650}
        border="md"
        color="blackAlpha.500"
      >
        <Box
          backgroundColor="blackAlpha.600"
          borderRadius="md"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          textAlign="left"
          border="md"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            pb={2}
            backgroundColor="whiteAlpha.600"
            border="sm"
            textAlign="center"
            opacity={0.98}
            borderRadius="sm"
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontFamily="heading"
              color="red.500"
              opacity={1}
              fontSize="2xl"
            >
              Welcome {userData.firstName} {userData.lastName}!
            </Heading>
          </Flex>
          <Stack
            ml={4}
            spacing={2}
            mt={4}
            mr={4}
            backgroundColor="whiteAlpha.600"
            border="sm"
            borderRadius="md"
            alignItems="center"
            justifyContent="center"
            display="grid"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              backgroundColor="whiteAlpha.400"
              color="whiteAlpha.500"
            >
              <br></br>
              <UserAvatar/>
              <br></br>
            </Stack>
            <Stack spacing={2} border="sm" backgroundColor="whiteAlpha.300">
              <Tag
                size="md"
                variant="solid"
                colorScheme="whatsapp"
                backgroundColor="blackAlpha.500"
              >
                Gamer Online
              </Tag>
              <Textarea
                border="md"
                borderRadius="sm"
                opacity={1}
                textAlign="left"
                color="whiteAlpha.500"
                backgroundColor="whiteAlpha.600"
                minWidth={100}
                minHeight={100}
              />
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Container>
  </ChakraProvider>
    
  

    // <Container maxW="5xl" p={{ base: 5, md: 6 }}>
    //   <Stack
    //     w="18rem"
    //     spacing={2}
    //     p={4}
    //     border="1px solid"
    //     borderColor={useColorModeValue("gray.400", "gray.600")}
    //     rounded="md"
    //     margin="0 auto"
    //     _hover={{
    //       boxShadow: useColorModeValue(
    //         "0 4px 6px rgba(160, 174, 192, 0.6)",
    //         "0 4px 6px rgba(9, 17, 28, 0.4)"
    //       ),
    //     }}
    //   >
    //     <HStack justifyContent="space-between" alignItems="baseline">
    //       <Tooltip
    //         label="Austin, Texas"
    //         aria-label="Austin, Texas"
    //         placement="right-end"
    //         size="sm"
    //       >
    //         <Box pos="relative">
    //           <Avatar
    //             src=""
    //             name="Michael Harrison"
    //             size="xl"
    //             borderRadius="md"
    //           />
    //           <Avatar
    //             src=""
    //             name=""
    //             size="xs"
    //             borderRadius="full"
    //             pos="absolute"
    //             bottom={0}
    //             right="-12px"
    //           />
    //         </Box>
    //       </Tooltip>
    //       <Link isExternal href="">
    //         <Icon as={AiFillGithub} w={6} h={6} />
    //       </Link>
    //     </HStack>
    //     <chakra.h1 fontSize="xl" fontWeight="bold">
    //      {userData.firstName} {userData.lastName}
    //     </chakra.h1>
    //     <Text fontSize="md" color="gray.500">
    //       {/* {userData.orders.map(order => {
    //         return (
    //           <div>
    //             <h2> */}
    //               {/* once in an array we can map through games with this ex. order.games.names*/}
    //               {/* {orders.game}
    //             </h2>
    //           </div>
    //         ) */}
    //       {/* })} */}
    //     </Text>
    //     <Divider />
    //     <Text fontSize="md" color="gray.500">
    //       Games Owned
    //     </Text>
    //   </Stack>
    // </Container>
  );
};

export default Profile;
