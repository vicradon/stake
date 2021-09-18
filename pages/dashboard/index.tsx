import { Heading } from "@chakra-ui/layout";
import React from "react";
import DashboardLayout from "../../src/Layouts/DashboardLayout";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <DashboardLayout>
      <Heading>Bets</Heading>
    </DashboardLayout>
  );
}

export default Home;
