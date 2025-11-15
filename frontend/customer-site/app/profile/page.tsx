"use client";

import { useState } from "react";
import Header from "../_components/Header";
import UsersInfoForms from "../_components/UsersInfoForms";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("orders");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex p-6 pt-[130px]">
        {/* buttons */}
        <div className="w-1/4 bg-white shadow rounded-xl p-4 flex flex-col gap-3 order-1">
          <button
            onClick={() => setActiveSection("account")}
            className={`p-3 rounded-lg text-right ${
              activeSection === "account"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            اطلاعات حساب
          </button>
          <button
            onClick={() => setActiveSection("orders")}
            className={`p-3 rounded-lg text-right ${
              activeSection === "orders"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            سفارش‌ها
          </button>

          <button
            onClick={() => setActiveSection("address")}
            className={`p-3 rounded-lg text-right ${
              activeSection === "address"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            آدرس‌ها
          </button>
        </div>

        {/* Content  */}
        <div className="flex-1 bg-white shadow rounded-xl p-6 mr-6 order-2">
          {activeSection === "orders" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">سفارش‌های من</h2>
              <p className="text-gray-600">
                در این بخش لیست سفارش‌های شما نمایش داده می‌شود.
              </p>
            </div>
          )}

          {activeSection === "account" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                اطلاعات حساب کاربری
              </h2>
              <UsersInfoForms />
            </div>
          )}

          {activeSection === "address" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">آدرس‌ها</h2>
              <p className="text-gray-600">
                آدرس‌های ثبت‌شده شما در این بخش نمایش داده می‌شود.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
