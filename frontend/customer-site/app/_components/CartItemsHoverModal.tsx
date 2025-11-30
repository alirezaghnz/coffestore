import Image from "next/image";
import { useCartStore } from "../_store/useCartStore";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartItemsHoverModal() {
  const { cartItems: items, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="w-80 bg-white border shadow-2xl rounded-xl z-50 p-4">
      {items.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید خالی است</p>
      ) : (
        <div className="max-h-72 overflow-y-auto space-y-4">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="flex justify-between gap-3 items-center border-b py-2"
            >
              <Image
                src={item.image}
                width={60}
                height={60}
                alt={item.name}
                className="rounded-md border"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700">
                  {item.name}
                </p>
                <p className="text-xs mt-1 text-gray-600">
                  {Number(item.price).toLocaleString("fa-IR")} تومان
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center "
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className="flex justify-between mt-4 font-bold text-gray-700">
            <span>مبلغ پرداخت:‌</span>
            <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
          </div>
          <Link
            href="/checkout/order"
            className="block mt-4 w-full bg-black/50 rounded-lg text-white text-center py-3 "
          >
            ثبت سفارش
          </Link>
        </>
      )}
    </div>
  );
}
