"use client";
import { useCartStore } from "../_store/useCartStore";
import Button from "./ui/Button";

interface CoffeeHomeItemsProps {
  item: {
    name: string;
    price: number;
    id: number;
  };
}

export default function CoffeeHomeItems({
  item: coffee,
}: CoffeeHomeItemsProps) {
  const { id, price, name } = coffee;
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <>
      <div className="w-40 h-40 mx-auto mt-2 rounded-md bg-[url('/header.jpg')] bg-cover bg-center"></div>
      <div className="text-center mt-7 mb-5">
        <span className="block font-semibold" key={id}>
          میلک شیک {name}
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-medium">{price} تومان</span>
        <Button onClick={() => addToCart(coffee)}>سبد خرید</Button>
      </div>
    </>
  );
}
