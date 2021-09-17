import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <Box shadow="sm">
      <Container maxW="container.xl" py="1rem">
        <Flex align="center" justify="space-between">
          <Heading>Stake</Heading>

          <Flex>
            <Link href="/login">
              <a>
                <Box mx=".5rem">
                  <Button colorScheme="gray">Login</Button>
                </Box>
              </a>
            </Link>
            <Link href="/register">
              <a>
                <Box mx=".5rem">
                  <Button
                    colorScheme={"teal"}
                    bg={"teal.400"}
                    _hover={{ bg: "teal.500" }}
                  >
                    Register
                  </Button>
                </Box>
              </a>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
