import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import Navbar from "../src/Components/Navbar";
import errorHandler from "../src/utils/errorHandler";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (event) => {
    event.preventDefault();

    login(formData)
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
            <Heading fontSize={"2xl"}>Login to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                onChange={handleInputChange}
                value={formData.password}
                required
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"teal"}
                bg={"teal.400"}
                _hover={{ bg: "teal.500" }}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/images/productivity.jpg"}
          />
        </Flex>
      </Stack>
    </Box>
  );
}
