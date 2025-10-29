"use client";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { User } from "lucide-react";
import CartIcon from "./CartIcon";
import { authClient } from "../lib/auth-client";
import UserInfoHeader from "./UserInfoHeader";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const { data: session, isPending: isLoading } = authClient.useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translate = Math.min(scrollY / 4, 18);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-coffee-100 shadow-md transition-transform duration-300"
      style={{ transform: `translateY(-${translate}px)` }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            aria-label="menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md text-coffee-600 hover:bg-black/5"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link
            href="/"
            className="text-base md:text-xl font-semibold text-coffee-600"
          >
            پمو کافی
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center">
          <Navigation />
        </nav>

        {/* login and cartIcon */}
        <div className="flex items-center gap-10">
          {session ? (
            <UserInfoHeader />
          ) : (
            <Link href="/authentication">
              <User className="w-7 h-7" />
            </Link>
          )}

          <CartIcon />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t bg-coffee-100">
          <div className="flex flex-col gap-2">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
// ...existing code...
