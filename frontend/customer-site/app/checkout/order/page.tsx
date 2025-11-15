"use client";
import Header from "@/app/_components/Header";
import Input from "@/app/_components/ui/Input";
import { useForm } from "react-hook-form";
import { addUserOrderInfo } from "./_actions";
import { useCartStore } from "@/app/_store/useCartStore";
import { useEffect, useState } from "react";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const cartItems = useCartStore((state) => state.cartItems);
  const [form, setForm] = useState({ name });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/profile");
      const data = await res.json();
      if (res.ok) setForm(data);
    };
    fetchUsers();
  }, []);

  async function onSubmit(data: any) {
    await addUserOrderInfo({ ...data, cartItems });
  }
  return (
    <>
      <Header />
      <div className="grow flex flex-col w-full items-center px-20 pt-[150px] h-screen">
        <div className="border bg-cream-light border-gray-200 shadow-md rounded-xl w-[1400px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap justify-center items-center gap-7 px-2 py-10"
          >
            <Input
              {...register("email")}
              label="ایمیل آدرس"
              defaultValue="alirezagholinezhaad@gmail.com"
              placeholder="ایمیل خود را وارد نمایید"
              disabled
              value={form.email}
            />
            <Input
              {...register("name")}
              label="نام"
              placeholder="نام خود را وارد نمایید"
              value={form.name}
            />
            <Input
              {...register("lastName")}
              label="نام خانوادگی"
              placeholder="نام خانوادگی خود را وارد نمایید"
              value={form.name}
            />
            <Input
              {...register("province")}
              label="استان"
              defaultValue="مازندران"
              placeholder="مازندران"
              disabled
            />

            <Input
              {...register("mobile")}
              label="شماره موبایل"
              placeholder="شماره موبایل خود را وارد نمایید"
              value={form.phone}
            />
            <Input
              {...register("codemelli")}
              label="کد ملی"
              placeholder="کد ملی خود را وارد نمایید"
            />

            <Input
              {...register("location")}
              label="لوکیشن"
              placeholder="لوکیشن خود را وارد نمایید"
            />
            <Input
              {...register("pelak")}
              label="پلاک"
              placeholder="پلاک را وارد نمایید"
            />

            <button
              type="submit"
              className="border px-9 py-2 bg-red-500 rounded-md"
            >
              ثبت
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
