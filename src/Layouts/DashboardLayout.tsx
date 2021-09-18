import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import MobileDrawer from "./MobileDrawer";
import Sidenav from "./Sidenav";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout(props: Props) {
  const { children } = props;

  return (
    <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }}>
      <Box display={{ base: "none", md: "block" }}>
        <Sidenav showLogo={true} />
      </Box>
      <Grid templateRows="70px 1fr">
        <Flex
          justify={{ base: "space-between", md: "end" }}
          boxShadow="0px 2px 5px -6px rgba(200,200,200,1)"
          alignItems="center"
          px="2rem"
        >
          <MobileDrawer />
          <Avatar bg="teal.500" />
        </Flex>

        <Box bg="#F9FAFB" p="2rem">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashboardLayout;
