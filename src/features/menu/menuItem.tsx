import { Button, Card, Image, Text } from "@chakra-ui/react";
import type { MenuItemTypes } from "../../types/menu";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

interface MenuItemProps {
  coffe: MenuItemTypes;
}
export default function MenuItem({ coffe }: MenuItemProps) {
  const { id, title, price } = coffe;
  const dispatch = useDispatch();
  function handleAddCart() {
    const newItem = {
      coffeId: id,
      title,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
    //console.log(newItem);
  }
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={coffe.image_url} alt="Green double couch with wooden legs" />
      <Card.Body gap="2">
        <Card.Title>{coffe.title}</Card.Title>
        <Card.Description>{coffe.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {coffe.price}T
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">خرید</Button>
        <Button variant="ghost" onClick={handleAddCart}>
          سبد خرید
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
