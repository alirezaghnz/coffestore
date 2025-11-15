"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { useCartStore } from "@/app/_store/useCartStore";
import axios from "axios";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const coffeeLength = useCartStore((state) => state.cartItems);
  const { cartItems, updateQuantity, removeFromCart } = useCartStore();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmitCart = async () => {
    const { cartItems } = useCartStore.getState();
    try {
      const res = await axios.post("/api/cart", { cartItems });
      if (res.status === 200) {
        alert("سبد خرید ثبت شد");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="grow flex flex-col w-full items-center px-6 pt-[150px]">
        <div className="border-b w-[1400px] ">
          <ul className="flex relative border-b">
            <li className="relative px-2 py-2 gap-2 flex flex-row items-start justify-center border-b-4 border-coffee-300">
              <p className="font-semibold text-md">سبد خرید</p>
              <span className="bg-coffee-300 rounded-sm w-6 items-center justify-center text-white flex">
                {coffeeLength.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center  px-8 py-3 gap-6">
        <div className="w-[45%] flex flex-col gap-6">
          {coffeeLength.length === 0 ? (
            <Link href="/">بازگشت به خانه</Link>
          ) : (
            <span className="mb-3 flex gap-2">
              <p className="font-semibold text-md px-7">سبد خرید کاربر </p>
              <p className="text-sm text-gray-500">{cartItems.length} کافی </p>
            </span>
          )}

          {cartItems.map((item) => (
            <div
              className="px-5 py-4 border bg-white/40 rounded-sm"
              key={item.id}
            >
              <div className="flex  flex-col gap-9">
                <div className="flex gap-2">
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-8 px-4">
                    <span className="font-semibold">
                      نام محصول: {item.name}{" "}
                    </span>
                    <p>توضیحات:{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex justify-center mb-8 items-center shadow-lg border-coffee-300 bg-white  rounded-lg w-[150px] py-3 gap-2">
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    {item.quantity <= 1 ? (
                      <button onClick={() => removeFromCart(item.id)}>
                        {" "}
                        <Trash className="w-5 h-5" />
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
                    قیمت : <p className="font-semibold">{item.price} </p>تومان
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 bg-white shadow-xl border-coffee-300 rounded-md w-[20%] h-[250px] px-6 py-5">
          <span>قیمت کافی :</span>
          <span className="flex">
            قیمت کل : <p className="font-semibold">{totalPrice} تومان</p>{" "}
          </span>
          <button
            onClick={handleSubmitCart}
            className="bg-coffee-400 text-white rounded-md px-2 py-5"
          >
            <span> تکمیل سفارش</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
