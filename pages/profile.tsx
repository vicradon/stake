import DashboardLayout from "../src/Layouts/DashboardLayout";
import { Heading, Box } from "@chakra-ui/layout";

interface Props {}

function Profile(props: Props) {
  const {} = props;

  return (
    <DashboardLayout>
      <Box as={"section"}>
        <Heading fontSize="2xl" color="gray">
          Profile
        </Heading>
      </Box>
    </DashboardLayout>
  );
}

export default Profile;
