import { Box } from "@chakra-ui/layout";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

interface Props {
  children: React.ReactNode;
}

function LandingLayout(props: Props) {
  const { children } = props;

  return (
    <Box>
      <Navbar />

      {children}

      <Footer />
    </Box>
  );
}

export default LandingLayout;
