import React from "react";

import {
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Container,
  Icon,
  Avatar,
  Tooltip,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const userData = data?.user || {};
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      <Stack
        w="18rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Tooltip
            label="Austin, Texas"
            aria-label="Austin, Texas"
            placement="right-end"
            size="sm"
          >
            <Box pos="relative">
              <Avatar
                src=""
                name="Michael Harrison"
                size="xl"
                borderRadius="md"
              />
              <Avatar
                src=""
                name=""
                size="xs"
                borderRadius="full"
                pos="absolute"
                bottom={0}
                right="-12px"
              />
            </Box>
          </Tooltip>
          <Link isExternal href="">
            <Icon as={AiFillGithub} w={6} h={6} />
          </Link>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          {userData.firstName} {userData.lastName}
        </chakra.h1>
        <Text fontSize="md" color="gray.500"></Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          Games Owned
        </Text>
      </Stack>
    </Container>
  );
};

export default Profile;
