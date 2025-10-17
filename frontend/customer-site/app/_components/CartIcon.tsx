"use client";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../_store/useCartStore";

export default function CartIcon() {
  const coffeeLength = useCartStore((state) => state.cartItems);
  return (
    <div>
      <ShoppingCart className="w-6 h-6" />
      <div>{coffeeLength.length}</div>
    </div>
  );
}
