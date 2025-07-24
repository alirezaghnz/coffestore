import {
  Avatar,
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export default function Header() {
  return (
    <Box
      bg="yellow.50"
      px={6}
      py={9}
      color="black"
      boxShadow="lg"
      position="sticky"
    >
      <Flex align="center">
        <Heading dir="rtl" size="md">
          The Best Coffe
        </Heading>
        <Spacer />
        <InputGroup
          flex="1"
          color="blackAlpha.900"
          borderColor="gray.100"
          startElement={<LuSearch />}
          display={{ base: "none", sm: "block" }}
        >
          <Input
            bg="blackAlpha.200"
            _placeholder={{ color: "blackAlpha.900" }}
            placeholder="جستجو"
          />
        </InputGroup>

        <Spacer />
        <Avatar.Root>
          <Avatar.Fallback />
        </Avatar.Root>
      </Flex>
    </Box>
  );
}
