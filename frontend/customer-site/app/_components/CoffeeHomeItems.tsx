"use client";

import Image from "next/image";
import { useCartStore } from "../_store/useCartStore";
import Button from "./ui/Button";

interface CoffeeHomeItemsProps {
  item: {
    name: string;
    price: number;
    id: number;
    image: string;
    description: string;
  };
}

export default function CoffeeHomeItems({
  item: coffee,
}: CoffeeHomeItemsProps) {
  const { id, price, name, image } = coffee;

  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <>
      <div className="text-center mb-2">
        <span className="block font-semibold" key={id}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="rounded mb-2"
          />
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
