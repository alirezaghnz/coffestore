"use client";

import Link from "next/link";
import { Home, User, ShoppingCart, Coffee } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileCartDrawer from "./MobileCartDrawer";
import { useCartStore } from "../_store/useCartStore";

export default function MobileBottomNav() {
  //for mobile versions
  const [openDrawer, setOpenDrawer] = useState(false);
  const { cartItems } = useCartStore();
  //when path to profile, we need to disable this mobile bottom nav
  const pathname = usePathname();

  if (pathname.startsWith("/profile")) return null;

  //active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const links = [
    { href: "/", label: "خانه", icon: Home },
    { href: "/menu", label: "کافی منو", icon: Coffee },
    { href: "/profile", label: "پروفایل", icon: User },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-1 z-50 md:hidden">
        {links.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center relative px-4 py-2"
            >
              {active && (
                <span className="absolute top-0 w-full h-[3px] bg-blue-500 rounded-full"></span>
              )}

              <Icon
                className={`w-6 h-6 ${
                  active ? "text-blue-600" : "text-gray-600"
                }`}
              />
              <span
                className={`text-xs mt-1 ${
                  active ? "text-blue-600 font-semibold" : "text-gray-600"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        <button
          className="flex flex-col items-center relative px-4 py-2"
          onClick={() => setOpenDrawer(true)}
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <div className="text-sm mt-1 text-gray-700">
            <span className="rounded px-1 translate-y-[-30px] bg-gray-600 text-white ">
              {cartItems.length}
            </span>
            <span>سبد</span>
          </div>
        </button>
      </nav>

      {openDrawer && (
        <MobileCartDrawer closeDrawer={() => setOpenDrawer(false)} />
      )}
    </>
  );
}
