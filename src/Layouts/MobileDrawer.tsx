import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import Sidenav from "./Sidenav";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        _click={{ bg: "transparent" }}
        justifyContent="center"
        aria-label="Menu"
        backgroundColor="transparent"
        icon={<FaBars size={24} />}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <img width="100px" src="/images/logo-text.png" alt="text logo" />
          </DrawerHeader>

          <DrawerBody>
            <Sidenav showLogo={false} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
