import { Flex, Image, Text } from "@chakra-ui/react";
import type { CartItemsType } from "../../types/cart";

export default function CartDrawerItems({ item }: { item: CartItemsType }) {
  const { title, price, image_url } = item;
  return (
    <Flex direction="column" py="10px">
      <Flex
        border="1px solid gray"
        borderRadius="sm"
        py="20px"
        px="20px"
        direction="column"
        gap="10px"
      >
        <Flex fontSize="15px" fontWeight="bold" direction="row">
          <Image src={image_url} />
          <Text>{title}</Text>
        </Flex>
        <Text fontSize="xs" color="gray.500">
          {price}هزار تومان
        </Text>
      </Flex>
    </Flex>
  );
}
