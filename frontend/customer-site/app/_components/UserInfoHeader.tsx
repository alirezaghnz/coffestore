"use client";
import { User, Settings, FileText, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

export default function UserInfoHeader() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = authClient.useSession();
  const modalRef = useRef<HTMLDivElement>(null);

  // for handle click outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    }
    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  //modal items
  const modalItems = [
    {
      icon: User,
      label: `کاربر ${session?.user.name} `,
      href: "/profile",
    },
    {
      icon: Settings,
      label: "تنظیمات",
      href: "/settings",
    },
    {
      icon: FileText,
      label: "سفارشات",
      href: "/orders",
    },
    {
      icon: LogOut,
      label: "خروج کاربری",
      href: "",
    },
  ];

  const handleModalClick = (href: any) => {
    router.push(href);
    setOpenModal(false);
  };
  return (
    <div className="relative " ref={modalRef}>
      <button className="flex" onClick={() => setOpenModal(!openModal)}>
        <User className="w-7 h-7 cursor-pointer" />
        <span className="cursor-pointer">⮟</span>
      </button>

      {openModal && (
        <div className="absolute w-[300px] top-full right-0 mt-3 bg-white rounded-xl shadow-2xl overflow-hidden z-50 px-9">
          {modalItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleModalClick(item.href)}
                className="w-full px-9 py-4 flex items-center duration-150 border-b border-gray-50 last:border-b-0"
              >
                <div className="p-2 rounded-lg ">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex">
                  <div className="font-medium text-base">{item.label}</div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
