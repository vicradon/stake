import DashboardLayout from "../src/Layouts/DashboardLayout";
import { Heading, Box, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import CreateTask from "../src/Components/CreateTask";

interface Props {}

function Tasks(props: Props) {
  const {} = props;

  return (
    <DashboardLayout>
      <Flex justify="space-between" as={"section"}>
        <Heading>Tasks</Heading>

        <CreateTask />
      </Flex>
    </DashboardLayout>
  );
}

export default Tasks;
