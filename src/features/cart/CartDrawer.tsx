import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  Kbd,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartDrawerItems from "./CartDrawerItems";

export default function CartDrawer() {
  const cart = useSelector(getCart);
  return (
    <>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxW="700px" dir="rtl">
            <Drawer.Header>
              <Drawer.Title dir="rtl">سبد خرید</Drawer.Title>
            </Drawer.Header>
            <Text px="50px" fontSize="20px">
              برای خروج از سبد خرید می توانید <Kbd fontWeight="bold">esc</Kbd>{" "}
              را بزنید
            </Text>
            <DrawerBody>
              {cart.map((item) => (
                <CartDrawerItems item={item} key={item.id} />
              ))}
            </DrawerBody>
            <Drawer.Footer>
              <Button bg="red.600" width="70%">
                خرید
              </Button>
              <Text color="green.500" fontWeight="semibold">
                قیمت کل : 500 هزارتومان
              </Text>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </>
  );
}
