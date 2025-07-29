import {
  Box,
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Kbd,
  Portal,
} from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "./cartSlice";

export default function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <>
      <Box position="relative">
        {/* fix drawer for mobile*/}
        <Drawer.Root placement={{ mdDown: "bottom", md: "end" }}>
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="سبد خرید"
              as={FaShoppingCart}
              size="xs"
              variant="ghost"
            />
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content maxW="700px" dir="rtl">
                <Drawer.Header>
                  <Drawer.Title dir="rtl">سبد خرید</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  برای خروج از سبد خرید می توانید <Kbd>esc</Kbd> را بزنید
                </Drawer.Body>
                <Drawer.Footer>
                  <Drawer.ActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </Drawer.ActionTrigger>
                  <Button>Save</Button>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
        <Box
          position="absolute"
          top="-1"
          right="-1"
          bg="gray.400"
          color="white"
          minW="4"
          borderRadius="full"
          px="5px"
        >
          {totalCartQuantity}
        </Box>
      </Box>
    </>
  );
}
