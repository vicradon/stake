import React from "react";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import LandingLayout from "../src/Layouts/LandingLayout";

function Index() {
  return (
    <LandingLayout>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Stake Money and{" "}
            <Text as={"span"} color={"teal.400"}>
              Get Productive
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            We offer the best productivity software for professionals. Securely
            stake funds, get working and <Box as={"b"}>recover your funds</Box>{" "}
            when you're done.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"teal"}
              bg={"teal.400"}
              _hover={{ bg: "teal.500" }}
            >
              Get started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={"full"} justify="center">
            <img src="/images/productive-lady.jpg" alt="player" />
          </Flex>
        </Stack>
      </Container>
    </LandingLayout>
  );
}

export default Index;
