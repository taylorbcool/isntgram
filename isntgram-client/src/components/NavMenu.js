import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  ButtonGroup
} from "@chakra-ui/core";

function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} Color="brand" onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Button>Feed</Button>
            <Button>Account</Button>
            <Button>Log Out</Button>
          </DrawerHeader>

          <DrawerBody>
            <Button>Sports</Button>
            <Button>Beauty</Button>
            <Button>Music</Button>
            <Button>Photography</Button>
            <Button>Art</Button>
          </DrawerBody>

          <DrawerFooter>
            <Input placeholder="Find your interests" />
            <Button>Search</Button>
            {/* <Button>Cancel</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavMenu