import React from "react";
import NavLink from "../Components/NavLink";
import { Button } from "@chakra-ui/button";
import {
  RiDashboardLine,
  RiTodoFill,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Text, Flex, Box } from "@chakra-ui/layout";

function Sidenav({ showLogo = true }) {
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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100vh"
      p="2rem"
    >
      {showLogo && (
        <img width="100px" src="/images/logo-text.png" alt="text logo" />
      )}
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
  );
}

export default Sidenav;
