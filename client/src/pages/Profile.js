import React from "react";
import UserCard from "../components/UserCard";

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
  // StackProps,
  Divider,
  useColorModeValue,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// import { AiFillGithub } from "react-icons/ai";

// export default function Profile() {
//   return <div> Hello World this is the Profile page </div>;
// }

const Profile = () => {
  return (
    <Flex>
      <Grid
        h="200px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <UserCard rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Flex>
  );
};

export default Profile;
