"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { LogIn, MapPin } from "lucide-react";
import CartIcon from "./CartIcon";
import { authClient } from "../lib/auth-client";
import UserInfoHeader from "./UserInfoHeader";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState<any>(null);

  const { data: session} = authClient.useSession();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (!session) return;
    const fetchAddress = async () => {
      const res = await fetch("/api/user/default-address");
      const data = await res.json();
      setDefaultAddress(data);
    };
    fetchAddress();
  }, [session]);

  const translate = Math.min(scrollY / 5, 18);



  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-black/5 transition-transform"
      style={{ transform: `translateY(-${translate}px)` }}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        
      
        <div className="flex items-center gap-4">
          <button
            aria-label="menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {open ? "✖" : "☰"}
          </button>

          <Link href="/" className="text-xl font-bold text-gray-800">
            پمو کافی
          </Link>
        </div>

       
        <nav className="hidden md:flex">
          <Navigation />
        </nav>

      
        <div className="flex items-center gap-7">

         
          {session && defaultAddress && (
            <div className="hidden md:flex items-center gap-2 text-gray-600 bg-gray-100 px-8 py-1 rounded-lg">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-sm">
               {defaultAddress.province}
              </span>
            </div>
          )}

          
          {session ? (
            <UserInfoHeader />
          ) : (
            <Link
              href="/authentication"
              className="px-4 py-2 rounded-md bg-gradient-to-l from-cyan-500 to-cyan-400 text-white flex items-center gap-2 shadow-sm"
            >
              <LogIn className="w-5 h-5" />
              ورود / ثبت‌نام
            </Link>
          )}

          <CartIcon />
        </div>
      </div>

      
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-gray-50 border-t">
          <Navigation />

          {session && defaultAddress && (
            <div className="mt-4 flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>
                {defaultAddress.city}، {defaultAddress.province}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}