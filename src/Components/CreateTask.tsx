import { useState, Fragment } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  Stack,
  Flex,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { createTask } from "../../api/tasks";
import errorHandler from "../utils/errorHandler";
import toast from "react-hot-toast";

function CreateTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
  });
  const handleCreateTask = (event) => {
    event.preventDefault();

    createTask(formData)
      .then(() => {})
      .catch((error) => {
        errorHandler(error).then((message) => toast.error(message));
      });
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Fragment>
      <Button
        colorScheme={"teal"}
        bg={"teal.400"}
        _hover={{ bg: "teal.500" }}
        onClick={onOpen}
      >
        Create Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack direction={{ base: "column", md: "row" }}>
              <Flex
                as={"form"}
                onSubmit={handleCreateTask}
                flex={1}
                align={"center"}
                justify={"center"}
              >
                <Stack spacing={4} w={"full"} maxW={"md"}>
                  <FormControl id="title">
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      type="title"
                      onChange={handleInputChange}
                      value={formData.title}
                      required
                    />
                  </FormControl>
                  <FormControl id="deadline">
                    <FormLabel>deadline</FormLabel>
                    <Input
                      name="deadline"
                      type="deadline"
                      onChange={handleInputChange}
                      value={formData.deadline}
                      required
                    />
                  </FormControl>
                  <Stack spacing={6}>
                    <Button
                      colorScheme={"teal"}
                      bg={"teal.400"}
                      _hover={{ bg: "teal.500" }}
                      type="submit"
                    >
                      Create Task
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default CreateTask;
