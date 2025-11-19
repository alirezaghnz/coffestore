"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data:", form);

    // TODO: ارسال اطلاعات به بک‌اند
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">تکمیل سفارش</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* فرم اطلاعات */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-white shadow p-6 rounded-xl space-y-4"
        >
          <h2 className="text-xl font-semibold mb-2">اطلاعات مشتری</h2>

          <div>
            <label className="block mb-1">نام و نام خانوادگی</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1">شماره تماس</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1">آدرس کامل</label>
            <textarea
              name="address"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1">یادداشت سفارش (اختیاری)</label>
            <textarea
              name="note"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="2"
            ></textarea>
          </div>

          <button className="w-full bg-black text-white p-3 rounded-lg mt-4 hover:bg-gray-800">
            ثبت و ادامه
          </button>
        </form>

        {/* خلاصه سفارش */}
        <div className="bg-white shadow p-6 rounded-xl h-fit">
          <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>قهوه اسپرسو</span>
              <span>۲۳۰٬۰۰۰ تومان</span>
            </div>
            <div className="flex justify-between">
              <span>مجموع</span>
              <span>۲۳۰٬۰۰۰ تومان</span>
            </div>
          </div>

          <hr className="my-4" />

          <p className="text-sm text-gray-500">
            هزینه ارسال هنگام تحویل محاسبه می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}
