import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export default function AppLayout() {
  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr auto"
      h="100vh"
      overflow="auto"
    >
      <Header />
      <Box overflow="scroll" bg="bg.subtle">
        <Box pt="10">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
