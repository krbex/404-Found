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
    <UserAvatar/>
  //   <ChakraProvider resetCSS>
  //   <Flex
  //     display="flex"
  //     flexDirection="column"
  //     alignItems="center"
  //     justifyContent="center"
  //     textAlign="center"
  //     mt={4}
  //     backgroundColor="whiteAlpha.50"
  //   >
  //     <Flex
  //       display="flex"
  //       flexDirection="row"
  //       alignItems="flex-start"
  //       justifyContent="flex-start"
  //       border="sm"
  //       borderRadius="lg"
  //       backgroundColor="#f7f3f3"
  //       p={2}
  //       boxShadow="lg"
  //     >
  //       <Heading>Welcome Gamer!</Heading>
  //     </Flex>
  //   </Flex>
  //   <Container
  //     color="blackAlpha.800"
  //     mt={10}
  //     backgroundColor="#f7f3f3"
  //     border="md"
  //     borderRadius="md"
  //     boxShadow="xl"
  //     opacity={1}
  //   >
  //     <Box display="flex" justifyContent="center" alignItems="center">
  //       <UserAvatar/>
  //       <Container />
  //     </Box>
  //     <Box mt={4} color="whiteAlpha.500">
  //       <Heading></Heading>
  //       <Heading
  //         textAlign="center"
  //         fontSize="2xl"
  //         backgroundColor="whiteAlpha.100"
  //         color="blackAlpha.900"
  //         as="h2"
  //         borderRadius="md"
  //         border="sm"
  //         boxShadow="sm"
  //         display="flex"
  //         justifyContent="center"
  //         alignItems="center"
  //         m={1}
  //       >
  //         GG's {userData.firstName} {userData.lastName}
  //       </Heading>
  //     </Box>
  //     <Box m={2} backgroundColor="whiteAlpha.100">
  //       <Textarea pb={4} mb={2} />
  //     </Box>
  //   </Container>
  // </ChakraProvider>
    
  

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
