import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Flex, VStack } from "@chakra-ui/react";

export default function AppLayout() {
  return (
    <>
      <VStack w="100%" bg="gray.50">
        <Header />

        <Flex w="100%" direction="column" h="200vh">
          <Outlet />
        </Flex>
        <Footer />
      </VStack>
    </>
  );
}
