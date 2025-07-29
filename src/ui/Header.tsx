import {
  Avatar,
  Flex,
  Heading,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

import { Link } from "react-router";
import CartOverview from "../features/cart/cartOvervirew";

export default function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h="150px"
      bg="yellow.50"
      boxShadow="lg"
      py="10"
      px="6"
    >
      <Heading dir="rtl" size="md">
        <Link to="/"> کافه پمو</Link>
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
          w="100%"
        />
      </InputGroup>
      <Spacer />
      <Flex gap="10px">
        <Avatar.Root>
          <Avatar.Fallback />
        </Avatar.Root>
        <CartOverview />
      </Flex>
    </Flex>
  );
}
