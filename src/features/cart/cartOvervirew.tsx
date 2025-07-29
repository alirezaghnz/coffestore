import { Box, Drawer, IconButton } from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "./cartSlice";
import CartDrawer from "./CartDrawer";

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
          <CartDrawer />
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
