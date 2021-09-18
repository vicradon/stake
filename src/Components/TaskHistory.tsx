import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React from "react";
import { formatAsCurrency } from "../utils/utilities";

interface Props {}

function TaskHistory(props: Props) {
  const {} = props;

  return (
    <Table variant="simple">
      <TableCaption>Last 10 tasks</TableCaption>
      <Thead>
        <Tr>
          <Th>Task</Th>
          <Th>Date Due</Th>
          <Th isNumeric>Staked Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Complete Statitics Assignmemnt</Td>
          <Td>24th September 2021</Td>
          <Td isNumeric>{formatAsCurrency(10000)}</Td>
        </Tr>
        <Tr>
          <Td>Learn Moonwalking</Td>
          <Td>20th September 2021</Td>
          <Td isNumeric>{formatAsCurrency(7000)}</Td>
        </Tr>
        <Tr>
          <Td>Complete Duolingo Milestone</Td>
          <Td>23rd September 2021</Td>
          <Td isNumeric>{formatAsCurrency(15000)}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default TaskHistory;
