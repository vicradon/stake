import { Flex, Heading, Box } from "@chakra-ui/layout";
import React from "react";
import { RiTaskLine } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import SummaryCard from "../src/Components/SummaryCard";
import DashboardLayout from "../src/Layouts/DashboardLayout";
import { formatAsCurrency } from "../src/utils/utilities";
import TaskHistory from "../src/Components/TaskHistory";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <DashboardLayout>
      <Box mb="2rem">
        <Heading fontSize="2xl" color="gray">
          Dashboard
        </Heading>
      </Box>

      <Flex mb="2rem" justify="space-between" align="center">
        <SummaryCard title="Completed Tasks" content="5">
          <RiTaskLine size={50} color="green" />
        </SummaryCard>
        <SummaryCard title="Pending Tasks" content="7">
          <GiSandsOfTime size={50} color="yellow" />
        </SummaryCard>
        <SummaryCard
          title="Total funds staked"
          content={formatAsCurrency(45000)}
        >
          <RiTaskLine size={50} color="green" />
        </SummaryCard>
      </Flex>

      <Box mb="2rem">
        <Heading mb="2rem" fontSize="2xl" color="gray">
          Transaction History
        </Heading>
        <TaskHistory />
      </Box>
    </DashboardLayout>
  );
}

export default Home;
