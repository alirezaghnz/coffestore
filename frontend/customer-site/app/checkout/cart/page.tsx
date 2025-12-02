"use client";
import { useCartStore } from "@/app/_store/useCartStore";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Trash } from "lucide-react";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page() {
  const { data, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const coffeeLength = useCartStore((state) => state.cartItems);
  const { cartItems, updateQuantity, removeFromCart } = useCartStore();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmitCart = async () => {
    const { cartItems } = useCartStore.getState();

    if (isPending) return;

    if (!data?.session) {
      router.push("/authentication?redirect=/checkout/order");
      return;
    }

    router.push("/checkout/order");

    try {
      setLoading(true);
      const res = await axios.post("/api/cart", { cartItems });
      if (res.status === 200) {
        toast.success("با موفقیت ثبت شد.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="grow flex flex-col w-full items-center px-4 pt-[120px]">
        <div className="w-full max-w-5xl border-b">
          <ul className="flex border-b">
            <li className="px-2 py-2 flex gap-2 items-center border-b-4 border-coffee-300">
              <p className="font-semibold text-md">سبد خرید</p>
              <span className="bg-coffee-300 rounded-sm w-6 flex items-center justify-center text-white">
                {coffeeLength.length}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center px-4 lg:px-8 py-3 gap-6">
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          {coffeeLength.length === 0 ? (
            <Link href="/">بازگشت به خانه</Link>
          ) : (
            <span className="mb-3 flex gap-2 px-2">
              <p className="font-semibold text-md">سبد خرید کاربر</p>
              <p className="text-sm text-gray-500">{cartItems.length} کافی </p>
            </span>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="px-4 py-4 border bg-white/40 rounded-sm shadow-sm"
            >
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-start">
                  <Image
                    src={item.image}
                    width={120}
                    height={120}
                    alt={item.name}
                    className="rounded-md object-cover"
                  />
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold">
                      نام محصول: {item.name}
                    </span>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex justify-center items-center shadow border bg-white rounded-lg w-[140px] py-2 gap-3">
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>

                    {item.quantity <= 1 ? (
                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash className="w-5 h-5 text-red-500" />
                      </button>
                    ) : (
                      <button
                        className="px-2"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    )}
                  </div>

                  <span className="text-xl flex gap-2">
                    قیمت:{" "}
                    <p className="font-semibold">
                      {Number(item.price).toLocaleString("fa-IR")}
                    </p>{" "}
                    تومان
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[20%] h-auto lg:h-[250px] bg-white shadow-xl border rounded-md px-6 py-5 grid gap-4">
          <span className="font-semibold">قیمت کافی :</span>
          <span className="flex">
            قیمت کل:{" "}
            <p className="font-semibold mr-1">
              {Number(totalPrice).toLocaleString("fa-IR")} تومان
            </p>
          </span>

          <button
            onClick={handleSubmitCart}
            className="bg-coffee-400 text-white rounded-md py-3"
            disabled={loading}
          >
            {loading ? "در حال پردازش..." : "تکمیل سفارش"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
