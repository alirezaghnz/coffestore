"use client";

import { X, Trash } from "lucide-react";
import { useCartStore } from "../_store/useCartStore";
import Image from "next/image";
import Link from "next/link";

export default function MobileCartDrawer({
  closeDrawer,
}: {
  closeDrawer: () => void;
}) {
  const { cartItems, updateQuantity, removeFromCart } = useCartStore();

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={closeDrawer} />

      <div
        className="
          fixed bottom-0 left-0 w-full bg-white rounded-t-2xl 
          p-5 z-50 shadow-xl max-h-[80vh] overflow-y-auto
          animate-slideUp
        "
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">سبد خرید</h2>
          <button onClick={closeDrawer}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-6">سبد خرید خالی است</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border rounded-xl p-3 flex gap-3">
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  alt={item.name}
                  className="rounded-md"
                />

                <div className="flex flex-col justify-between flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">
                    {Number(item.price).toLocaleString("fa-IR")} تومان
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                    <span>{item.quantity}</span>

                    {item.quantity > 1 ? (
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    ) : (
                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash className="w-5 h-5 text-red-500" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/checkout/cart"
              className="bg-black text-center text-white rounded-lg py-3"
            >
              سفارش
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
