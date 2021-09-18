import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <Box shadow="sm">
      <Container maxW="container.xl" py="1rem">
        <Flex align="center" justify="space-between">
          <Link href="/">
            <a>
              <Image width="150px" src="/images/logo-text.png" />
            </a>
          </Link>

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
