import React from 'react';
import {
  ChakraProvider,
  Stack,

  Grid,
  
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  Image
} from '@chakra-ui/react';

import {  ExternalLinkIcon } from '@chakra-ui/icons'

const AboutUs = () => (
  <ChakraProvider resetCSS>
    <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
      <Stack>
        <Box
          backgroundColor="#7f0909"
          boxShadow="sm"
          borderRadius={44}
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          color="#000000"
        >
          <Flex
            display="block"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            pb={2}
            backgroundColor="#000000"
            borderRadius={55}
          >
            <Heading
              size="lg"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              backgroundColor="#9e0000"
              fontStyle="italic"
              borderRadius={44}
            >
              About Us
            </Heading>
          </Flex>
          <Stack
            ml={4}
            spacing={2}
            mt={4}
            mr={4}
            pl={55}
            pr={55}
            pt={55}
            pb={55}
            backgroundColor="#000000"
            borderRadius={55}
          >
            <Stack justifyContent="center" alignItems="center" spacing={5}>
              <Image
                height="100px"
                width="100px"
                src="https://pbs.twimg.com/profile_images/1358912925054951424/i8Ig8AUQ_400x400.jpg"
              />
            </Stack>
            <Stack spacing={2}>
              <Text
                color="white"
                backgroundColor="#510a0a"
                textAlign="center"
                fontStyle="italic"
                fontWeight="bold"
                letterSpacing="wide"
                lineHeight={9}
                borderRadius={34}
              >
                If you want to see the builders of this app, click below!
              </Text>
              <IconButton
                aria-label="icon"
                icon={<ExternalLinkIcon />}
                size="lg"
                display="block"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                isRound
                variant="link"
                overflow="visible"
                opacity={0.53}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Grid>
  </ChakraProvider>
)

export default AboutUs
