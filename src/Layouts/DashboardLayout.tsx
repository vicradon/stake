import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import {
  RiDashboardLine,
  RiTodoFill,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import NavLink from "../Components/NavLink";
import { Button } from "@chakra-ui/button";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout(props: Props) {
  const { children } = props;

  const links = [
    {
      title: "Dashboard",
      location: "/dashboard",
      icon: RiDashboardLine,
    },
    {
      title: "Tasks",
      location: "/tasks",
      icon: RiTodoFill,
    },
    {
      title: "Profile",
      location: "/profile",
      icon: AiOutlineUser,
    },
  ];

  return (
    <Grid templateColumns="250px 1fr">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100vh"
        p="2rem"
      >
        <img width="100px" src="/images/logo-text.png" alt="text logo" />
        <Box>
          {links.map((link, index) => (
            <NavLink key={index} href={link.location}>
              <a className="text-gray">
                <Flex my="2rem" alignItems="center">
                  <link.icon size={32} />
                  <Text ml="1rem">{link.title}</Text>
                </Flex>
              </a>
            </NavLink>
          ))}
        </Box>

        <Button
          justifyContent="left"
          _hover={{ bg: "transparent" }}
          padding="0"
          bg="transparent"
        >
          <Flex className="text-gray" alignItems="center">
            <RiLogoutCircleRLine size={32} />
            <Text ml="1rem">Logout</Text>
          </Flex>
        </Button>
      </Box>

      <Grid templateRows="70px 1fr">
        <Flex justify="end" boxShadow="0px 2px 5px -6px rgba(200,200,200,1);">
          <Box></Box>
        </Flex>

        <Box bg="#F9FAFB" p="2rem">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashboardLayout;
