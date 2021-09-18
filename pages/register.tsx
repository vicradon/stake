import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { register } from "../api/auth";
import toast from "react-hot-toast";
import Navbar from "../src/Components/Navbar";
import errorHandler from "../src/utils/errorHandler";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLogin = (event) => {
    event.preventDefault();

    register(formData)
      .then(() => {
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        errorHandler(error).then((message) => toast.error(message));
      });
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box>
      <Navbar />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          as={"form"}
          onSubmit={handleLogin}
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Create an account</Heading>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                colorScheme={"teal"}
                bg={"teal.400"}
                _hover={{ bg: "teal.500" }}
                type="submit"
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/images/staking-funds.jpg"}
          />
        </Flex>
      </Stack>
    </Box>
  );
}
