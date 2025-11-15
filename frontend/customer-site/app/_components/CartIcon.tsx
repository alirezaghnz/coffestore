"use client";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../_store/useCartStore";
import Link from "next/link";

export default function CartIcon() {
  const coffeeLength = useCartStore((state) => state.cartItems);

  return (
    <Link href="/checkout/cart">
      <ShoppingCart className="w-7 h-7" />
      {coffeeLength.length > 0 && (
        <p className="bg-coffee-600 w-4 text-sm text-white text-center rounded-md translate-x-2 translate-y-[-19px]">
          {coffeeLength.length}
        </p>
      )}
    </Link>
  );
}
