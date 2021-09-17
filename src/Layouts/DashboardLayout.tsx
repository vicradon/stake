import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout(props: Props) {
  const { children } = props;

  const links = [
    {
      title: "Home",
      location: "/dashboard/home",
      icon: FaHome,
    },
  ];

  return (
    <Grid templateColumns="250px 1fr">
      <Box h="100vh" bg="#171923" p="2rem">
        {links.map((link, index) => (
          <Link key={index} href={link.location}>
            <a>
              <Flex alignItems="center" color="white">
                <link.icon />
                <Text ml="1rem">{link.title}</Text>
              </Flex>
            </a>
          </Link>
        ))}
      </Box>

      <Box>{children}</Box>
    </Grid>
  );
}

export default DashboardLayout;
