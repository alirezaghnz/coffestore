"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { useCartStore } from "@/app/_store/useCartStore";
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
      <div className="flex justify-center px-10 py-3 gap-4">
        <div className="w-[50%]">
          {coffeeLength.length === 0 ? (
            <Link href="/">بازگشت به خانه</Link>
          ) : (
            <span className="mb-3 flex gap-2">
              <p className="font-semibold text-md px-7">سبد خرید کاربر </p>
              <p className="text-sm text-gray-500">{cartItems.length} کافی </p>
            </span>
          )}

          {cartItems.map((item) => (
            <div className="px-10 py-5" key={item.id}>
              <div className="grid">
                <div className="flex gap-2 ">
                  <div className="flex gap-9">
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                    <span>توضیحات:{item.description}</span>
                  </div>
                </div>
                <div className="flex gap-7 mt-10">
                  <div className="flex justify-center mb-8 items-center border border-coffee-300 rounded-lg w-[150px] py-3 gap-2">
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
                  <span className="flex justify-center items-center text-xl">
                    قیمت : {item.price} تومان
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 border border-coffee-300 rounded-md w-[20%] h-[250px] px-6 py-5">
          <span>قیمت کافی :</span>
          <span className="flex">
            قیمت کل : <p className="font-semibold">{totalPrice} تومان</p>{" "}
          </span>
          <button className="bg-coffee-400 text-white rounded-md px-2 py-5">
            تکمیل سفارش
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
