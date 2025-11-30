"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../_components/Header";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { path: "account", label: "اطلاعات حساب", href: "/profile/account" },
    { path: "orders", label: "سفارش‌ها", href: "/profile/orders" },
    { path: "addresses", label: "آدرس‌ها", href: "/profile/addresses" },
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row p-6 pt-[130px]">
        <div className="hidden md:flex w-1/4 bg-white shadow rounded-xl p-4 flex-col gap-3">
          {links.map((item) => (
            <Link
              key={item.path}
              href={item.href}
              className={`p-3 rounded-lg text-right block ${
                pathname.includes(item.path)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex-1 bg-white shadow rounded-xl p-6">{children}</div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex">
        {links.map((item) => (
          <Link
            key={item.path}
            href={item.href}
            className={`flex-1 text-center py-2 ${
              pathname.includes(item.path)
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
