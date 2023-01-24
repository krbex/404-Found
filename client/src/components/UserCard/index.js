import React from 'react'
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  Flex,
  Tag,
  Heading,
  Textarea,
  Center,
  Container
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'


const UserCard = () => (
    <Container>
      <Center mt={10}>
        <Box
          backgroundColor="whiteAlpha.500"
          boxShadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          maxWidth={350}
          maxHeight={650}
          textAlign="left"
          border="s"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            pb={2}
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              Welcome Gamer!
            </Heading>
          </Flex>
          <Stack ml={4} spacing={2} mt={4} mr={4}>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              backgroundColor="whiteAlpha.500"
            >
              <Avatar size="lg" />
            </Stack>
            <Stack spacing={2}>
              <Tag size="md" variant="subtle" colorScheme="blackAlpha">
                Gamer Online
              </Tag>
              <Textarea />
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Container>
  )

  export default UserCard;