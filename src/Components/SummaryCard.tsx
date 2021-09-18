import { Box, Flex, Text } from "@chakra-ui/layout";

function SummaryCard({ title, children, content }) {
  return (
    <Flex
      justify="space-between"
      width="300px"
      shadow="base"
      rounded="lg"
      bg="white"
      p="2rem"
    >
      {children}
      <Box>
        <Text>{title}</Text>
        <Text fontSize="3xl">{content}</Text>
      </Box>
    </Flex>
  );
}

export default SummaryCard;
